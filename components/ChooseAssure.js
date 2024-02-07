import React from "react";
import { AssureSafety } from "@/components/svg-components/AssureSafety";
import { FreeHomeCollection } from "@/components/svg-components/FreeHomeCollection";
import { SameDayreport } from "@/components/svg-components/SameDayreport";
import AffordablePricing from "@/components/svg-components/AffordablePricing";
import PlayStore from "@/components/svg-components/PlayStore";
import Nabh from "@/components/svg-components/Nabh";
import { Consultant } from "./svg-components/Consultant";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import data from "@/Data/Choose_us.json";

const iconComponents = {
  Nabh,
  AssureSafety,
  SameDayreport,
  FreeHomeCollection,
  AffordablePricing,
  Consultant,
  PlayStore,
};

export const ChooseAssure = () => {
  const { title, icons } = data;

  return (
    <section className="position-relative">
      <div className="container">
        <div className="web-container">
          <div className="row">
            <div
              className="title col-12 float-start text-center "
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={250}
              data-aos-once="true"
              data-aos-offset={150}
              data-aos-easing="ease-in"
            >
              <h2>{title}</h2>
            </div>
            <div className="col-lg-8 m-auto col-12 float-start chooseassure">
              <div className="row justify-content-center">
                {icons.map(({ id, icon, text, index }) => (
                  <div
                    key={id}
                    className="col-lg-3 col-sm-4 col-6 chooseUsIcon"
                  >
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span
                        className="flex-center mb-2 button button--aylen button--round-l button--text-thick"
                        data-aos="flip-right"
                        data-aos-delay={50 + id * 10}
                        data-aos-duration={30 + id * 5}
                        data-aos-once="true"
                        data-aos-offset={120}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        {React.createElement(iconComponents[icon])}
                      </span>
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={200}
                        data-aos-once="true"
                        data-aos-offset={120}
                        data-aos-easing="linear"
                      >
                        {text}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
      {/* <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" /> */}
    </section>
  );
};
