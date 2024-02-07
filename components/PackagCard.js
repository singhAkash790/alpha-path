"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Rupees } from "./svg-components/Rupees";
import Image from "next/image";

export const PackagCard = ({
  Test_Name,
  Test_for,
  Number_test,
  Test_info,
  Test_Amount,
  Discount_Amount,
  Test_Category,
  Test_Slug,
  widthFull,
  Test_Description,
}) => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    const card_height = card.clientHeight;
    // console.log("scroll", card_height);

    if (card) {
      setShowScrollbar(110 < card_height);
    }
  }, []);

  return (
    <div
      className={
        widthFull
          ? "col-lg-12 col-12 test_card package_card"
          : "col-xxl-3  col-xl-4 col-md-4 col-sm-6 col-12 test_card"
      }
      data-aos="fade-up"
      data-aos-delay={180}
      data-aos-duration={180}
      data-aos-once="true"
      data-aos-offset={120}
      data-aos-easing="ease-in"
    >
      <Link href={`/packages/${Test_Slug}`}>
        <div className="sliderbox package_card ">
          <div className="packagename">
            <span>
              <Image
                src="/svg/healthcompletewellness.svg"
                alt="Health Check-up packages"
                width={80}
                height={80}
              />
            </span>
          </div>
          <div className="packagename">
            <h3>
              <strong className="text-black">{Test_Name}</strong>
              {/* {Test_for} */}
            </h3>
            <p className="m-0">
              Includes <strong className="text-black">{Number_test}</strong>{" "}
              Parameters
            </p>
          </div>
          <div className="packagedetail">
            <ul
              ref={cardRef}
              style={{
                overflowY: showScrollbar ? "scroll" : "hidden",
              }}
            >
              {Test_info.slice(0, 3).map((test, testIndex) => (
                <li key={testIndex}>{test.testName}</li>
              ))}
            </ul>
          </div>
          <div className="packageprice">
            {Discount_Amount == 0 ? (
              <>
                <div className="discountprice gradient  text-white">
                  <Rupees />
                  <span>{Test_Amount}</span>
                </div>
              </>
            ) : (
              <>
                <div className="actualprice">
                  <Rupees />
                  <span>{Test_Amount}</span>
                </div>
                <div className="discountprice gradient  text-white">
                  <Rupees />
                  <span>{Discount_Amount}</span>
                </div>
              </>
            )}

            <div className="textbtn">
              <span href={`/packages/${Test_Slug}`}>KNOW MORE +</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
