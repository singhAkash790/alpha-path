"use client";

import React, { useEffect } from "react";
import "../../index.css";
import Image from "next/image";
import doctorsData from "@/Data/Doctors_detials.json";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";

const Page = ({ params: { doctorslug } }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const doctorData = doctorsData.find((p) => p.slug === doctorslug) || null;

  const renderList = (list, title, className, subtitle) =>
    list &&
    list.length > 0 && (
      <div className={`docinfo-row ${className}`}>
        <div className="heading">
          <h3
            data-aos="fade"
            data-aos-delay={200}
            data-aos-duration={200}
            data-aos-once="true"
          >
            <strong>{title}</strong>
          </h3>
        </div>
        <div className="abt_cont">
          <p
            data-aos="fade"
            data-aos-delay={400}
            data-aos-duration={800}
            data-aos-once="true"
          >
            {subtitle}
          </p>
          {Array.isArray(list) && (
            <ul>
              {list.map((item, index) => (
                <li
                  key={index}
                  className=""
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 600}
                  data-aos-duration={600 + index * 200}
                  data-aos-once="true"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {typeof list === "string" && (
            <h5
              className=""
              data-aos="fade-left"
              data-aos-delay="120"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {list}
            </h5>
          )}
        </div>
      </div>
    );

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row doctor_name ">
              <div className="procont ">
                <div className="doctor_name_img">
                  <Image
                    src={doctorData?.image?.src}
                    alt="Dr. Sanjay Wadhwa"
                    title="Dr. Sanjay Wadhwa"
                    width="250"
                    height="250"
                    data-aos="fade"
                    data-aos-delay={300}
                    data-aos-duration={400}
                    data-aos-once="true"
                  />
                </div>
                <div className="procont_name">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay={400}
                    data-aos-duration={400}
                    data-aos-once="true"
                  >
                    {doctorData?.doctor_name}
                  </h2>
                  <strong
                    data-aos="fade-up"
                    data-aos-delay={500}
                    data-aos-duration={500}
                    data-aos-once="true"
                  >
                    {doctorData?.doctor_education}
                  </strong>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-aos-duration={600}
                    data-aos-once="true"
                  >
                    {doctorData?.doctor_details}
                  </p>
                </div>
              </div>
            </div>
            <div className="row gap-3 abt_doc_profile">
              {doctorData.qualifications &&
                renderList(
                  doctorData.qualifications,
                  "Qualifications",
                  "qualifi"
                )}
              {doctorData.experience &&
                renderList(
                  doctorData.experience.details,
                  "Experience",
                  "experience",
                  doctorData.experience.title
                )}
              {doctorData.clinical_expertise &&
                renderList(
                  doctorData.clinical_expertise.details,
                  "Clinical Expertise",
                  "clinical",
                  doctorData.clinical_expertise.title
                )}
              {doctorData.advanced_training &&
                renderList(
                  doctorData.advanced_training,
                  "Advanced Training",
                  "advanced"
                )}
              {doctorData.professional_associations &&
                renderList(
                  doctorData.professional_associations,
                  "Professional Associations",
                  "prosses"
                )}
              {doctorData.academic_participations &&
                renderList(
                  doctorData.academic_participations,
                  "Academic Participations",
                  "academic"
                )}
              {doctorData.affiliations &&
                renderList(
                  doctorData.affiliations,
                  "Affiliation with NABL",
                  "association"
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
