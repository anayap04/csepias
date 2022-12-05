import React from "react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Header from "../../components/atoms/header";
import { TitlePrincipal } from "../../components/foundations/Typography";
import { Container, Content } from "./styles";

const Home = (props) => {
  const [background, setBackground] = useState(null);
  const theme = useTheme() || DefaultTheme;
  return (
    <div>
      <Header setBackground={setBackground} />
      <Container>
        <Content background={background}>
          <div>
            {background === "transparent" && (
              <TitlePrincipal color={theme.colors.white}>
                {
                  "Trazabilidad, requisito fundamental de los Sistemas Integrales de Seguridad (SIS)."
                }
              </TitlePrincipal>
            )}
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default Home;
