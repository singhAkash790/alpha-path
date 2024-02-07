import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import TestPackageList from "@/components/TestPackageList";

export const Page = () => {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h1>Individual Packages</h1>
              </div>

              <div className="col-12 float-start all-test">
                <div className="row justify-content-center">
                  <TestPackageList Type="test" />
                </div>
              </div>
            </div>
            {/* Dots and Line components */}
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
