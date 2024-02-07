import { Faq } from "@/components/Faq";
import TestCategory from "@/components/TestCategory";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import faqData from "@/Data/Faqs_subcat.json";
export const page = ({ params: { slug } }) => {
  const categoryData = faqData[slug] || [];
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <TestCategory Slug={slug} />
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
      <section id="faq" className="faq pt-5 col-12 ">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h2 className="">Frequently Asked Questions</h2>
              </div>
              <div className="col-lg-11 col-12 m-auto float-start">
                <Faq className="minusbottom" Data={categoryData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
