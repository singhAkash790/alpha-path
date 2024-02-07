"use client";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { Attachement } from "./svg-components/Attachement";
import { Homecollection } from "@/components/Homecollection";
import UploadForm from "./UploadForm";
import { useData } from "@/context/context";

export const HForm = () => {
  const [showDialog, setShowDialog] = useState(false);
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
  };
  const { cartState, cartDispatch } = useData();
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
      {/* {showDialog ? <UploadForm /> : null} */}

      <div
        className="col-12 float-start d-grid gap-3 gap-sm-1  h_form"
        data-aos="fade"
        data-aos-delay={150}
        data-aos-duration={150}
        data-aos-once="true"
        data-aos-offset={150}
        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
      >
        <div className="enquireform col-12 col-md-12 mx-md-auto   float-start d-lg-block d-none">
          <SearchBar {...generateAOSAttributes(1, 150, 20)} />

          <div className="col-12 col-md-5 col-lg-12  d-sm-none d-lg-block position-relative">
            <Button
              {...generateAOSAttributes(1, 150, 20)}
              variant="outlined"
              className="MuiInputBase-root formbtn d-flex justify-content-between"
              fullWidth
              onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })} // Pass a function to onClick
            >
              <label>Upload Prescription</label>
              <span>
                <Attachement />
              </span>
            </Button>
          </div>

          <div
            className="col-12 col-md-5 col-lg-12 d-sm-none d-lg-block position-relative"
            {...generateAOSAttributes(1, 150, 20)}
          >
            <Button
              variant="outlined"
              className="MuiInputBase-root formbtn d-flex justify-content-between"
              fullWidth
            >
              <label>Download Reports</label>
            </Button>
          </div>
        </div>
        <Homecollection />
      </div>
    </>
  );
};
