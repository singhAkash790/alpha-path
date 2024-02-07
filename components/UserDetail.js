"use client";

import React, { useEffect, useState } from "react";
import { Alert, Snackbar, Stack, TextField } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { Female } from "./svg-components/Female";
import Image from "next/image";
import { OtherGender } from "./svg-components/OtherGender";
import { useData } from "@/context/context";
import { Male } from "./svg-components/Male";

export const UserDetail = () => {
  const { cartState, cartDispatch } = useData();
  const [userData, setUserData] = useState({
    designation: "",
    name: "",
    phoneNumber: "",
    dob: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    age: "",
    gender: "",
  });
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    phoneNumber: false,
    dob: false,
    gender: false,
  });

  const [isErrorOpen, setIsErrorOpen] = useState(false); // New state to manage error Snackbar

  // Function to calculate age based on date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age >= 0 && age <= 150) {
      return age;
    } else {
      const wrongAgeError = {
        designation: "Enter the correct Date of birth",
      };
      setErrors(wrongAgeError);
      return 0;
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTouchedFields((prevTouched) => ({ ...prevTouched, [name]: true }));

    if (name === "dob") {
      // Update age when dob changes
      const age = calculateAge(value);
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
        age: age,
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check if the name field is empty or has less than 3 characters
    if (userData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Check if the name field has a minimum length of 3 characters
    if (userData.name.trim().length < 3) {
      newErrors.name = "Name should have a minimum length of 3 characters";
      isValid = false;
    }

    // Check if the phoneNumber field is empty or has an invalid format
    if (userData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "phoneNumber number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(userData.phoneNumber)) {
      newErrors.phoneNumber =
        "Invalid phoneNumber number format (should be 10 digits)";
      isValid = false;
    }

    // Check if the gender field is empty
    if (userData.dob.trim() === "") {
      newErrors.dob = "Date of birth reqiured is required";
      isValid = false;
    }

    // Check if the gender field is empty
    if (userData.gender.trim() === "") {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    // Update the component state with the new error messages
    setErrors(newErrors);

    // Return the overall validity of the form
    return isValid;
  };

  // Handle radio button changes
  const handleGenderChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      gender: e.target.id,
    }));
  };

  // Use useEffect to log the state whenever it changes
  useEffect(() => {
    // Check if all fields have been touched before validating
    const allFieldsTouched = Object.values(touchedFields).every(Boolean);

    if (allFieldsTouched && validateForm()) {
      cartDispatch({
        type: "UPDATE_USER_DATA",
        userData: userData,
      });
    } else {
      // If there are validation errors or not all fields touched, open the error Snackbar
      setIsErrorOpen(true);
    }
    // You can perform additional actions here, such as sending data to a server.
  }, [userData, touchedFields]); // Include touchedFields in the dependency array

  const handleCloseError = () => {
    setIsErrorOpen(false);
  };

  return (
    <>
      <div className="col-12 d-flex justify-content-between flex-column flex-md-row checkout_input">
        <TextField
          type="text"
          className="col-md-3 col-12 mx-md-3"
          required
          id="standard-required"
          defaultValue="Name"
          variant="standard"
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          type="tel"
          className="col-md-3 col-12 mx-md-3"
          required
          id="standard-required"
          defaultValue="Contact Number"
          variant="standard"
          label="Contact Number"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />
        <TextField
          className="col-md-3 col-12 mx-md-3"
          required
          label="Date of Birth"
          type="date"
          name="dob"
          variant="standard"
          value={userData.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          error={errors.dob}
        />
      </div>
      <div className="radio-buttons">
        <div className="title">Choose your Gender</div>
        <label className="custom-radio" htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            checked={userData.gender === "male"}
            onChange={handleGenderChange}
          />
          <span className={` radio-btn ${errors.gender ? "input_error" : ""}`}>
            <i className="las la-check">
              <FaCheck />
            </i>
            <div className="hobbies-icon">
              {/* <Image
                  src="/consultant.png"
                  alt=""
                  title="Dr. Sanjay Wadhwa"
                  width="120"
                  height="120"
                /> */}
              <Male />
              <h3 className="">Male</h3>
            </div>
          </span>
        </label>
        <label className="custom-radio" htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            checked={userData.gender === "female"}
            onChange={handleGenderChange}
            error={errors.gender}
          />
          <span className={` radio-btn ${errors.gender ? "input_error" : ""}`}>
            <i className="las la-check">
              <FaCheck />
            </i>
            <div className="hobbies-icon">
              <Female />
              <h3 className="">Female</h3>
            </div>
          </span>
        </label>
        <label className="custom-radio" htmlFor="other">
          <input
            type="radio"
            name="gender"
            id="other"
            checked={userData.gender === "other"}
            onChange={handleGenderChange}
          />
          <span className={` radio-btn ${errors.gender ? "input_error" : ""}`}>
            <i className="las la-check">
              <FaCheck />
            </i>
            <div className="hobbies-icon">
              <OtherGender />
              <h3 className="">Other</h3>
            </div>
          </span>
        </label>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {Object.values(errors).some((error) => error !== "") && (
          <Snackbar
            open={isErrorOpen}
            autoHideDuration={4000}
            onClose={handleCloseError}
          >
            <Alert
              onClose={handleCloseError}
              severity="error"
              sx={{ width: "100%" }}
            >
              {Object.values(errors).map(
                (error, index) => error !== "" && <div key={index}>{error}</div>
              )}
            </Alert>
          </Snackbar>
        )}
      </Stack>
    </>
  );
};
