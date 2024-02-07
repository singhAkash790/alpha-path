"use client";

import React from "react";
import { TestCard } from "@/components/TestCard";
import { useAlert } from "@/context/AlerterContext";
import NoData from "./svg-components/NoData";
const TestCategory = ({ Slug }) => {
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { showAlert } = useAlert();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.assurepathlabs.com/api/algos/fetch_details.php?category=test`
        );
        const data = await response.json();
        setProject(data.test_data);
        if (data.test_data.length === 0) {
          showAlert("info", "no data is found", "info");
          // console.log("no data is found");
        }
        console.log("this is the api data", data);
      } catch (error) {
        // console.error("Error fetching data:", error);
        showAlert("Error", "network Error", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Slug]);

  // Check if project is not null before filtering
  const filtered_slug_data =
    project && project.filter((p) => p.Test_Category === Slug);
  console.log("this is the page slug", filtered_slug_data);

  return (
    <>
      <div className="row">
        {loading ? (
          <div className="_loader_cnt col-12 d-flex justify-content-center">
            <div className="_loader"></div>
          </div>
        ) : project ? (
          <>
            <div className="title col-12 float-start text-center">
              <h3>{Slug} Test</h3>
            </div>
            <div className="col-12 float-start all-test">
              <div className="row justify-content-center">
                {/* Fix the typo in the condition here */}
                {filtered_slug_data.length !== 0 ? (
                  <>
                    {filtered_slug_data.map((test, index) => (
                      <TestCard
                        // key={index}
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
                        BaseDirectory={`organ/${Slug}/test`}
                      />
                    ))}
                  </>
                ) : (
                  "No test found"
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="No_Data d-flex justify-content-center col-12">
            <NoData />
          </div>
        )}
      </div>
    </>
  );
};

export default TestCategory;
