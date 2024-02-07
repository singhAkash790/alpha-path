"use client";

import { useState, useEffect } from "react";
import mappingdata from "../Data/Maping.json";
import axios from "axios";
// import testData from "../Data/test_data.json";
import { TestCard } from "@/components/TestCard";
import NoData from "@/components/svg-components/NoData";

const SearchhPage = ({ slug }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log("this is the test id", selectedIds);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const matchedItem = mappingdata.mappingdata.find(
          (item) => item.slug === slug
        );

        // if (matchedItem) {
        //   const ids = matchedItem[Object.keys(matchedItem)[0]].id;
        //   setSelectedIds(Array.isArray(ids) ? ids.map(String) : [String(ids)]);
        // } else {
        //   setSelectedIds([]);
        // }

        if (matchedItem) {
          const ids = matchedItem.id;
          setSelectedIds(Array.isArray(ids) ? ids.map(String) : [String(ids)]);
        } else {
          setSelectedIds([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        if (selectedIds.length > 0) {
          const idsString = selectedIds.join(",");
          // console.log("thid is the snding id", idsString);
          const apiUrl = `https://www.assurepathlabs.com/api/algos/fetch_details.php?ids=${idsString}`;

          const response = await axios.get(apiUrl);

          if (response.data && response.data.test_data) {
            setPackageData(response.data.test_data);
          } else {
            setPackageData(null);
          }
        } else {
          setPackageData(null);
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    fetchPackageData();
  }, [selectedIds]);

  return (
    <div>
      {loading ? (
        <div className="_loader_cnt col-12 d-flex justify-content-center mt-5">
          <div className="_loader"></div>
        </div>
      ) : packageData ? (
        <div className="row justify-content-center">
          {packageData.map((test, index) => (
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
            />
          ))}
        </div>
      ) : (
        // <p>No package data found.</p>
        <div className="noData">
          <NoData />
        </div>
      )}
    </div>
  );
};

export default SearchhPage;
