import React from "react";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import Aboutbanner from "../../public/about-us-banner.webp";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { Doctor } from "@/components/svg-components/Doctor";
import { InternationalStandard } from "@/components/svg-components/InternationalStandard";
import Image from "next/image";
import { AboutGradient } from "@/components/AboutGradient";
import { ChooseAssure } from "@/components/ChooseAssure";
import { HForm } from "@/components/HForm";
import OurFounders from "@/components/OurFounders";

export const page = () => {
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative">
          <div className="gradient-layer"></div>
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div
                  className="col-lg-9 col-md-8 col-xs-12 col-12 abt_banner"
                  data-aos="fade-in"
                  data-aos-delay={100}
                  data-aos-duration={200}
                  data-aos-once="true"
                  data-aos-offset={100}
                  data-aos-easing="ease-in"
                >
                  <Image
                    src={Aboutbanner}
                    alt="Comprehensive Health Checkup"
                    width={1220}
                    height={730}
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="title col-12 float-start text-center"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={250}
                  data-aos-once="true"
                  data-aos-offset={150}
                  data-aos-easing="ease-in"
                >
                  <h1>Assure Pathlabs</h1>
                </div>
                <div className=" m-auto col-12 col-md-10 d-flex justify-content-center flex-direction-row  text-center">
                  <div className=" d-flex justify-content-center text-left flex-column ">
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-offset={100}
                      data-aos-easing="ease-in"
                    >
                      Assure Pathlabs is the best blood test pathalogy
                      laboratory in Jalandhar, established in 2015 by Dr. Sanjay
                      Wadhwa and Dr. Lovely Razdan with a commitment to
                      excellence. Backed by NABH certification, Assure Pathlabs
                      upholds international standards having adequate lab tests
                      cost.
                    </p>
                    <p
                      className="about-assure-text "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-offset={100}
                      data-aos-easing="ease-in"
                    >
                      Our commitment guarantees not just efficient service but
                      also valuable advice, timely reports, unwavering support,
                      and compassionate care because your well-being is our
                      priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10" />
          <div className="bg-gradient-image about_page position-absolute col-12">
            <AboutGradient />
          </div>
        </section>
        <OurFounders />
        <section className="position-relative mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-auto col-12 float-start sm-padding-0">
                <div className="col-12 flaot-start flex-center mb-2 mb-md-4 mb-lg-5 text-center">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={250}
                    data-aos-once="true"
                    data-aos-offset={150}
                    data-aos-easing="ease-in"
                  >
                    <h2>OUR ETHOS</h2>
                  </div>
                </div>
                <div className="overview col-lg-12 float-start">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                      <div className="heading p-0 h-auto border-0 mb-2">
                        <h3
                          className="effectheading newheading "
                          data-aos="flip-right"
                          data-aos-delay={100}
                          data-aos-duration={300}
                          data-aos-once="true"
                          data-aos-offset={100}
                          data-aos-easing="ease-in"
                        >
                          OUR VISION
                        </h3>
                      </div>
                    </div>
                    <div
                      className="col-lg-7 col-12 "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-offset={100}
                      data-aos-easing="ease-in"
                    >
                      <p>
                        Become the most trusted and best pathology laboratory
                        that ensures international standards in diagnostics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overview col-lg-12 float-end mt-5">
                  <div className="row align-items-center flex-row-reverse">
                    <div
                      className="col-lg-6 col-12"
                      style={{ textAlign: "right" }}
                    >
                      <div className="heading p-0 h-auto border-0 mb-2">
                        <h3
                          className="effectheading newheading "
                          data-aos="flip-left"
                          data-aos-delay={100}
                          data-aos-duration={300}
                          data-aos-once="true"
                          data-aos-offset={100}
                          data-aos-easing="ease-in"
                        >
                          OUR MISSION
                        </h3>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-12 "
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={300}
                      data-aos-once="true"
                      data-aos-offset={100}
                      data-aos-easing="ease-in"
                    >
                      <p>
                        Our mission is to redefine healthcare accessibility and
                        elevate diagnostic standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div
                  className="title col-12 float-start text-center mt-5 mb-4"
                  data-aos="fade-tp"
                  data-aos-delay={100}
                  data-aos-duration={200}
                  data-aos-once="true"
                  data-aos-offset={100}
                  data-aos-easing="ease-in"
                >
                  <h2>OUR DIFFERENTIATORS</h2>
                </div>
                <div className="our_diffrenc">
                  <div className="col-lg-8 mx-auto col-12  ">
                    <div className="row justify-content-center our_diff_cnt">
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span
                            className="flex-center mb-2 button button--aylen button--round-l button--text-thick"
                            data-aos="flip-right"
                            data-aos-delay={100}
                            data-aos-duration={120}
                            data-aos-once="true"
                            data-aos-offset={120}
                            data-aos-easing="ease-in"
                          >
                            <AdvancedTechnology />
                          </span>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={120}
                            data-aos-once="true"
                            data-aos-offset={120}
                            data-aos-easing="linear"
                          >
                            New age Technology
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span
                            className="flex-center mb-2 button button--aylen button--round-l button--text-thick"
                            data-aos="flip-right"
                            data-aos-delay={60}
                            data-aos-duration={120}
                            data-aos-once="true"
                            data-aos-offset={120}
                            data-aos-easing="ease-in"
                          >
                            <InternationalStandard />
                          </span>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay={65}
                            data-aos-duration={120}
                            data-aos-once="true"
                            data-aos-offset={120}
                            data-aos-easing="linear"
                          >
                            International Standards{" "}
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6 our_diff_item ">
                        <div className="circleicons float-start  text-center grid-center">
                          <span
                            className="flex-center mb-2 button button--aylen button--round-l button--text-thick"
                            data-aos="flip-right"
                            data-aos-delay={70}
                            data-aos-duration={120}
                            data-aos-once="true"
                            data-aos-offset={120}
                            data-aos-easing="ease-in"
                          >
                            <Doctor />
                          </span>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={120}
                            data-aos-once="true"
                            data-aos-offset={120}
                            data-aos-easing="linear"
                          >
                            Founded by doctors
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ChooseAssure />
      </main>
    </>
  );
};
export default page;
