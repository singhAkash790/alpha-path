import React from "react";
import { Cancer } from "@/components/svg-components/Cancer";
import { ConditionGround } from "@/components/svg-components/ConditionGround";
import { Viral } from "@/components/svg-components/Viral";
import { Fever } from "@/components/svg-components/Fever";
import { Heart } from "@/components/svg-components/Heart";
import { Diabetes } from "@/components/svg-components/Diabetes";
import { Hypertenstion } from "@/components/Hypertenstion";
import { Infertility } from "@/components/svg-components/Infertility";
import { Allergy } from "@/components/svg-components/Allergy";
import Link from "next/link";

export const TestByCondition = () => {
  const conditionData = [
    {
      name: "Cancer",
      slug: "cancer",
      icon: <Cancer />,
    },
    {
      name: "Viral",
      slug: "viral",
      icon: <Viral />,
    },
    {
      name: "Allergy",
      slug: "allergy",
      icon: <Allergy />,
    },
    {
      name: "Fever",
      slug: "fever",
      icon: <Fever />,
    },
    {
      name: "Heart",
      slug: "heart",
      icon: <Heart />,
    },
    {
      name: "Diabetes",
      slug: "diabetes",
      icon: <Diabetes />,
    },
    {
      name: "Hypertension",
      slug: "hypertension",
      icon: <Hypertenstion />,
    },
    {
      name: "Infertility",
      slug: "infertility",
      icon: <Infertility />,
    },
  ];

  return (
    <>
      <div className="web-container">
        <div className="row ">
          <div className="col-lg-10 m-auto col-12">
            <div
              className="title col-12 float-start text-center mb-0 mt-3 mt-sm-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={250}
              data-aos-once="true"
              data-aos-offset={150}
              data-aos-easing="ease-in"
            >
              <h2>TEST BY CONDITION</h2>
            </div>
            <div
              className="row justify-content-md-center"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={150}
              data-aos-once="true"
              data-aos-offset={150}
              data-aos-easing="ease-in"
            >
              {conditionData.map((condition, index) => (
                <div
                  className="condition col-lg-3 col-md-4 col-sm-6 col-6 position-relative"
                  key={index}
                >
                  <Link href={`/condition/${condition.slug}`}>
                    <div className="condtionicon">{condition.icon}</div>
                    <div className="conditionshape">
                      <span>
                        <ConditionGround />
                      </span>
                      <h3>{condition.name}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
