"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "aos/dist/aos.css";
import SearchBar from "./SearchBar";
import { PiArrowLeftThin } from "react-icons/pi";
import { DropDown_search } from "./DropDown_search";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";

const MobileSearchBar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setSearchOpen(false);
  }, [pathname]);
  return (
    <>
      <span className="search_icon">
        <BsSearch className="search_icon"
          onClick={() => {
            setSearchOpen(!isSearchOpen);
          }}
        />
      </span>
      {/* <iframe
        onClick={() => {
          setSearchOpen(!isSearchOpen);
        }}
        src="https://lottie.host/embed/d1b47d84-38b0-49a7-9e6c-8dd9c7cc5fae/U36txwHMax.json"
      ></iframe> */}
      <div
        className={`fixed d-flex bg-white mobile_search_cnt align-items-start justify-content-end ${
          isSearchOpen ? " top-0" : " invisible "
        }`}
      >
        <PiArrowLeftThin
          className="cross"
          onClick={() => {
            setSearchOpen(!isSearchOpen);
          }}
        />
        <div className="mobile_searchbar">
          <SearchBar />
          <DropDown_search />
        </div>
      </div>
      {/* {isSearchOpen && (
      )} */}
    </>
  );
};

export default MobileSearchBar;
