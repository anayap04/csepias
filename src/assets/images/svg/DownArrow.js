import * as React from "react";
const SvgDownArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M37 105.9c-6.1 2-10.2 5.1-21.1 16-9.7 9.7-12 12.6-13.7 17.4-2.8 7.3-2.8 13.1-.1 20.4 2 5.6 7.1 10.8 120.3 124.1 87.4 87.5 119.3 118.8 122.6 120.4 7 3.4 14.6 3.6 21.7.4 5.3-2.4 16.7-13.6 123-120.4 81.6-82 117.8-119.1 119.5-122.2 1.8-3.5 2.3-6.1 2.3-12 0-10.7-2.2-14.4-17.5-29.4-11-10.9-13.3-12.6-18-14-7.2-2.1-11.8-2-18.7.5-5.5 2-10.2 6.5-103.6 99.8L256 304.5l-97.8-97.6c-67.7-67.6-98.9-98.2-101.7-99.5-4.3-2-15.4-2.8-19.5-1.5z"
      fill={props.color}
    />
  </svg>
);
export default SvgDownArrow;
