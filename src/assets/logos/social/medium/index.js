import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="22"
      fill="none"
      viewBox="0 0 28 22"
      {...props}
    >
      <path
        fill=""
        d="M28 3.245h-1.106c-.414 0-.994.584-.994.961v13.658c0 .382.58.892.994.892H28V22H17.965v-3.245h2.1V4.4h-.098L15.06 22h-3.795L6.42 4.4H6.3v14.355h2.1V22H0v-3.245h1.078c.442 0 1.022-.509 1.022-.891V4.207c0-.376-.58-.962-1.022-.962H0V0h10.506l3.444 12.735h.099L17.528 0H28v3.245z"
      ></path>
    </svg>
  );
}

export default Icon;
