"use client";

import React, { useEffect, useState } from "react";
import IsHomeCollection from "./IsHomeCollection";
import homecollection from "@/components/svg-components/homecollection.svg";
import microscope from "@/components/svg-components/microscope.svg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Image from "next/image";
import { useData } from "@/context/context";

export const 



HomeCollectionData = () => {
  const { cartState, cartDispatch } = useData();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedPlan(event.target.id);
  };
  useEffect(() => {
    if (selectedPlan === "Home_collection") {
      // Set user address to 1 in the context API only if it's not already 1
      const updatedData = {
        isHomecollection: 1,
      };
      cartDispatch({
        type: "UPDATE_USER_ADDRESS",
        userAddress: updatedData,
      });
    } else {
      const updatedData = {
        isHomecollection: 0,
      };
      cartDispatch({
        type: "UPDATE_USER_ADDRESS",
        userAddress: updatedData,
      });
    }
    console.log(
      "this is the home collextion after making onemptied",
      cartState.userAddress.isHomecollection
    );
  }, [selectedPlan, cartState.userAddress.isHomecollection, cartDispatch]);

  return (
    <>
      <div className="container">
        <div className="plans">
          <div className="title">Choose Test Type</div>
          <div className="plans_selection">
            <label className="plan basic-plan" for="Home_collection">
              <input
                type="radio"
                name="plan"
                id="Home_collection"
                checked={selectedPlan === "Home_collection"}
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
                checked={selectedPlan === "Walk-in"}
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
                    For growing business who wants to create a rewarding place
                    to work.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <Accordion
          expanded={selectedPlan === "Home_collection"}
          className="shadow-none isHomeCollection"
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="d-none shadow-none"
          ></AccordionSummary>
          <AccordionDetails className="shadow-none p-0">
            <IsHomeCollection />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
