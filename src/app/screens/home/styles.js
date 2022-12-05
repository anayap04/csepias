import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import security from "../../../assets/images/security.jpg";

export const Container = styled.div`
  background: url(${security});
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;

`;
Container.defaultProps = {
  theme: DefaultTheme,
};

export const Content = styled.div`
  background-color: ${({ theme, background }) =>
    background ? background + "78" : "transparent"};
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  text-align: center;
`;
