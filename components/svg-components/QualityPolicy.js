import React from 'react'

export const QualityPolicy = (props) => {
  return (
    <>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 1920 1080"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={420}
        x2={1500}
        y1={540}
        y2={540}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#c7f0f1" />
        <stop offset={1} stopColor="#c0c5ec" />
      </linearGradient>
    </defs>
    <path
      d="M420-420h1080v1920H420z"
      style={{
        fill: "url(#a)",
        strokeWidth: 0,
      }}
      transform="rotate(90 960 540)"
    />
  </svg>
    </>
  )
}
