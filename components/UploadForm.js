"use client";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useData } from "@/context/context";
import { useAlert } from "@/context/AlerterContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const API_URL =
  "http://assure.triverseadvertising.com/api/upload_prescription.php";

const allowedTypes = new Set([
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/png",
  "application/pdf",
  "application/msword",
]);

const UploadForm = () => {
  const { cartState, cartDispatch } = useData();
  const { showAlert } = useAlert();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      uploadPrescription: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name should have a minimum length of 3 characters"),
      phone: Yup.string()
        .required("Phone Number is required")
        .matches(
          /^[0-9]{10}$/,
          "Invalid Phone Number format (should be 10 digits)"
        ),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      uploadPrescription: Yup.mixed()
        .required("File is required")
        .test(
          "fileType",
          "Invalid file type",
          (value) => value && allowedTypes.has(value.type)
        )
        .test(
          "fileSize",
          "File size should be less than 2MB",
          (value) => value && value.size <= 2 * 1024 * 1024
        ),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);

        const formDataApi = new FormData();
        formDataApi.append("name", values.name);
        formDataApi.append("email", values.email);
        formDataApi.append("phone", values.phone);
        formDataApi.append("uploadPrescription", values.uploadPrescription);

        const response = await axios.post(API_URL, formDataApi, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setSubmitting(false);

        const alertType =
          response.status === 200
            ? "success"
            : response.status === 500 || response.status === 404
            ? "error"
            : "info";

        showAlert(
          alertType,
          response.data || `Request Successful: ${response.data}`,
          alertType
        );

        resetForm();
      } catch (error) {
        setSubmitting(false);
        showAlert("Error", "Network error", "error");
        console.error("Error:", error);
      }
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("uploadPrescription", event.currentTarget.files[0]);
    formik.setFieldTouched("uploadPrescription", true);
  };

  const handleRemoveFileClick = () => {
    formik.setFieldValue("uploadPrescription", null);
  };

  return (
    <>
      <Modal
        open={cartState.uploadFormVisible}
        onClose={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
      >
        <form className="form-container" encType="multipart/form-data">
          <div className="upload-files-container position-relative">
            <div
              className="_cross"
              onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
            >
              <RxCross2 />
            </div>
            <div className=" prescription-form  flex-center flex-direction-row align-items-start">
              <div className=" float-start upload-prescription-form">
                <h4>
                  <strong>UPLOAD PRESCRIPTION</strong>
                </h4>
                <div className="input-field flex-center flex-direction-column">
                  <TextField
                    type="text"
                    required
                    id="name"
                    variant="standard"
                    label="Name"
                    name="name"
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <TextField
                    type="tel"
                    required
                    id="phone"
                    variant="standard"
                    label="Contact Number"
                    name="phone"
                    value={formik.values.phone}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <TextField
                    type="email"
                    required
                    id="email"
                    variant="standard"
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <button
                  type="button"
                  className="button button--aylen button--round-l button--text-thick mt-3"
                  onClick={formik.handleSubmit}
                >
                  <span className="check-icon">
                    {formik.isSubmitting ? "Submitting..." : "SUBMIT"}
                  </span>
                </button>
              </div>
              <div className="drag-file-area ">
                <div className="upload-icon">
                  {formik.values.uploadPrescription ? (
                    <div className="file-preview d-flex justify-content-center align-items-center">
                      <img
                        src={URL.createObjectURL(
                          formik.values.uploadPrescription
                        )}
                        alt="File Preview"
                        className="col-7"
                      />
                    </div>
                  ) : (
                    <IoCloudUploadOutline />
                  )}
                </div>
                <h3 className="dynamic-message">
                  {formik.values.uploadPrescription
                    ? "File Successfully Selected!"
                    : "Select file here"}
                </h3>
                <label className="label">
                  <div className="browse-files alpha">
                    <input
                      id="prescription"
                      name="uploadPrescription"
                      accept="image/*"
                      type="file"
                      className="default-file-input"
                      style={formik.values.uploadPrescription ? { top: 0 } : {}}
                      onChange={handleFileChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="browse-files-text">
                      {formik.values.uploadPrescription
                        ? "Browse again "
                        : "Browse file from device"}
                    </span>
                    {formik.values.uploadPrescription && (
                      <span>Change your file</span>
                    )}  
                    {formik.touched.uploadPrescription &&
                      formik.errors.uploadPrescription && (
                        <div className="error_message">
                          {formik.errors.uploadPrescription}
                        </div>
                      )}
                  </div>
                </label>
              </div>
            </div>

            {formik.values.uploadPrescription && (
              <div className="file-block">
                <div className="file-info">
                  <span className="file-name">
                    {formik.values.uploadPrescription.name}
                  </span>
                  |
                  <span className="file-size">
                    {(formik.values.uploadPrescription.size / 1024).toFixed(1)}
                    KB
                  </span>
                </div>
                <div
                  className="material-icons remove-file-icon"
                  onClick={handleRemoveFileClick}
                >
                  <MdOutlineCancel />
                </div>
              </div>
            )}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UploadForm;
