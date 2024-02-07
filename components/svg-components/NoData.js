"use client";

import React, { useEffect } from "react";
import "./svgcss.css";

const NoData = (props) => {
  useEffect(() => {
    const dots = document.querySelectorAll(".no_data-1");
    let delay = 100;

    dots.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.animationDelay = `-${index * delay}ms`;
      }, 0);
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1429.74 1347.24"
        {...props}
      >
        <defs>
          <style>
            {
              ".no_data-1{fill:#fff;}.no_data-2{fill:#d9dfe3;}.no_data-3{fill:#b2b2b2;}.no_data-4{isolation:isolate;}.no_data-5{fill:#4d4d4d;}.no_data-6{fill:#e9f7ff;}.no_data-7{fill:#e3e9ed;}.no_data-8{fill:#708494;}.no_data-9{mix-blend-mode:screen;}.no_data-10{fill:#e6e6e6;mix-blend-mode:multiply;}.no_data-11{fill:#4ad2a5;}.no_data-61{fill:#88cae4;}"
            }
          </style>
        </defs>
        <g className="no_data-4">
          <g id="_\xD1\xEB\xEE\xE9_1">
            <g>
              <path
                className="no_data-6"
                d="M1273.2,162.38c-177.23-99.53-367.67,101.37-538.61-8.34-75.74-53.93-112.57-108.15-198.05-146.54C328.81-35.11,176.51,111.24,144.01,260.07c-29.64,110.83,71.49,188.09,151.09,340.89,1.26,2.41,2.34,4.93,3.21,7.51,36.88,109.7,9.52,155.28-83.86,159.09-150.5,4.25-251.32,112.39-201.66,256.7,109.31,208.18,349.29,314.1,595.51,322.52,301.09,10.31,578.51-156.95,701.44-419.86,.39-.84,.78-1.67,1.17-2.51,81.33-213.46,238.79-629.21-37.7-762.04Z"
              />
              <ellipse
                className="no_data-6"
                cx={190.33}
                cy={659.69}
                rx={60.74}
                ry={67.68}
                transform="translate(-484.84 534.97) rotate(-63.44)"
              />
              <ellipse
                className="no_data-6"
                cx={818.78}
                cy={85.09}
                rx={53.66}
                ry={88.52}
                transform="translate(376.58 779.42) rotate(-63.44)"
              />
            </g>
            <g>
              <path
                className="no_data-7"
                d="M1055.47,940.97H454.27c-22.84,0-41.36-20.39-41.36-45.55V449.68c0-25.16,18.52-45.55,41.36-45.55h601.2c22.84,0,41.36,20.39,41.36,45.55v445.74c0,25.16-18.52,45.55-41.36,45.55Z"
              />
              <path
                className="no_data-8"
                d="M1096.83,448.67c0-24.6-18.52-44.54-41.36-44.54H454.27c-22.84,0-41.36,19.94-41.36,44.54v407.23h683.92V448.67Z"
              />
              <rect
                className="no_data-61"
                x={441.99}
                y={434.64}
                width={625.75}
                height={392.96}
              />
              <path
                className="no_data-2"
                d="M874.95,1016.17c-1.82-3.49-21.43-20.51-31.71-31.45-10.28-10.94-10.28-43.75-10.28-43.75h-156.2s0,32.81-10.28,43.75c-10.28,10.94-29.89,27.96-31.71,31.45-.66,1.26,5.28,5.2,8.81,5.47,3.52,.27,111.28,0,111.28,0,0,0,107.75,.27,111.28,0,3.52-.27,9.47-4.2,8.81-5.47Z"
              />
              <path
                className="no_data-3"
                d="M874.95,1016.17c-3.49,3.25-7.48,5.23-8.81,5.47-1.33,.24-111.28,0-111.28,0,0,0-109.95,.24-111.28,0-1.33-.24-5.32-2.22-8.81-5.47-.33-.3,.62,6.94,8,6.94h224.17c7.38,0,8.33-7.24,8-6.94Z"
              />
              <g className="no_data-9">
                <polygon
                  className="no_data-5"
                  points="940.66 855.91 855.6 940.97 676.77 940.97 761.83 855.91 940.66 855.91"
                />
                <polygon
                  className="no_data-5"
                  points="1096.83 855.91 1011.77 940.97 921.19 940.97 1006.25 855.91 1096.83 855.91"
                />
              </g>
              <path
                className="no_data-10"
                d="M834.71,961.86l-158.32-11.99c.38-5.26,.38-8.9,.38-8.9h156.2s0,10.05,1.74,20.89Z"
              />
            </g>
            <g>
              <text
                x="53%"
                y="49%"
                className="not_found_text"
                textAnchor="middle"
                fontSize="45"
                fill="#000"
              >
                No Data Found!
              </text>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default NoData;
