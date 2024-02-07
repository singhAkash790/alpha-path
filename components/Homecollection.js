"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import { Alert, Snackbar, TextField } from "@mui/material";
import { Call } from "./svg-components/Call";
import { WhatsApp } from "./svg-components/WhatsApp";
import { useAlert } from "@/context/AlerterContext";

export const Homecollection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phoneNumber: false,
    email: false,
  });
  const { showAlert } = useAlert();
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const age = calculateAge(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        age: age,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      showAlert("Failure", "Name is required", "error");
      newErrors.name = true;
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      showAlert(
        "Failure",
        "Name should have a minimum length of 3 characters",
        "error"
      );
      newErrors.name = true;
      isValid = false;
    }

    if (formData.phoneNumber.trim() === "") {
      showAlert("Failure", "Phone Number is required", "error");
      newErrors.phoneNumber = true;
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      showAlert(
        "Failure",
        "Invalid Phone Number format (should be 10 digits)",
        "error"
      );
      newErrors.phoneNumber = true;
      isValid = false;
    }

    if (formData.email.trim() === "") {
      showAlert("Failure", "Email is required", "error");
      newErrors.email = true;
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showAlert("Failure", "Invalid email format", "error");
        newErrors.email = true;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      fetch(
        "http://assure.triverseadvertising.com/api/request_a_call_api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);
          if (data.success) {
            showAlert("Success", "Our team will contact you soon", "success");
            setFormData({
              name: "",
              phoneNumber: "",
              email: "",
            });
          } else {
            showAlert(
              "Failure",
              "Error in submitting inquiry, contact us on call or email",
              "error"
            );
            console.error("Server response indicates failure:", data.message);
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error during fetch:", error);
        });
    } else {
      setIsErrorOpen(true);
    }
  };

  const handleCloseError = () => {
    setIsErrorOpen(false);
  };
  const generateAOSAttributes = (index, baseDelay = 150, step = 30) => {
    const delay = baseDelay + index * step;
    return {
      "data-aos": "fade-up",
      "data-aos-delay": delay,
      "data-aos-duration": 200,
      "data-aos-once": true,
      "data-aos-offset": delay,
      "data-aos-easing": "cubic-bezier(.57,.21,.69,3.25)",
    };
  };

  return (
    <>
      <div className="enquireform col-12 float-start">
        <div className={styles.equireheading}>
          <article>
            <span className="pb-md-2">BOOK HOME COLLECTION</span>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            required
            id="name"
            variant="outlined"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            fullWidth
            autocomplete="username"
            className={`styles.inputmodified input-field `}
            {...generateAOSAttributes(1, 150, 20)}
          />
          <TextField
            type="tel"
            required
            id="phone_number"
            variant="outlined"
            label="Contact Number"
            autocomplete="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            fullWidth
            className={`styles.inputmodified input-field `}
            {...generateAOSAttributes(2, 150, 20)}

          />
          <TextField
            name="email"
            label="Email"
            autocomplete="email"
            variant="outlined"
            className={`styles.inputmodified input-field `}
            fullWidth
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            error={errors.email}
            {...generateAOSAttributes(1, 150, 20)}

          />
          <button
            type="submit"
            className="col-12 col-md-12 mx-md-auto button button--aylen button--round-l button--text-thick"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
        <div className="col-12 float-start cta flex-center justify-content-center">
          <div className="col-lg-5 col-xs-6 col-6 grid-center text-center gap-1 whatsapp">
            <WhatsApp /> <p>WhatsApp</p>
          </div>
          <div className="col-lg-5 col-xs-6 col-6 grid-center text-center gap-1 call">
            <Call /> <p>Call</p>
          </div>
        </div>
      </div>
    </>
  );
};
