"use client";
import { HForm } from "@/components/HForm";
import Image from "next/image";
import { Alltime } from "@/components/svg-components/Alltime";
import { Samedaydelivery } from "@/components/svg-components/Samedaydelivery";
import { FoundedDoctor } from "@/components/FoundedDoctor";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { HighOn } from "@/components/svg-components/HighOn";
import { FiveHundredplus } from "@/components/svg-components/FiveHundredplus";
import { ConsultingService } from "@/components/svg-components/ConsultingService";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { AssureSlide } from "@/components/AssureSlide";
import { ProductSlider } from "@/components/ProductSlider";
import { Seasonalpack } from "@/components/Seasonalpack";
import { Organslider } from "@/components/Organslider";
import { TestByCondition } from "@/components/TestByCondition";
import { Testimonials } from "@/components/Testimonials";
import { Videos } from "@/components/Videos";
import { Faq } from "@/components/Faq";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import { easing } from "jquery";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 450, easing: "ease-in" });
  }, []);
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative pt-4 mt-lg-2 mt-md-0 ">
          <div className="gradient-layer"></div>
          <div className="container">
            <div className="row gap-sm-3 gap-lg-0  ">
              <div className="col-xl-9 col-lg-8 col-md-12 pull-md-right mr-md-auto col-sm-12 mb-3 mb-md-0  col-12">
                <AssureSlide className="no-buttons colornavigations col-12 float-start" />
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-11 mx-sm-auto col-12 d-flex align-items-center">
                <HForm />
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={250}
                    data-aos-once="true"
                    data-aos-offset={150}
                    data-aos-easing="ease-in"
                  >
                    <h2 className="grid-center ">
                      Popular Seasonal Packages
                      {/* <span>DENGUE, CHIKUNGUNYA, MALARIA</span> */}
                    </h2>
                  </div>
                  <Seasonalpack className="arrows productslider minusbottom seasonalpack" />
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div
                    className="title col-12 float-start text-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={250}
                    data-aos-once="true"
                    data-aos-offset={150}
                    data-aos-easing="ease-in"
                  >
                    <h2>Popular Wellness Packages</h2>
                  </div>
                  <ProductSlider className="colornavigations col-12 float-start arrows productslider minusbottom" />
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
        </section>
        <section id="organs" className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div
                    className="title col-12 float-start text-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={250}
                    data-aos-once="true"
                    data-aos-offset={150}
                    data-aos-easing="ease-in"
                  >
                    <h2 className="grid-center text-white">TEST BY ORGAN</h2>
                  </div>
                  <Organslider className="navigationwhite hovershadow" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-image position-absolute">
            <Image
              src="/gradient-layer.webp"
              alt="gradient file"
              width={1920}
              height={1752}
            />
          </div>
        </section>
        <section className="position-relative mt-3">
          <div className="container">
            {/* here is the component */}
            <TestByCondition />
          </div>
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
        </section>
        <section className="position-relative p-80  grey-background">
          <div className="container">
            <div className="web-container">
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
                  <h2>ABOUT ASSURE PATHLAB</h2>
                </div>
                <div
                  className="col-xxl-7 col-xl-10 m-auto col-xs-12 col-11 text-center"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                  data-aos-duration={200}
                  data-aos-once="true"
                  data-aos-offset={200}
                  data-aos-easing="ease"
                >
                  <p>
                    Assure Pathlabs is the best blood test pathalogy laboratory
                    in Jalandhar, established in 2015 by Dr. Sanjay Wadhwa and
                    Dr. Lovely Razdan with a commitment to excellence. Backed by
                    NABH certification, Assure Pathlabs upholds international
                    standards having adequate lab tests cost. Our commitment
                    guarantees not just efficient service but also valuable
                    advice, timely reports, unwavering support, and
                    compassionate care because your well-being is our priority.
                  </p>
                  <div
                    className=" flex-center mt-4 btn_main"
                    data-aos="flip-right"
                    data-aos-delay={100}
                    data-aos-duration={120}
                    data-aos-once="true"
                    data-aos-offset={120}
                    data-aos-easing="ease-in"
                  >
                    <Link
                      href="/about-us"
                      className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-md-4 col-12 mt-3"
                    >
                      know more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
        </section>
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div
                  className="title col-12 float-start text-center"
                  // data-aos="fade-up"
                  // data-aos-delay={100}
                  // data-aos-duration={250}
                  // data-aos-once="true"
                  // data-aos-offset={150}
                  // data-aos-easing="ease-in"
                >
                  <h2>WHY ASSURE PATHLABS?</h2>
                </div>
                <div className="col-lg-10 m-auto col-12 float-start">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <Alltime />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          24x7
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <Samedaydelivery />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          Same Day Report
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <FoundedDoctor />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          Founded by Doctors
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <AdvancedTechnology />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          Advanced Technology
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-anchor-placement="bottom-bottom"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <HighOn />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          High on Safety and Hygeine
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-delay={150}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <FiveHundredplus />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-delay={100}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          500+ Test
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="circleicons float-start col-12 text-center grid-center">
                        <span
                          className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick"
                          data-aos="flip-right"
                          data-aos-anchor-placement="bottom-bottom"
                          data-aos-delay={100}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="ease-in"
                        >
                          <ConsultingService />
                        </span>
                        <p
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom"
                          data-aos-delay={100}
                          data-aos-duration={120}
                          data-aos-once="true"
                          data-aos-offset={120}
                          data-aos-easing="linear"
                        >
                          Consultation Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
          <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
        </section>
        <section
          id="testimonial"
          className="testimonial"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={320}
          data-aos-once="true"
          data-aos-offset={120}
          data-aos-easing="ease"
        >
          <div className="container position-relative z-index-2">
            <div className="web-container">
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
                  <h2 className="text-white">TESTIMONIALS</h2>
                </div>
                <div className="col-lg-11 col-12 m-auto float-start">
                  <Testimonials className="minusbottom navigationwhite" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="faq">
          <div className="container position-relative z-index-2">
            <div className="web-container">
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
                  <h2 className="">Frequently Asked Questions</h2>
                </div>
                <div className="col-lg-11 col-md-11 col-12 m-auto float-start">
                  <Faq className="minusbottom " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="vedio_review" className="vedio_review">
          <div className="container position-relative z-index-2">
            <div className="web-containers">
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
                  <h2 className="">OUR VIDEOS</h2>
                </div>
                <div className="col-lg-10 col-12 m-auto float-start">
                  <Videos />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
