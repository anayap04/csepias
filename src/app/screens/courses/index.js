import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import Head from "../../components/organism/head";
import Header from "../../components/organism/header";

const Courses = (props) => {
  const theme = useTheme() || DefaultTheme
  return (
    <div>
      <Header optionSelected="courses" />
      <Head title="Cursos" description="Cursos actuales" icon="Certificate" colorIcon={theme.colors.pantoneBlue}  />
    </div>
  );
};

export default Courses;
