import React from "react";
import { ChooseAssure } from "@/components/ChooseAssure";
import data from "@/Data/Test_detail.json";
import { Test_details_logic } from "@/components/Test_details_logic";

export const page = ({ params: { slug } }) => {
  // console.log("this is the slug", slug);
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          <div className="container">
            <div className="web-container">
              <Test_details_logic Slug={slug} data={data} Category="test" />
            </div>
          </div>
        </section>
        <ChooseAssure />
      </main>
    </>
  );
};
export default page;
