"use client";

import React, { Suspense, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Morning from "./svg-components/Morning";
import Evening from "./svg-components/Evening";
import Calender from "./svg-components/Calender";
import Clock from "./svg-components/Clock";
import Address from "./svg-components/Address";
import { TextField } from "@mui/material";
import { useData } from "@/context/context";
import { CleaningServices } from "@mui/icons-material";
import SlotTime from "./SlotTime";
import slotTimes from "@/Data/slot_time.json";
import axios from "axios";


const IsHomeCollection = ({ HomeColData }) => {
  const { cartState, cartDispatch } = useData();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [internalTimeSlots, setInternalTimeSlots] = useState([]);
  const [removedDates] = useState([""]);

  const bookingDate = generateRadioData(removedDates).map((date) => ({
    value: date.value,
    label: date.label,
    body: date.body,
    month: date.month,
  }));

  const [formData, setFormData] = useState({
    address: "",
    homeCollectionDateTime: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "dateSelection") {
      setSelectedDate(value);
    }
    // else if (name === "timeSlot") {
    //   setSelectedTime(value === "morning" ? "10:00" : "16:00");
    // }
  };
  useEffect(() => {
    // Trigger form submission when formData changes
    HomeColData(formData);
  }, [formData, HomeColData]);

  // selected slot from the time slot component
  const handleSlotSelection = (selectedTime, selectedDate) => {
    // Log selected slots and date to check the structure
    console.log("Selected Time:", selectedTime);
    console.log("Selected Date:", selectedDate);

    // Format the selected date and time as needed
    const formattedDateTime = formatDateTime(selectedDate, selectedTime);
    console.log("Formatted Date and Time:", formattedDateTime);

    // Send the formatted date and time to the parent component
    HomeColData({ ...formData, homeCollectionDateTime: formattedDateTime });
  };

  // this is the api for the time slot
  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        // Use the selectedDate state to pass the selected date to the API
        const response = await axios.get(
          `https://www.assurepathlabs.com/api/algos/generate_time_slot.php?currentDate=${selectedDate}`
        );

        // Assuming the response data has a structure like { test_data: { result: "success", available_time_slots: {...} } }
        const slotData = response.data.test_data;

        // Check if the result is "success" and available_time_slots is not empty

        setInternalTimeSlots(slotData);
      } catch (error) {
        console.error("Error fetching time slots:", error);
        setInternalTimeSlots(error);
        // Handle the error state
      }
    };

    // Fetch time slots when selectedDate changes
    if (selectedDate) {
      fetchTimeSlots();
    }
  }, [selectedDate]);
  // console.log("this si the data of slot api ", internalTimeSlots); 

  return (
    <>
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
                      <div className="radio-buttons" key={index}>
                        <label
                          className="custom-radio"
                          htmlFor={`radio${index}`}
                        >
                          <input
                            type="radio"
                            name="dateSelection"
                            id={`radio${index}`}
                            onChange={() =>
                              handleInputChange("dateSelection", item.value)
                            }
                            checked={selectedDate === item.value}
                          />
                          <span className="radio-btn">
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
                                <h3 className="">{item.body}</h3>
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <Suspense>
                  <SlotTime
                    timeSlots={internalTimeSlots}
                    onSlotSelect={handleSlotSelection}
                  />
                </Suspense>
              </article>
              <article className="address mt-5">
                <div className="title">
                  <Address className="mx-2" />
                  Fill your address
                </div>
                <div className="col-12 d-flex justify-content-between">
                  <TextField
                    className=" mx-3 col-lg-6 col-10"
                    id="standard-required"
                    variant="standard"
                    defaultValue="Address"
                    label="Address line 1"
                    name="Address line 1"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </div>
                <div className="col-lg-7 col-12 mt-2 mt-md-5 flex-column gap-2 flex-md-row d-flex ">
                  <TextField
                    className=" mx-3 col-10 col-md-3"
                    id="standard-required"
                    variant="standard"
                    label="pincode"
                    name="pincode"
                    value={formData.pincode}
                    defaultValue="pincode"
                    onChange={(e) =>
                      handleInputChange("pincode", e.target.value)
                    }
                  />
                  <TextField
                    className=" mx-3 col-10 col-md-3"
                    variant="standard"
                    id="standard-required"
                    defaultValue="city"
                    label="city"
                    name="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                  <TextField
                    className=" mx-3 col-10 col-md-3"
                    label="state"
                    name="state"
                    defaultValue="state"
                    variant="standard"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsHomeCollection;

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

  const parsedDate = new Date(date);
  const year = parsedDate.getFullYear();
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = parsedDate.getDate().toString().padStart(2, "0");

  const formattedTime = time
    .split(":")
    .map((component) => component.padStart(2, "0"))
    .join(":");

  return `${year}-${month}-${day} ${formattedTime}`;
};
