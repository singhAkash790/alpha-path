// useApi.js
import { useState, useEffect } from "react";
import axios from "axios";

const UseApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(
          `https://www.assurepathlabs.com/api/new-api/keywords_api12.php?searchWord=${query}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (
              data.message === "No keywords found for the given search word"
            ) {
              // Handle the case where no keywords are found
              setSuggestions([]);
            } else {
              // Update suggestions if keywords are found
              setSuggestions(data.keywords);
            }
          })
          .catch((error) => {
            console.error("Error fetching data from the API", error);
          });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default UseApi;
