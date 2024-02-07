import Image from "next/image";
import React from "react";
import data from "@/Data/DoctorProfileData.json";
import "./index.css";
import Link from "next/link";

const Page = () => (
  <>
    <section className="position-relative">
      <div className="container">
        <div className="row">
          <div className="title col-12 float-start text-center">
            <h2>Our Doctors</h2>
          </div>
          <div className="leaderships">
            {data.map((doctor, index) => (
              <div className="leadership2" key={index}>
                <div className="leadershipimg">
                  <Image
                    src="/doctor-01.webp"
                    alt="Dr. Sanjay Wadhwa"
                    title="Dr. Sanjay Wadhwa"
                    width="350"
                    height="350"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>{doctor.name}</h2>
                  <ul>
                    <li>{doctor.position}</li>
                    <li>{doctor.organization}</li>
                  </ul>
                  <button type="button" className="cnt_shp_btn textbtn">
                    <Link href={`doctor-profile/details/${doctor.slug}`}>
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page;
