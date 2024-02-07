import React from "react";

const SkeletonLoader = ({ height, width, lines }) => {
  return (
    <div className="skeleton" style={{ height, width }}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="line"></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
