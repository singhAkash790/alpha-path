"use client"


import React, { useState, useRef, useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import { usePathname } from "next/navigation";
import Link from "next/link";

import SearchBox from "../components/Search_box";

const SearchBar = () => {
  const [value, setValue] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setDropdownVisible(false);
  }, [pathname]);

  const handleChange = (_, newValue) => setValue(newValue);

  const filterOptions = () => {
    const options = value === 0 ? testOptions : packageOptions;
    const filterFunction = (opt) =>
      opt.filter((o) =>
        o.label.toLowerCase().includes(searchText.toLowerCase())
      );
    setFilteredOptions(filterFunction(options));
  };

  const handleTextFieldClick = () => setDropdownVisible(true);

  const handleBodyClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    filterOptions();
  }, [searchText, value]);

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    return () => document.body.removeEventListener("click", handleBodyClick);
  }, []);

  const renderOptions = () =>
    filteredOptions.length > 0 ? (
      <ul>
        {filteredOptions.map((option, index) => (
          <Link
            href={`/${value === 0 ? "test-detail" : "packages"}/${option.slug}`}
            key={index}
          >
            <li>{option.label}</li>
          </Link>
        ))}
      </ul>
    ) : (
      <ul>
        <li className="border-0 text-center opacity-50 text-uppercase">
          No matching results found.
        </li>
      </ul>
    );

  const testOptions = [
    { label: "Adenosine Deaminase", slug: "adenosine-deaminase" },
    {
      label: "17-Alpha-Hydroxy Progesterone",
      slug: "17-alpha-hydroxy-progesterone",
    },
    {
      label: "24 Hours Urine Protein Electrophoresis",
      slug: "24-hours-urine-protein-electrophoresis",
    },
    { label: "Body Fluid Analysis", slug: "body-fluid-analysis" },
    { label: "H Pylori IgM Antibodies", slug: "h-pylori-igm-antibodies" },
    { slug: "h-pylori-igm-antibodies", label: "H Pylori IgM Antibodies" },
    {
      label: "Quarduaple Maternal Secreen (Quadruple Test)",
      slug: "quarduaple-maternal-secreen-quadruple-test",
    },
    {
      slug: "quarduaple-maternal-secreen-quadruple-test",
      label: "Quarduaple Maternal Secreen (Quadruple Test)",
    },
    {
      label: "Alanine Aminotransferase ( ALT ), Sgpt",
      slug: "alanine-aminotransferase--alt--sgpt",
    },
    { slug: "adenosine-deaminase", label: "Adenosine Deaminase" },
  ];

  const packageOptions = [
    {
      slug: "assure-complete-wellness-package-for-man",
      label: "Complete Wellness Package",
    },
    {
      slug: "assure-fit-couple-essential-man",
      label: "Assure Fit Couple Essential - Man",
    },
    {
      slug: "assure-complete-wellness-package-for-woman",
      label: "Complete Wellness Packag",
    },
    {
      slug: "assure-fit-couple-essential-woman",
      label: "Assure Fit Couple Essential - Woman",
    },
  ];
  return (
    <div className="col-12  pull-left position-relative">
      <div className="header_search position-relative">
        <SearchBox />
       
      </div>
      {isDropdownVisible && (
        <div className="dropdowntab pb-2 col-12" ref={dropdownRef}>
          <Box className="mb-3 grey-background border-bottom col-12">
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Test" />
              <Tab label="Packages" />
            </Tabs>
          </Box>
          <div className="listdata col-12 float-start">{renderOptions()}</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
