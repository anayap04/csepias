import * as React from "react";
const SvgMenu = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <g fill={props.color}>
      <path d="M64 85.5V107h384V64H64v21.5zM64 256v21h384v-42H64v21zM213.7 405.7c-.4.3-.7 10-.7 21.5V448h235v-43H331.2c-64.3 0-117.2.3-117.5.7z" />
    </g>
  </svg>
);
export default SvgMenu;
