"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Thyroid } from "@/components/svg-components/Thyroid";
import { Kidney } from "@/components/svg-components/Kidney";
import { Lungs } from "@/components/svg-components/Lungs";
import { HeartOrgan } from "@/components/svg-components/HeartOrgan";
import { Liver } from "@/components/svg-components/Liver";
import Link from "next/link";

export const Organslider = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const organData = [
    {
      name: "Thyroid",
      slug: "thyroid",
      description:
        "Are you losing or gaining weight? These changes may be related to thyroid",
      icon: <Thyroid />,
    },
    {
      name: "Kidney",
      slug: "kidney",
      description:
        "The signs of kidney diseases are easy to miss, knowing it early can help prevent",
      icon: <Kidney />,
    },
    {
      name: "Lungs",
      slug: "lungs",
      description:
        "If you're having trouble catching breath, you might need to find out why",
      icon: <Lungs />,
    },
    {
      name: "Heart",
      slug: "heart",
      description:
        "Check the health of your heart with a specially designed heart check test panel",
      icon: <HeartOrgan />,
    },
    {
      name: "Liver",
      slug: "liver",
      description:
        "Do you drink a lot of alcohol? Know your liver's health with us",
      icon: <Liver />,
    },
  ];

  const getAosDuration = (index) => {
    // Adjust the duration values as per your requirement
    if (index === 0 || index === 4) {
      return 350; // First slide duration
    } else if (index === 1 || index === 3) {
      return 300; // Second slide duration
    } else if (index === 2) {
      return 250; // Second slide duration
    } else {
      return 400; // Third and subsequent slides duration
    }
  };
  return (
    <>
      <Slider {...settings}>
        {organData.map((organ, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={getAosDuration(index)}
            data-aos-duration={getAosDuration(index)}
            data-aos-once="true"
            data-aos-offset={getAosDuration(index)}
          >
            <Link href={`/organ/${organ.slug}`}>
              <div className="organcolumnrow flex-center navigationwhite hovershadow">
                <div className="organcolumn">
                  <div className="sliderbox border-0 bg-transparent">
                    <div className="packagename">
                      <span className="bg-transparent">{organ.icon}</span>
                    </div>
                    <div className="packagename text-white">
                      <h3>
                        <strong>{organ.name}</strong>
                      </h3>
                      <p className="m-0 minheight-120">{organ.description}</p>
                      <div className="packageprice">
                        <div className="textbtn">KNOW MORE +</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};
