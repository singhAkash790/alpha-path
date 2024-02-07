"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Rupees } from "./svg-components/Rupees";
import { BsInfoCircleFill } from "react-icons/bs";
import { Tooltip } from "@mui/material";

export const TestCard = ({
  Slug,
  Test_Name,
  Test_Amount,
  Discount_Amount,
  Test_Category,
  Test_ID,
  Test_Description,
  Who_is_it_for,
  Pre_test_information,
  Turn_around_time,
  widthFull,
  BaseDirectory,
  IsSeoH3,
  index,
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipToggle = () => {
    setTooltipVisible(!isTooltipVisible);
  };
  return (
    <>
      <div
        className={
          widthFull
            ? "col-lg-12 col-12 test_card"
            : "col-xxl-3  col-xl-4 col-md-4 col-sm-6 col-12 test_card"
        }
        data-aos="fade-up"
        data-aos-delay={180}
        data-aos-duration={180}
        data-aos-once="true"
        data-aos-offset={120}
        data-aos-easing="ease-in"
      >
        <Link href={`/${BaseDirectory || "test-detail"}/${Slug}`}>
          <div className="sliderbox">
            <div className="packagename_test">
              {IsSeoH3 ? (
                <h3 className="">{Test_Name}</h3>
              ) : (
                <h2 className="">{Test_Name}</h2>
              )}
            </div>
            <div className="packageprice _flex_center_col">
              {Discount_Amount == 0 ? (
                <>
                  <div className="discountprice gradient text-white">
                    <Rupees /> <span>{Test_Amount}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="actualprice">
                    <Rupees /> <span>{Test_Amount}</span>
                  </div>
                  <div className="discountprice gradient text-white">
                    <Rupees /> <span>{Discount_Amount}</span>
                  </div>
                </>
              )}
            </div>
            <div className="packagedetail _test">
              <p className="m-0">
                <strong className="text-black">TEST DETAILS</strong>
              </p>
              <ul>
                {/* {Test_Category && <li>{Test_Category} Related Test</li>} */}
                {/* {Turn_around_time && <li>Report Time: {Turn_around_time}</li>} */}
                {Pre_test_information && (
                  <li>
                    Pre Test Information
                    <div
                      className="_tooltip"
                      tabIndex="0"
                      onMouseEnter={handleTooltipToggle}
                      onMouseLeave={handleTooltipToggle}
                      onFocus={handleTooltipToggle}
                      onBlur={handleTooltipToggle}
                    >
                      <BsInfoCircleFill className="_info" />
                      <span className="_tooltip-text">
                        <div className="pre_test_content flex-center flex-column px-2 py-1">
                          <article>Pre Test Information</article>
                          <p>{Pre_test_information}</p>
                        </div>
                      </span>
                    </div>
                  </li>
                )}
                {Turn_around_time && (
                  <li>
                    Report Available In
                    <div
                      className="_tooltip"
                      tabIndex="0"
                      onMouseEnter={handleTooltipToggle}
                      onMouseLeave={handleTooltipToggle}
                      onFocus={handleTooltipToggle}
                      onBlur={handleTooltipToggle}
                    >
                      <BsInfoCircleFill className="_info" />
                      <span className="_tooltip-text">
                        <div className="pre_test_content flex-center flex-column px-2 py-1">
                          <article>Report Available In</article>
                          <p>{Turn_around_time}</p>
                        </div>
                      </span>
                    </div>
                  </li>
                )}
                {/* {Test_Description && (
                  <li>
                    Test Description
                    <div
                      className="_tooltip"
                      tabIndex="0"
                      onMouseEnter={handleTooltipToggle}
                      onMouseLeave={handleTooltipToggle}
                      onFocus={handleTooltipToggle}
                      onBlur={handleTooltipToggle}
                    >
                      <BsInfoCircleFill  className="_info" />
                      <span className="_tooltip-text">
                        <div className="pre_test_content flex-center flex-column px-2 py-1">
                          <h5>Test Requisit</h5>
                          <p>{Test_Description}</p>
                        </div>
                      </span>
                    </div>
                  </li>
                )} */}
              </ul>
            </div>
            <div className="packageprice_btn">
              <div className="textbtn">
                <span href={`/${BaseDirectory || "test-detail"}/${Slug}`}>
                  KNOW MORE +
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
