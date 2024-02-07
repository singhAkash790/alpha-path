"use client";
import React, { useState } from "react";
import { CircularProgress, Box, TextField } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import axios from "axios";
import { useData } from "@/context/context";
import { validateUserData, validateUserAddress } from "@/context/Validation";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { UserDetail } from "./UserDetail";
import { HomeCollectionData } from "./HomeCollectionData";

const UserDataForm = ({ onPrevStep, onNextStep, onFormData }) => {
  const { cartState } = useData();
  const [loading, setLoading] = useState(false);

  console.log("this is the product", cartState.userAddress);

  const submitBookingData = async (userData, userAddress, userProduct) => {
    try {
      const apiUrl =
        "https://www.assurepathlabs.com/api/algos/booking_submit_api.php";

      const apiData = {
        fullName: userData.name,
        age: userData.age,
        gender: userData.gender,
        // Only include user address if isHomecollection is 1
        ...(userAddress.isHomecollection === 1 && {
          address: userAddress.address,
          pincode: userAddress.pincode,
          city: userAddress.city,
          state: userAddress.state,
          homeCollectionDateTime: userAddress.homeCollectionDateTime,
        }),
        isHomecollection: userAddress.isHomecollection,
        totalAmount: 1205, // <-- Reference to 'product' is not defined
        advance: 0,
        organizationIdLH: 324559,
        testID: 3992066,
        testCode: 3992066,
        integrationCode: "-",
        dictionaryId: "-",
      };
      console.log(apiData);

      const response = await axios.post(apiUrl, apiData);

      if (response.data && response.data.code === 200) {
        console.log("Booking submitted successfully!");
      } else {
        console.error(
          "API request failed. Error message:",
          response.data.Message
        );
      }
    } catch (error) {
      console.error("Error submitting booking data:", error.message);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      throw error; // rethrow the error to propagate it
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await submitBookingData(
        cartState.userData,
        cartState.userAddress,
        cartState.products
      );
      // Additional logic after successful form submission
      onNextStep();
    } catch (error) {
      console.error("Error in form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    onPrevStep();
  };

  const handleNext = () => {
    onNextStep();
    onFormData({ userData: cartState.userData });
  };

  return (
    <>
      <section className="position-relative">
        <div className="gradient-layer"></div>
        <div className="container">
          <div className="web-container">
            <div className="row gap-sm-3 gap-md-0  ">
              <div className="col-10 mx-auto">
                <h3>
                  <strong>User Details</strong>
                </h3>
                <form onSubmit={handleSubmit}>
                  <UserDetail />
                  <HomeCollectionData />
                  {/* <button type="submit" className="btn">
                    Submit the data
                  </button> */}
                </form>
                <div className="nav_button mt-5 col-12 d-flex justify-content-between">
                  <div className=" mt-3  row text-right">
                    <button
                      className="edit_cart button button--wayra pull-right red tab3"
                      onClick={handlePrev}
                    >
                      <FaArrowLeftLong className="m-2" />
                      Check Cart
                    </button>
                  </div>
                  <div className=" mt-3  row text-right">
                    <button
                      className="edit_cart button button--wayra pull-right red tab3"
                      onClick={handleNext}
                    >
                      Proceed
                      <FaArrowRightLong className="m-2" />
                    </button>
                  </div>
                </div>
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
