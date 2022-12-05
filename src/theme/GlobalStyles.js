// @flow
import { createGlobalStyle } from "styled-components";
import AcuminBdItPro from "../assets/fonts/Acumin-BdItPro.woff";
import AcuminBdPro from "../assets/fonts/Acumin-BdPro.woff";
import AcuminItPro from "../assets/fonts/Acumin-ItPro.woff";
import AcuminRPro from "../assets/fonts/Acumin-RPro.woff";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Acumin-BdItPro;
    src: url(${AcuminBdItPro}) format('woff');
  }
  @font-face {
    font-family: Acumin-BdPro;
    src: url(${AcuminBdPro}) format('woff');
  }
  @font-face {
    font-family: Acumin-ItPro;
    src: url(${AcuminItPro}) format('woff');
  }
  @font-face {
    font-family: Acumin-RPro;
    src: url(${AcuminRPro}) format('woff');
  }
  
`;

export default GlobalStyles;
