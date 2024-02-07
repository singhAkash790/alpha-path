"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { useData } from "@/context/context";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  // const isInputNotEmpty = query.trim() !== "";
  // useEffect(() => {
  //   // Check if the query data has some input
  //   const hasInput = query.trim() !== "";
  //   console.log("this is the hasInput", hasInput);
  //   // Dispatch the TOGGLE_INPUT_DATA action based on the input condition
  //   cartDispatch({ type: "TOGGLE_INPUT_DATA", payload: hasInput });
  // }, [query, cartDispatch]);
  // console.log("this is the state", cartState.isInputNotEmpty);

  const isInputNotEmpty = query.trim() !== "";
  // console.log("this is the input", isInputNotEmpty);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query.trim() !== "") {
          const response = await axios.get(
            // `http://127.0.0.1/assure_api/keyword_json_api.php?searchWord=${query}`
            `https://www.assurepathlabs.com/api/new-api/keyword_json_api.php?searchWord=${query}`
          );
          // console.log("this is the api data", response.data.keywords);

          if (response.data.keywords.length === 0) {
            setSuggestions([]);
          } else {
            setSuggestions(response.data.keywords);
          }
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
        setSuggestions([]); // Set suggestions to an empty array in case of an error
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    const searchTypeahead = document.querySelector(".rbt-input-main");
    if (searchTypeahead) {
      searchTypeahead.blur();
      // console.log("done");
    }
  }, [pathname]);

  const handleInputChange = (query) => {
    setQuery(query);
  };

  const nameToSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleSuggestionSelect = (selected) => {
    if (selected === undefined || selected === null) {
      return null;
    } else {
      setSelected(selected);
      // console.log("this is the selected data", selected);
      if (selected.length !== 0) {
        const slug = nameToSlug(selected[0]);
        router.push(`/search/${encodeURIComponent(slug)}`);
      }
    }
  };

  return (
    <>
      <Typeahead
        id="searchTypeahead"
        className={isInputNotEmpty ? "isInput" : ""}
        options={suggestions}
        onInputChange={handleInputChange}
        onChange={handleSuggestionSelect}
        placeholder="Search Your Test/Package"
        selected={selected}
        minLength={1}
        clearButton={true}
        maxResults={10}
        highlightOnlyResult={true}
        autoFocus
        filterBy={() => true}
        additionalResultsText="Show more"
        paginationText="Load more..."
      />
      <div className={`_icon ${isInputNotEmpty ? "isInputIcon" : ""}`}>
        <SearchIcon className="d-none d-sm-block" />
      </div>
    </>
  );
};

export default SearchBar;
