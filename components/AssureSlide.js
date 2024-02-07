"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";

export const AssureSlide = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="home_banner position-relative">
        <div
          className="banner_slider"
          data-aos="fade-zoom-in"
          data-aos-delay={100}
          data-aos-duration={120}
          data-aos-once="true"
        >
          <Slider {...settings} {...props}>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner1.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="/packages/assure-complete-wellness-package-for-man">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner2.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="/organ/heart">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner3.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link href="/test-detail/dengue-antibodies-igg-igm-ns1ag">
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="banner_slide">
                <Image
                  className=""
                  src="/banner4.png"
                  alt="Early Detection is the Key of Cure"
                  width={630}
                  height={500}
                />
                <Link
                  href="https://patient-in.creliohealth.com/patient/login"
                  target="_blank"
                >
                  <button className="button button--aylen button--round-l button--text-thick  gradient   flex-center gap-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
