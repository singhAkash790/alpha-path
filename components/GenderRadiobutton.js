"use client"
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Female } from "./svg-components/Female";
import { Male } from "./svg-components/Male";
import Image from "next/image";
import { OtherGender } from "./svg-components/OtherGender";

const GenderRadiobutton = () => {
  return (
    <div className="container">
      <div className="radio-buttons">
        <div className="title">Choose your Gender</div>
        <label className="custom-radio" htmlFor="male">
          <input type="radio" name="gender" id="male" />
          <span className="radio-btn">
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
              <Male/>
              <h3 className="">Male</h3>
            </div>
          </span>
        </label>
        <label className="custom-radio" htmlFor="female">
          <input type="radio" name="gender" id="female" />
          <span className="radio-btn">
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
          <input type="radio" name="gender" id="other" />
          <span className="radio-btn">
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
  );
};

export default GenderRadiobutton;
