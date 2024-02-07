import React from "react";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const OurFounders = () => {
  return (
    <>
      <section className="position-relative pt-md-4">
        {/* <div className="gradient-layer"></div> */}
        <div className="container">
          <div className="web-container">
            <div className="row   ">
              <div className="col-12 flex-center flex-column flex-md-row">
                <div
                  className="our-founder-title  flex-center"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                  data-aos-duration={300}
                  data-aos-once="true"
                  data-aos-offset={100}
                  data-aos-easing="ease-in"
                >
                  <h2 class="">
                    Meet The <br /> Founders
                  </h2>
                </div>
                <div className=" our-founder-content flex-center">
                  <div
                    class="founder-card text-left mb-3 rounded-0"
                    data-aos="fade-left"
                    data-aos-delay={100}
                    data-aos-duration={300}
                    data-aos-once="true"
                    data-aos-offset={100}
                    data-aos-easing="ease-in"
                  >
                    <div class="founder-card-body d-flex align-items-top">
                      <div
                        alt=""
                        class="founder-image mb-5"
                        data-image-width="404"
                        data-image-height="404"
                      ></div>
                      <div class="ml-3">
                        <h3 class="fw-bolder">Dr. Sanjay Wadhwa</h3>
                        <p class="text-muted">
                          MBBS, DNB (PATH), DCP <br />
                          Consultant Pathologist
                        </p>
                        <p className="founder-details">
                          Dr. Sanjay Wadhwa, a distinguished medical
                          professional, holds credentials that reflect a
                          commitment to excellence in the field of pathology. As
                          a Consultant Pathologist, Dr. Wadhwa brings a wealth
                          of expertise to the realm of diagnostic &amp; ensures
                          quality of health services
                        </p>
                        <div class="founder-social-icons mt-3">
                          <a
                            class="founder-social-icon"
                            target="_blank"
                            href="#"
                          >
                            <FaFacebook />
                          </a>
                          <a
                            class="founder-social-icon"
                            target="_blank"
                            href="#"
                          >
                            <FaXTwitter />
                          </a>
                          <a
                            class="founder-social-icon"
                            target="_blank"
                            href="#"
                          >
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="founder-card text-left mb-3 rounded-0"
                    data-aos="fade-right"
                    data-aos-delay={100}
                    data-aos-duration={300}
                    data-aos-once="true"
                    data-aos-offset={100}
                    data-aos-easing="ease-in"
                  >
                    <div class="founder-card-body d-flex align-items-top">
                      <div
                        alt=""
                        class="founder-image mb-5"
                        data-image-width="404"
                        data-image-height="404"
                      ></div>
                      <div class="ml-3">
                        <h3 class="fw-bolder">Dr. Lovely Razdan</h3>
                        <p class="text-muted">
                          MBBS, MD (Microbiology) <br />
                          Consultant Microbiologist
                        </p>
                        <p className="founder-details">
                          Dr. Lovely Razdan, is renowned for her expertise in
                          the field of microbiology. Her dedication to staying
                          abreast of the latest advancements in microbiology
                          makes her a key player in the dynamic and critical
                          field of infectious diseases.
                        </p>
                        <div class="founder-social-icons mt-3">
                          <a
                            class="founder-social-icon"
                            target="_blank"
                            href="#"
                          >
                            <FaFacebook />
                          </a>
                          <a
                            class="founder-social-icon"
                            target="_blank"
                            href="#"
                          >
                            <FaXTwitter />
                          </a>
                          <a
                            class="founder-social-icon"
                            target="_blank"
                            href="#"
                          >
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10" />
      </section>
    </>
  );
};

export default OurFounders;
