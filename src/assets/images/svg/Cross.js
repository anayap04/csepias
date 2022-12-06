import * as React from "react";
const SvgCross = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M120.2 120.2 105 135.5l60.2 60.2 60.3 60.3-60.3 60.3-60.2 60.2 15.2 15.3 15.3 15.2 60.2-60.2 60.3-60.3 60.3 60.3 60.2 60.2 15.3-15.2 15.2-15.3-60.2-60.2-60.3-60.3 60.3-60.3 60.2-60.2-15.2-15.3-15.3-15.2-60.2 60.2-60.3 60.3-60.3-60.3-60.2-60.2-15.3 15.2z"
      fill={props.color}
    />
  </svg>
);
export default SvgCross;
