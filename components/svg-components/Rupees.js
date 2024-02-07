import React from 'react'

export const Rupees = (props) => {
  return (
    <>
     <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M11 6h13M8 11h16"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
    <path d="m21.362 27-10.8-9H12c3.381 0 7-2.612 7-6.5S15.381 5 12 5H8v2h4c2.097 0 5 1.564 5 4.5S14.097 16 12 16H8v2.468L18.238 27h3.124z" />
  </svg>
    </>
  )
}
