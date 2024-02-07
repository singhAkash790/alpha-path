"use client";
import React, { useEffect } from "react";
import "./DNA.css"; // Import the CSS file for styling

const useClient = (value) => {
  if (typeof window !== "undefined") {
    // Access the global object and set the variable
    window.iterations = value;
  }
};

const DNALoader = () => {
  // Use the hook to set the iterations on the client side
  useClient(30);

  useEffect(() => {
    const iterations = window.iterations; // Access the variable
    const rotateDelay = 0.15;

    const applyAnimation = (i) => {
      const delay = i * rotateDelay - 60;

      const currentElement = document.querySelector(`#dna div:nth-child(${i})`);
      if (currentElement) {
        currentElement.style.animationDelay = `${delay}s`;
      }

      const beforeElement = document.querySelector(
        `#dna div:nth-child(${i})::before`
      );
      if (beforeElement) {
        beforeElement.style.animationDelay = `${delay}s`;
      }

      const afterElement = document.querySelector(
        `#dna div:nth-child(${i})::after`
      );
      if (afterElement) {
        afterElement.style.animationDelay = `${delay}s`;
      }
    };

    for (let i = iterations; i > 0; i--) {
      applyAnimation(i);
    }
  }, []);

  return (
    <>
      <div className="dna_cnt col-12 d-flex justify-content-center">
        <div id="dna" className="dna-container">
          {[...Array(30)].map((_, index) => (
            <div key={index} className="dna-segment"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DNALoader;
