"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAlert } from "@/context/AlerterContext";
import Slider from "react-slick";
import { Rupees } from "./svg-components/Rupees";
import testData from "../Data/seasonaltst.json";
import { TestCard } from "@/components/TestCard";
import { useData } from "@/context/context";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";
import useIntersectionObserver from "@/context/useIntersectionObserver";
const URL = "https://www.assurepathlabs.com/api/algos/seasonal_api.php";

export const Seasonalpack = (props) => {
  const { cartState, cartDispatch } = useData();
  const [isInCart, setIsInCart] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        const data = await response.json();
        setProject(data);
        if (data.test_data.length === 0) {
          showAlert("info", "no data is found", "info");
          // console.log("no data is found");
        }
        // console.log("this is the seasonal api data", project);
      } catch (error) {
        // console.error("Error fetching data:", error);
        showAlert("Error", "network Error", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    Aos.init({ easing: "linear" });
  }, []);
  const { targetElementRef, isElementVisible } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    autoplay: { isElementVisible },
    initialSlide: 0, // Update this to 0
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        autoplaySpeed: 6000,
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        autoplaySpeed: 5000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getAosDuration = (index) => {
    // Adjust the duration values as per your requirement
    if (index === 0) {
      return 350; // First slide duration
    } else if (index === 1) {
      return 300; // Second slide duration
    } else if (index === 2) {
      return 350; // Second slide duration
    } else {
      return 400; // Third and subsequent slides duration
    }
  };
  return (
    <>
      <Slider {...settings} {...props} ref={targetElementRef}>
        {project &&
          project.test_data.map((test, index) => (
            <div
              key={test.id}
              data-aos="fade-up"
              data-aos-delay={getAosDuration(index)}
              data-aos-duration={getAosDuration(index)}
              data-aos-once="true"
              data-aos-offset={getAosDuration(index)}
            >
              <TestCard
                key={index}
                Slug={test.Slug}
                Test_Name={test.Test_Name}
                Test_Amount={test.Test_Amount}
                Discount_Amount={test.Discount_Amount}
                Test_Category={test.Test_Category}
                Test_ID={test.Test_ID}
                Test_Description={test.Test_Description}
                Who_is_it_for={test.Who_is_it_for}
                Pre_test_information={test.Pre_test_information}
                Turn_around_time={test.Turn_around_time}
                widthFull={true}
                BaseDirectory={
                  test.category === "test"
                    ? "test-detail"
                    : test.category === "package"
                    ? "packages"
                    : null
                }
                IsSeoH3={true}
              />
            </div>
          ))}
      </Slider>
    </>
  );
};
