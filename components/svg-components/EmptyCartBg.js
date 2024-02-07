import React from "react";

const EmptyCartBg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="206"
        height="206"
        fill="none"
        className="empty-cart-mask"
      >
        <mask
          id="empty-cart-mask_svg__a"
          width="206"
          height="206"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="103" cy="103" r="103" fill="#F5F5F5"></circle>
        </mask>
        <g mask="url(#empty-cart-mask_svg__a)">
          <path fill="#6c6c6c" d="M0 128h206v87H0z"></path>
          <path
            fill="url(#empty-cart-mask_svg__c)"
            d="M139.841 52c-4.875 0-8.841-3.923-8.841-8.744 0-4.82 3.737-8.513 8.416-8.732C139.64 26.477 146.329 20 154.518 20c6.256 0 11.863 3.825 14.1 9.565a11.839 11.839 0 0 1 4.756-.983c4.331 0 8.272 2.308 10.362 6.045.47-.075.947-.113 1.423-.113 4.875 0 8.841 3.922 8.841 8.743S190.034 52 185.159 52h-45.318Z"
          ></path>
          <path
            fill="url(#empty-cart-mask_svg__d)"
            d="M-3.825 94C-7.23 94-10 91.18-10 87.715c0-3.465 2.61-6.12 5.878-6.277C-3.966 75.656.706 71 6.425 71c4.37 0 8.286 2.75 9.848 6.875a8.069 8.069 0 0 1 3.321-.707c3.025 0 5.778 1.66 7.237 4.345.329-.054.662-.08.994-.08 3.405 0 6.175 2.818 6.175 6.283C34 91.181 31.23 94 27.825 94h-31.65Z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="empty-cart-mask_svg__b"
            x1="6.951"
            x2="62.407"
            y1="128"
            y2="268.813"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#EBEBEB"></stop>
          </linearGradient>
          <linearGradient
            id="empty-cart-mask_svg__c"
            x1="131"
            x2="194"
            y1="35.999"
            y2="35.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset="1" stopColor="#E6E7E8"></stop>
          </linearGradient>
          <linearGradient
            id="empty-cart-mask_svg__d"
            x1="-10"
            x2="34"
            y1="82.5"
            y2="82.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E6E7E8"></stop>
            <stop offset="1" stopColor="#fff"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default EmptyCartBg;
