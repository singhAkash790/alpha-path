"use client";
import React from "react";
import Sucess from "@/components/svg-components/Sucess";
import { Line } from "./svg-components/Line";
import { Dots } from "./svg-components/Dots";
import { useData } from "@/context/context";

const SuccessMessage = ({ data }) => {
  // Access the collected data and display it in the success message
  const { cartState, cartDispatch } = useData();
  console.log(cartState.userData.name);
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="sucess_msg">
                  <div className="success_data">
                    <p>Hi, {cartState.userData.name}!</p>
                    <p>
                      Thank you for booking the "Full Body Checkup" with Assure
                      Pathlabs. Your booking has been received, and your booking
                      ID is 100293. Our team will reach out to you shortly for
                      further processing.
                    </p>
                    <p>
                      You can manage your bookings/reports by logging into our
                      Patient portal.
                    </p>
                  </div>
                  <Sucess />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
      </section>
    </>
  );
};

export default SuccessMessage;
