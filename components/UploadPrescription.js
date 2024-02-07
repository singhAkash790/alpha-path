"use client"

import React from "react";
import { Attachement } from "./svg-components/Attachement";
import UploadForm from "./UploadForm";

export const UploadPrescription = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  return (
    <>
      {isCartOpen ? <UploadForm /> : null}
      <a
        className=""
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
      >
        <span>
          <Attachement />
        </span>
        Upload Prescription
      </a>
    </>
  );
};
