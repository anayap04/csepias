import React from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import { useNavigate } from "react-router-dom";
import Head from "../../components/organism/head";
import Header from "../../components/organism/header";
import CardSummary from "../../components/organism/summary-card";
import { BodyContent } from "./styles";
//Mock data
import mock from "../../../__mocks__/coursesInfo.json";

const Courses = (props) => {
  const theme = useTheme() || DefaultTheme;
  const navigate = useNavigate()
  const renderCards = (info, index) => (
    <CardSummary
      key={index}
      title={info.title}
      summary={info.summary}
      image={info.image}
      btnLabel="Ver más información"
      onClickBtn={() => navigate("/cursos/detalle/", {
        state: {
          idCourse: info.id,
        },
      })}
    />
  );
  return (
    <div>
      <Header optionSelected="courses" />
      <Head
        title="Cursos"
        description="Cursos actuales"
        icon="Certificate"
        colorIcon={theme.colors.pantoneBlue}
      />
      <BodyContent>{mock.data.map((data, index) => renderCards(data, index))}</BodyContent>
    </div>
  );
};

export default Courses;
