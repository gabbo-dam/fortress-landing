import React from "react";

function Icon({colortheme}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.123"
      height="12.586"
      fill="none"
      version="1.1"
      viewBox="0 0 12.123 12.586"
      
    >
      <path
        stroke={colortheme}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
        strokeWidth="2"
        d="M1 1l5 5 5-5"
      ></path>
      <path
        stroke={colortheme}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
        strokeWidth="2"
        d="M1.123 6.587l5 5 5-5"
      ></path>
    </svg>
  );
}

export default Icon;
