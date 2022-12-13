import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import security from "../../../assets/images/security.jpg";
import { CardRoot } from "../../components/organism/photo-card/styles";

export const Root = styled.div`
  height: 100vh;
  width: 100vw;
`;

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
`;

export const ContentHome = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
`;

export const ContentSummary = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  width: 95vw;
  ${CardRoot} {
    text-align: left;
  }
`;

export const LinkDiv = styled.div`
  width: 100vw;
  text-align: center;
`;
