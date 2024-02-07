"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Line } from "@/components/svg-components/Line";
import { Tab } from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/material";
import data from "@/Data/test_data.json";
import Link from "next/link";
import { useData } from "@/context/context";
import Aos from "aos";

export const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const currentYear = new Date().getFullYear();
  const [selectedTab, setSelectedTab] = useState(1);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonWidth2, setButtonWidth2] = useState(0);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const { cartState, cartDispatch } = useData();
  const [tabData, setTabData] = useState([]);
  const [isFadeIn, setIsFadeIn] = useState(true);
  const memoizedTabData = useMemo(() => tabData, [tabData]);

  const fetchTabData = async (category) => {
    try {
      setIsFadeIn(false);
      const response = await fetch(
        `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=${category}`
      );
      const data = await response.json();
      setTabData(data.test_data);
      setTimeout(() => {
        setIsFadeIn(true);
      }, 300); // Adjust the delay time based on your transition duration

      // console.log(data.test_data);
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  };

  const getWidth = () => {
    const activeButtonRef = selectedTab === 1 ? buttonRef1 : buttonRef2;
    const buttonRect = activeButtonRef.current.getBoundingClientRect();
    setButtonWidth(buttonRect.width);
    const width1ref = buttonRef1.current.getBoundingClientRect();
    setButtonWidth2(width1ref.width);
  };

  useEffect(() => {
    getWidth();
  }, [selectedTab]);

  useEffect(() => {
    fetchTabData(selectedTab === 1 ? "test" : "package");
  }, [selectedTab]);
  const menuItems = [
    { title: "Home", aosDelay: 100, links: [] },
    {
      title: "About Us",
      aosDelay: 200,
      links: [{ href: "/about-us", label: "ABOUT US" }],
    },
    {
      title: "Our Doctors",
      aosDelay: 300,
      links: [
        {
          href: "/doctor-profile/details/dr-sanjay-wadhwa",
          label: "DR SANJAY WADHWA",
        },
        {
          href: "/doctor-profile/details/dr-lovely-razdan",
          label: "DR LOVELY RAZDAN",
        },
        {
          href: "/doctor-profile/details/dr-gurpal-kaur",
          label: "DR GURPAL KAUR",
        },
      ],
    },
    {
      title: "Services",
      aosDelay: 400,
      links: [{ label: "FOR INDIVIDUALS" }, { label: "FOR HOSPITALS" }],
    },
    {
      title: "Health Packages",
      aosDelay: 500,
      links: [{ href: "/packages", label: "HEALTH PACKAGES" }],
    },
    {
      title: "My Account",
      aosDelay: 600,
      links: [
        {
          label: "MY CART",
          onClick: () => cartDispatch({ type: "TOGGLE_CART" }),
        },
        { label: "BLOG" },
        {
          href: "https://patient-in.creliohealth.com/patient/login",
          label: "LOGIN",
          external: true,
        },
        { href: "/terms-conditions", label: "TERMS & CONDITIONS" },
        { href: "/privacy-policy", label: "PRIVACY POLICY" },
        { href: "/refund-cancellation", label: "REFUND & CANCELLATION" },
      ],
    },
  ];

  return (
    <>
      <footer
        className="col-12 float-start position-relative"
        // data-aos="fade-up"
        // data-aos-delay={100}
        // data-aos-duration={200}
        // data-aos-once="true"
        // data-aos-offset={100}
        // data-aos-easing="ease-in"
      >
        {/* <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container "></div>
          </div>
        </div> */}
        <div className="footergray col-12 float-start">
          <div className="container">
            <div className="web-container ">
              <div className="row mb-5 pb-3">
                <div className="_acc flex-center  flex-column ">
                  <div className="_acc_btn flex-center position-relative flex-column ">
                    <div
                      className="_acc_header position-relative  flex-center "
                      data-aos="fade-zoom-in"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-offset={120}
                      data-aos-easing="ease-in"
                    >
                      <button
                        ref={buttonRef1}
                        onClick={() => setSelectedTab(1)}
                      >
                        <article>Popular Test</article>
                      </button>
                      <button
                        ref={buttonRef2}
                        onClick={() => setSelectedTab(2)}
                      >
                        <article>Popular Packages</article>
                      </button>
                    </div>
                    <span
                      className="underline"
                      style={{
                        left:
                          selectedTab === 1
                            ? "0"
                            : `calc(${buttonWidth2}px + 60px)`, // Adjust the width based on your design
                        width: `${buttonWidth}px`, // Adjust the width based on your design
                        // backgroundColor: "blue", // Set the color of the underline
                        height: "2px", // Set the height of the underline
                        transition: " 0.8s ease", // Add a smooth transition effect
                      }}
                    ></span>
                  </div>

                  <div
                    className="_acc_cnt"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={250}
                    data-aos-once="true"
                    data-aos-offset={100}
                    data-aos-easing="ease-in"
                  >
                    {selectedTab === 1 || selectedTab === 2 ? (
                      <div
                        className={`footer_tabs ${
                          isFadeIn ? "fade-in" : "fade-out"
                        }`}
                      >
                        <ul className="flex-center ">
                          <li>
                            {memoizedTabData.map((test, index) => (
                              <Link
                                key={test.id}
                                href={`/${
                                  selectedTab === 1 ? "test-detail" : "packages"
                                }/${test.Slug}`}
                              >
                                {" "}
                                {test.Test_Name}
                              </Link>
                            ))}
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5 float-start flex-center align-items-start footerrow">
                {menuItems.map((menuItem, index) => (
                  <div key={index} className="footercolumn">
                    <div
                      className="fheading"
                      data-aos="fade"
                      data-aos-delay={150 + index * 20}
                      data-aos-duration={150 + index * 20}
                      data-aos-once="true"
                      data-aos-offset={150 + index * 20}
                      data-aos-easing="ease-in"
                    >
                      <article className="text-uppercase">
                        {menuItem.title}
                      </article>
                    </div>
                    {menuItem.links && (
                      <div className="fmenu">
                        <ul className="p-0 m-0">
                          {menuItem.links.map((link, linkIndex) => (
                            <li
                              key={linkIndex}
                              data-aos="fade-up"
                              data-aos-delay={200 + index * 50}
                              data-aos-duration={200 + index * 20}
                              data-aos-once="true"
                              data-aos-offset={120 + index * 20}
                              data-aos-easing="ease-in"
                            >
                              {link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-black"
                                >
                                  {link.label}
                                </a>
                              ) : link.href ? (
                                <Link href={link.href}>{link.label}</Link>
                              ) : (
                                <span>{link.label}</span> // Add this line to handle undefined href
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="row  gap-4 gap-sm-0 mt-3">
                <div className="col-lg-4 col-xs-6 col-sm-4 col-12">
                  <div className="contact">
                    <a href="tel:0181-4667555">
                      <span
                        className="flex-center align-items-start gap-2 sm-gap-4"
                        data-aos="fade-up"
                        data-aos-delay={150}
                        data-aos-duration={150}
                        data-aos-once="true"
                        data-aos-offset={200}
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        <strong>T</strong>
                        0181-4667555
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-4 col-12">
                  <div className="contact">
                    <a href="mailto:assurepathlabs@gmail.com">
                      <span
                        className="flex-center align-items-start gap-2 sm-gap-4"
                        data-aos="fade-up"
                        data-aos-delay={150}
                        data-aos-duration={350}
                        data-aos-once="true"
                        data-aos-offset={200}
                      >
                        <strong>E</strong>
                        assurepathlabs@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-4 col-12">
                  <div className="contact">
                    <span
                      className="flex-center align-items-start gap-2 gap-sm-0"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={350}
                      data-aos-once="true"
                      data-aos-offset={200}
                    >
                      <strong>A </strong>
                      &nbsp; 3, Waryam Nagar, <br />
                      Vasant Vihar Road, <br />
                      Jalandhar
                    </span>
                  </div>
                </div>
                <div className="col-12  mx-auto  flex-center mt-4 mb-3 mt-sm-5">
                  <a
                    className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-md-5 col-12"
                    data-aos="flip-right"
                    data-aos-delay={100}
                    data-aos-duration={350}
                    data-aos-once="true"
                    data-aos-offset={120}
                    data-aos-easing="ease-in"
                  >
                    BOOK HOME COLLECTION
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Line className="svgwidthline position-absolute top-0 end-0" />
        </div>

        <div className="footergray col-12 float-start ftrbdr m-0 pt-3 pb-3">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-lg-6 col-sm-6  col-8">
                  <p className="m-0">
                    &copy; {currentYear} All Rights Reserved.{" "}
                  </p>
                </div>
                <div className="col-lg-6 col-sm-6  col-4 text-end">
                  <p className="m-0">
                    <a href="https://triverseadvertising.com/" target="_blank">
                      site : triverse
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
