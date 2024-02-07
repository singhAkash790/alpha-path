"use client"
import React, { useEffect, useRef, useState } from "react";
import LogoDNA from "@/components/svg-components/LogoDNA";
import Cookies from "js-cookie";

const Loader = ({ isLoading }) => {
  const [loaderVisiblity, setLoaderVisiblity] = useState(isLoading);
  const mainLoaderRef = useRef(null);

  const hideLoaderSec = () => {
    document.querySelectorAll(".main_loader_sec").forEach((sec) => {
      sec.classList.add("mainSecLoaderLoaded");
    });
  };
  const hideLoader = () => {
    if (mainLoaderRef.current) {
      mainLoaderRef.current.classList.add("d-none");
    }
  };

  // Automatically hide loader after 3 seconds
  const timeout = setTimeout(hideLoaderSec, 4000);
  const timeoutId = setTimeout(hideLoader, 4500);

  // Cleanup the timeout to avoid memory leaks
  useEffect(() => {
    return () => clearTimeout(timeoutId, timeout);
  }, []);
  useEffect(() => {
    if (isLoading) {
      const loaderTimeout = setTimeout(() => {
        setLoaderVisiblity(false);
        Cookies.set("loaderHidden", true, { expires: 10 / (24 * 60) });
      }, 3000);

      return () => clearTimeout(loaderTimeout);
    } else {
      setLoaderVisiblity(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!process.browser) return;
    const hideLoaderSecClient = () => {
      document.querySelectorAll(".main_loader_sec").forEach((sec) => {
        sec.classList.add("mainSecLoaderLoaded");
      });
    };

    const timeout = setTimeout(hideLoaderSecClient, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loaderVisiblity && (
        <div
          className={`main_loader ${isLoading ? "loaded" : ""}`}
          ref={mainLoaderRef}
        >
          <div className="main_loader_sec">
            <LogoDNA />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
