import React from "react";




const Clock = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        clip-rule="evenodd"
        viewBox="0 0 64 64"
        width="256"
        height="256"
      >
        <rect width="64" height="64" fill="none"></rect>
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="#cdd1ff"
          className="color3fc1c9 svgShape"
        ></circle>
        <path
          fill="#8789f6"
          d="M354,191.172L361.414,198.586C362.195,199.366 362.195,200.634 361.414,201.414C360.634,202.195 359.366,202.195 358.586,201.414L350.586,193.414C350.211,193.039 350,192.53 350,192L350,176C350,174.896 350.896,174 352,174C353.104,174 354,174.896 354,176L354,191.172Z"
          transform="translate(-320 -160)"
          className="coloreaeaea svgShape"
        ></path>
      </svg>
    </>
  );
};

export default Clock;
