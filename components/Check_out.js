"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CircularProgress,
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import axios from "axios";
import { useData } from "@/context/context";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { HomeCollectionData } from "@/components//HomeCollectionData";
import { Female } from "@/components/svg-components/Female";
import Image from "next/image";
import { OtherGender } from "@/components/svg-components/OtherGender";
import { Male } from "@/components/svg-components/Male";
import IsHomeCollection from "@/components/IsHomeCollection";
import homecollection from "@/components/svg-components/homecollection.svg";
import microscope from "@/components/svg-components/microscope.svg";
import { useAlert } from "@/context/AlerterContext";
import Address from "@/components/svg-components/Address";
import Calender from "@/components/svg-components/Calender";
import SlotTime from "@/components/SlotTime";

const UserDataForm = ({ onPrevStep, onNextStep, onFormData }) => {
  const { cartState, cartDispatch } = useData();
  const { showAlert } = useAlert();
  const [internalTimeSlots, setInternalTimeSlots] = useState([]);
  const [isHomeCollection, setIsHomeCollection] = useState("none");
  const [removedDates] = useState([""]);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name should have a minimum length of 3 characters"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^[0-9]{10}$/,
        "Invalid Phone Number format (should be 10 digits)"
      ),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    ...(isHomeCollection.selectedPlan === "Home_collection" && {
      address: Yup.string().required("Address is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      pincode: Yup.string().required("Pincode is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      dob: "",
      age: "",
      gender: "",
      isHomecollection: false, // Initially set to false
      address: "",
      date: "",
      time: "",
      pincode: "",
      city: "",
      state: "",
      homeCollectionDateTime: "",
      selectedPlan: "", // Add selectedPlan field
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Submitting form...", values);
      try {
        // Handle form submission
        const apiUrl =
          "https://www.assurepathlabs.com/api/algos/booking_submit_api.php";

        const apiData = {
          fullName: values.name,
          age: values.age,
          gender: values.gender,
          isHomecollection:
            values.selectedPlan === "Home_collection" ? "1" : "0",
          address:
            values.selectedPlan === "Home_collection" ? values.address : "",
          pincode:
            values.selectedPlan === "Home_collection" ? values.pincode : "",
          city: values.selectedPlan === "Home_collection" ? values.city : "",
          state: values.selectedPlan === "Home_collection" ? values.state : "",
          homeCollectionDateTime:
            values.selectedPlan === "Home_collection"
              ? formatDateTime(values.date, values.time)
              : "",
          totalAmount: 1205,
          advance: 0,
          organizationIdLH: 324559,
          testID: 3992066,
          testCode: 3992066,
          integrationCode: "-",
          dictionaryId: "-",
        };

        console.log(apiData);
        cartDispatch({
          type: "UPDATE_USER_DATA",
          userData: {
            name: apiData.fullName,
            age: apiData.age,
            gender: apiData.gender,
          },
        });
        console.log("thiws is the slctresedf plab", values.selectedPlan);

        const response = await axios.post(apiUrl, apiData);

        if (response.data && response.data.code === 200) {
          console.log("Booking submitted successfully!");
          showAlert("success", "Booking success", "success");
          onNextStep();
        } else {
          console.error(
            "API request failed. Error message:",
            response.data.Message
          );
        }
      } catch (error) {
        console.error("Error submitting booking data:", error.message);
        showAlert("Error", "Network error", "error");

        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
        throw error; // rethrow the error to propagate it
      }
    },
  });

  useEffect(() => {
    const calculateAndSetAge = async () => {
      const age = calculateAge(formik.values.dob);
      formik.setFieldValue("age", age);
    };

    calculateAndSetAge();
  }, [formik.values.dob]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const age = calculateAge(value);
      formik.setFieldValue("age", age);
    }

    formik.handleChange(e);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age >= 0 && age <= 150) {
      return age;
    } else {
      const wrongAgeError = {
        dob: "Enter the correct Date of birth",
      };
      formik.setErrors(wrongAgeError);
      return 0;
    }
  };

  const handleGenderChange = (e) => {
    formik.setFieldValue("gender", e.target.id);
  };
  const handleRadioChange = (event) => {
    formik.setFieldValue("selectedPlan", event.target.id);
    // setIsHomeCollection(initialValues);    
    setIsHomeCollection((prevState) => ({
      ...prevState,
      selectedPlan: event.target.id,
    }));
  };

  useEffect(() => {
    const fetchTimeSlots = async () => {
      console.log(formik.values.date);
      try {
        const response = await axios.get(
          `https://www.assurepathlabs.com/api/algos/generate_time_slot.php?currentDate=${formik.values.date}`
        );
        const slotData = response.data.test_data;
        setInternalTimeSlots(slotData);
      } catch (error) {
        console.error("Error fetching time slots:", error);
        setInternalTimeSlots(error);
      }
    };

    if (formik.values.date) {
      fetchTimeSlots();
    }
  }, [formik.values.date, setInternalTimeSlots]);
  const handleSlotSelection = (selectedTime) => {
    formik.setFieldValue("time", selectedTime);
  };
  const bookingDate = generateRadioData(removedDates).map((date) => ({
    value: date.value,
    label: date.label,
    body: date.body,
    month: date.month,
  }));

  const handleDateChange = (value) => {
    formik.setFieldValue("date", value);
  };
  console.log(formik.touched.name && Boolean(formik.errors.name));

  return (
    <>
      <section className="position-relative">
        <div className="gradient-layer"></div>
        <div className="container">
          <div className="web-container">
            <div className="row gap-sm-3 gap-md-0  ">
              <div className="col-11 col-md-10 mx-auto">
                <h3>
                  <strong>User Details</strong>
                </h3>
                <form onSubmit={formik.handleSubmit} noValidate>
                  <div className="user_details">
                    <div className="col-12 d-flex justify-content-between flex-column flex-md-row checkout_input">
                      <TextField
                        type="text"
                        className="col-md-3 col-10 mx-md-3"
                        variant="standard"
                        label="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                        onBlur={() => formik.setFieldTouched("name", true)}
                        inputProps={{
                          onFocus: () => formik.setFieldTouched("name", false),
                        }}
                        InputProps={{
                          onEmpty: (event) => {
                            useEffect(() => {
                              formik.setFieldTouched("name", true);
                            }, []);
                          },
                        }}
                      />
                      <TextField
                        type="tel"
                        className="col-md-3 col-10 mx-md-3"
                        variant="standard"
                        label="Contact Number"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                        onBlur={() =>
                          formik.setFieldTouched("phoneNumber", true)
                        }
                        inputProps={{
                          onFocus: () =>
                            formik.setFieldTouched("phoneNumber", false),
                        }}
                        InputProps={{
                          onEmpty: (event) => {
                            useEffect(() => {
                              formik.setFieldTouched("phoneNumber", true);
                            }, []);
                          },
                        }}
                      />
                      <TextField
                        type="date"
                        className="col-md-3 col-10 mx-md-3"
                        variant="standard"
                        label="Date of Birth"
                        name="dob"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                        helperText={formik.touched.dob && formik.errors.dob}
                        onBlur={() => formik.setFieldTouched("dob", true)}
                        inputProps={{
                          onFocus: () => formik.setFieldTouched("dob", false),
                        }}
                        InputProps={{
                          onEmpty: (event) => {
                            useEffect(() => {
                              formik.setFieldTouched("dob", true);
                            }, []);
                          },
                        }}
                      />
                    </div>
                    <div className="radio-buttons">
                      <div className="title">Choose your Gender</div>
                      <label className="custom-radio" htmlFor="male">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          checked={formik.values.gender === "male"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.touched.gender &&
                            Boolean(formik.errors.gender)
                              ? "input_error"
                              : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
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
                          checked={formik.values.gender === "female"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.touched.gender &&
                            Boolean(formik.errors.gender)
                              ? "input_error"
                              : ""
                          }`}
                        >
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
                          checked={formik.values.gender === "other"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.touched.gender &&
                            Boolean(formik.errors.gender)
                              ? "input_error"
                              : ""
                          }`}
                        >
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
                  </div>
                  <div className="plans">
                    <div className="title">Choose Test Type</div>
                    <div className="plans_selection">
                      <label className="plan basic-plan" for="Home_collection">
                        <input
                          type="radio"
                          name="plan"
                          id="Home_collection"
                          checked={
                            formik.values.selectedPlan === "Home_collection"
                          }
                          onChange={handleRadioChange}
                        />
                        <div className="plan-content">
                          <Image
                            loading="lazy"
                            src={homecollection}
                            alt=""
                            width={72}
                            height={72}
                          />
                          <div className="plan-details">
                            <span>Home Collection</span>
                            <p>
                              For smaller business, with simple salaries and pay
                              schedules.
                            </p>
                          </div>
                        </div>
                      </label>

                      <label className="plan complete-plan" for="Walk-in">
                        <input
                          type="radio"
                          id="Walk-in"
                          name="plan"
                          checked={formik.values.selectedPlan === "Walk-in"}
                          onChange={handleRadioChange}
                        />
                        <div className="plan-content">
                          <Image
                            loading="lazy"
                            src={microscope}
                            alt=""
                            height={72}
                            width={72}
                          />
                          <div className="plan-details">
                            <span>Walk In</span>
                            <p>
                              For growing business who wants to create a
                              rewarding place to work.
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <Accordion
                    expanded={formik.values.selectedPlan === "Home_collection"}
                    className="shadow-none isHomeCollection"
                  >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="d-none shadow-none"
                    ></AccordionSummary>
                    <AccordionDetails className="shadow-none p-0">
                      <div
                        className={`home_collection_data ${(cartState.userAddress.IsHomeCollection =
                          1 ? "d-block" : "d-none")}`}
                      >
                        <h3>
                          <strong> Home Collection Details</strong>
                        </h3>
                        <div className="hcd_time">
                          <div className="hcd_time_date">
                            <div className="hcd_select_date">
                              <article className=" slots-content">
                                <div className=" day-picker mb-5">
                                  <section className="date-header mb-2">
                                    <div className="title">
                                      <Calender />
                                      Select Date
                                    </div>
                                  </section>
                                  <div
                                    className="hcd_date_seection"
                                    role="radiogroup"
                                    aria-required="false"
                                    dir="ltr"
                                    tabIndex="0"
                                  >
                                    {bookingDate.map((item, index) => (
                                      <div
                                        className="radio-buttons"
                                        key={index}
                                      >
                                        <label
                                          className="custom-radio"
                                          htmlFor={`radio${index}`}
                                        >
                                          <input
                                            type="radio"
                                            name="dateSelection"
                                            id={`radio${index}`}
                                            onChange={() =>
                                              handleDateChange(item.value)
                                            }
                                            checked={
                                              formik.values.date === item.value
                                            }
                                          />
                                          <span
                                            className={`radio-btn ${
                                              formik.touched.date &&
                                              Boolean(formik.errors.date)
                                                ? "input_error"
                                                : ""
                                            }`}
                                          >
                                            <i className="las la-check">
                                              <FaCheck />
                                            </i>
                                            <div className="hobbies-icon">
                                              <div className="slot-option">
                                                <span className="day-picker-month">
                                                  {item.month}
                                                </span>
                                                <span className="day-picker-day">
                                                  <strong>{item.label}</strong>
                                                </span>
                                                <h3 className="">
                                                  {item.body}
                                                </h3>
                                              </div>
                                            </div>
                                          </span>
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {/* SlotTime component */}
                                <SlotTime
                                  timeSlots={internalTimeSlots}
                                  onSlotSelect={handleSlotSelection}
                                  isError={
                                    formik.touched.time &&
                                    Boolean(formik.errors.time)
                                  }
                                />
                              </article>
                              <article className="address mt-5">
                                <div className="title">
                                  <Address className="mx-2" />
                                  Fill your address
                                </div>
                                {/* Address form */}
                                {/* <form onSubmit={formik.handleSubmit}> */}
                                {/* Address fields */}
                                <div className="col-12 d-flex justify-content-between">
                                  {/* Address line 1 */}
                                  <TextField
                                    className="mx-3 col-lg-6 col-10"
                                    id="address"
                                    label="Address"
                                    name="address"
                                    type="text"
                                    variant="standard"
                                    value={formik.values.address}
                                    onChange={(e) => {
                                      formik.handleChange(e);
                                      formik.setFieldTouched("address", true);
                                    }}
                                    error={
                                      formik.touched.address &&
                                      Boolean(formik.errors.address)
                                    }
                                    helperText={
                                      formik.touched.address &&
                                      formik.errors.address
                                    }
                                    onBlur={() =>
                                      formik.setFieldTouched("address", true)
                                    }
                                    inputProps={{
                                      onFocus: () =>
                                        formik.setFieldTouched(
                                          "address",
                                          false
                                        ),
                                    }}
                                  />
                                </div>
                                {/* Pincode, City, State fields */}
                                <div className="col-lg-7 col-12 mt-2 mt-md-5 flex-column gap-2 flex-md-row d-flex ">
                                  {/* Pincode */}
                                  <TextField
                                    className="mx-3 col-10 col-md-3"
                                    id="pincode"
                                    label="Pincode"
                                    name="pincode"
                                    type="text"
                                    variant="standard"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.pincode &&
                                      Boolean(formik.errors.pincode)
                                    }
                                    helperText={
                                      formik.touched.pincode &&
                                      formik.errors.pincode
                                    }
                                    onBlur={() =>
                                      formik.setFieldTouched("pincode", true)
                                    }
                                    inputProps={{
                                      onFocus: () =>
                                        formik.setFieldTouched(
                                          "pincode",
                                          false
                                        ),
                                    }}
                                    InputProps={{
                                      onEmpty: (event) => {
                                        useEffect(() => {
                                          formik.setFieldTouched(
                                            "pincode",
                                            true
                                          );
                                        }, []);
                                      },
                                    }}
                                  />
                                  {/* City */}
                                  <TextField
                                    className="mx-3 col-10 col-md-3"
                                    id="city"
                                    label="city"
                                    name="city"
                                    type="text"
                                    variant="standard"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.city &&
                                      Boolean(formik.errors.city)
                                    }
                                    helperText={
                                      formik.touched.city && formik.errors.city
                                    }
                                    onBlur={() =>
                                      formik.setFieldTouched("city", true)
                                    }
                                    inputProps={{
                                      onFocus: () =>
                                        formik.setFieldTouched("city", false),
                                    }}
                                    InputProps={{
                                      onEmpty: (event) => {
                                        useEffect(() => {
                                          formik.setFieldTouched("city", true);
                                        }, []);
                                      },
                                    }}
                                  />
                                  {/* State */}
                                  <TextField
                                    className="mx-3 col-10 col-md-3"
                                    id="state"
                                    label="State"
                                    name="state"
                                    type="text"
                                    variant="standard"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    error={
                                      formik.touched.state &&
                                      Boolean(formik.errors.state)
                                    }
                                    helperText={
                                      formik.touched.state &&
                                      formik.errors.state
                                    }
                                    onBlur={() =>
                                      formik.setFieldTouched("state", true)
                                    }
                                    inputProps={{
                                      onFocus: () =>
                                        formik.setFieldTouched("state", false),
                                    }}
                                    InputProps={{
                                      onEmpty: (event) => {
                                        useEffect(() => {
                                          formik.setFieldTouched("state", true);
                                        }, []);
                                      },
                                    }}
                                  />
                                </div>
                                {/* Submit button */}
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <div className="nav_button mt-5 col-12 d-flex justify-content-between">
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={onPrevStep}
                        type="button"
                      >
                        <FaArrowLeftLong className="m-2" />
                        Check Cart
                      </button>
                    </div>
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        // onClick={formik.handleSubmit}

                        type="submit"
                      >
                        Proceed
                        <FaArrowRightLong className="m-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10" />
      </section>
    </>
  );
};

export default UserDataForm;

const generateRadioData = (removedDates) => {
  const today = new Date();
  const radioData = [];
  let currentDate = today;

  for (let i = 0; i < 4; i++) {
    let date = new Date(currentDate);
    while (removedDates.includes(date.toISOString().split("T")[0])) {
      date.setDate(date.getDate() + 1); // Skip removed dates
    }

    const formattedDate = date.toISOString().split("T")[0];

    radioData.push({
      value: formattedDate,
      label: date.getDate().toString(),
      month: date.toLocaleDateString("en-US", { month: "long" }),
      body:
        i === 0
          ? "Today"
          : i === 1
          ? "Tomorrow"
          : date.toLocaleDateString("en-US", { weekday: "long" }),
      isRemoved: removedDates.includes(formattedDate),
    });

    currentDate.setDate(date.getDate() + 1);
  }

  return radioData;
};
const formatDateTime = (date, time) => {
  if (!date || !time) {
    return "";
  }

  const [hour, minute, period] = time.split(/[:\s]/);
  const formattedHour =
    period === "PM" ? String(Number(hour) + 12) : hour.padStart(2, "0");
  const formattedTime = `${formattedHour}:${minute}:00`;

  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = formattedDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${formattedTime}Z`;
};
