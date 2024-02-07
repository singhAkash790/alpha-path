"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Logo } from "./svg-components/Logo";
import Link from "next/link";
import { Booktest } from "./svg-components/Booktest";
import { Report } from "./svg-components/Report";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { MyCart } from "./MyCart";
import { UploadPrescription } from "./UploadPrescription";
import Nabh from "./svg-components/Nabh";
import { usePathname } from "next/navigation";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useData } from "@/context/context";
import { Badge } from "@mui/material";
import { Attachement } from "./svg-components/Attachement";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartState, cartDispatch } = useData();

  const pathname = usePathname();
  const showSearchBar = pathname == "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuClasses = `menslide${isMenuOpen ? " active" : ""}`;
  const hamburgerClasses = `hemburgur${isMenuOpen ? " active" : ""}`;

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const [header, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  let totalQuantity = 0;
  for (const product of cartState.products) {
    totalQuantity += product.quantity;
  }
  return (
    <header>
      <div className={header ? "header fixed" : "header"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-2 col-3">
              <div
                className="logo"
                data-aos="fade"
                data-aos-once="true"
                data-aos-duration="500"
              >
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-9">
              <div className="d-flex align-items-center justify-content-end gap-xxl-4 gap-xl-2 gap-1">
                <div
                  className={
                    showSearchBar
                      ? "hidden_header headersearchbox mx-md-2 enquireform"
                      : "headersearchbox mx-2 enquireform"
                  }
                >
                  {/* {!showSearchBar ? <SearchBar /> : null} */}
                  <div className="desktop_nav_search d-none d-sm-block">
                    <SearchBar />
                  </div>
                </div>
                <div className="mobile_nav_search position-relative d-flex  d-sm-none align-items-end ">
                  <MobileSearchBar />
                  {cartState.products.length !== 0 && (
                    <Badge badgeContent={totalQuantity} color="error">
                      <PiShoppingCartSimple
                        onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                      />
                    </Badge>
                  )}
                </div>
                <div className="navbar p-0 align-items-end gap-xxl-4 gap-xl-2">
                  <div className="d-none d-sm-flex justify-content-center align-items-center gap-xxl-4 gap-xl-2  navbar_item">
                    <div
                      className="leftmenu float-start gap-xxl-3 gap-xl-1 "
                      data-aos="fade"
                      data-aos-once="true"
                      data-aos-duration="600"
                    >
                      {/* <span className="button button--aylen button--round-l button--text-thick ">
                        <Link href="/individual-test">
                          <span>
                            <IndividualTest />
                          </span>
                          Individual Test
                        </Link>
                      </span> */}
                      {/* <span className="button button--aylen button--round-l button--text-thick my-cart">
                        My Cart
                      </span> */}
                      <MyCart />
                      <Link
                        href="https://patient-in.creliohealth.com/patient/login"
                        target="_blank"
                      >
                        <span className="button button--aylen button--round-l button--text-thick _user d-flex align-items-center">
                          <LuUser />
                          Login
                        </span>
                      </Link>
                    </div>
                    <div
                      className=" d-flex align-items-center flex-row justify-content-center "
                      data-aos="fade"
                      data-aos-once="true"
                      data-aos-duration="600"
                    >
                      <div className="nah_logo">
                        <Nabh />
                      </div>

                      <div className="homecollection float-start d-grid">
                        <span className="text-black">Home Collection</span>
                        <article>
                          <Link href="tel:0181-4667555">0181-4667555</Link>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="menustn">
                    <div className={hamburgerClasses} onClick={toggleMenu}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={menuClasses}>
                      <div className="container">
                        <div className="row">
                          <div className="web-container">
                            <div className="col-12 float-start flex-center align-items-start footerrow">
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    onClick={toggleMenu}
                                  >
                                    <Link href="/">Home</Link>
                                  </article>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article
                                    className="text-uppercase"
                                    onClick={toggleMenu}
                                  >
                                    <Link href="/about-us">ABOUT US</Link>
                                  </article>
                                </div>
                                {/* <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <Link
                                        href="/about-us/#quality"
                                        className="text-black"
                                      >
                                        OUR QUALITY
                                      </Link>
                                    </li>
                                  </ul>
                                </div> */}
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    <Link href="/doctor-profile">
                                      OUR DOCTORS
                                    </Link>
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>
                                      <Link href="/doctor-profile/details/dr-sanjay-wadhwa">
                                        DR SANJAY WADHWA
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/doctor-profile/details/dr-lovely-razdan">
                                        DR LOVELY RAZDAN
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/doctor-profile/details/dr-gurpal-kaur">
                                        DR GURPAL KAUR
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    SERVICES
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li>FOR INDIVIDUALS</li>
                                    <li>FOR HOSPITALS</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    <Link href="/packages">
                                      HEALTH PACKAGES
                                    </Link>
                                  </article>
                                </div>
                              </div>
                              <div className="footercolumn">
                                <div className="fheading">
                                  <article className="text-uppercase">
                                    MY ACCOUNT
                                  </article>
                                </div>
                                <div className="fmenu">
                                  <ul className="p-0 m-0">
                                    <li
                                      onClick={() =>
                                        cartDispatch({ type: "TOGGLE_CART" })
                                      }
                                    >
                                      MY CART
                                    </li>
                                    <li>BLOG</li>
                                    <li>
                                      <Link
                                        href="https://patient-in.creliohealth.com/patient/login"
                                        target="_blank"
                                        rel="none"
                                        className="text-black"
                                      >
                                        LOGIN
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="text-black"
                                        href="/terms-conditions"
                                      >
                                        TERMS & CONDITIONS
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="text-black"
                                        href="/privacy-policy"
                                      >
                                        PRIVACY POLICY
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="text-black"
                                        href="/refund-cancellation"
                                      >
                                        REFUND & CANCELLATION
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menslide fixvisible">
            <div className="row">
              <div className="headerstrip">
                <div className="container">
                  <div className="row">
                    <div className="slimenu d-flex justify-content-end">
                      <ul className="d-flex gap-xxl-5 gap-xl-4 gap-lg-3 gap-md-2 m-0">
                        <li>
                          {/* <span>
                            <Attachement />
                          </span>
                          Upload Prescription */}
                          {/* <UploadPrescription /> */}
                          <Link
                            href="#"
                            className=""
                            onClick={() =>
                              cartDispatch({ type: "TOGGLE_UPLOD_FORM" })
                            }
                          >
                            <span>
                              <Attachement />
                            </span>
                            Upload Prescription
                          </Link>
                        </li>
                        <li>
                          <Link href="/individual-test">
                            <span>
                              <Booktest />
                            </span>
                            Book a Test
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://patient-in.creliohealth.com/patient/login"
                            target="_blank"
                          >
                            <span>
                              <Report />
                            </span>
                            Booking & Reports
                          </Link>
                        </li>
                        <li
                          className="cart_in_slimenu "
                          onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                        >
                          <span>
                            <LuShoppingCart />
                          </span>
                          Cart
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
