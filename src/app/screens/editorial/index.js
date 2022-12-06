import React from "react";
import Header from "../../components/organism/header";
import { LineHorizontal } from "../../components/atoms/line-separator/Separators";
import { SubTitle } from "../../components/foundations/Typography";
import { Container, HeadContainer } from "./styles";
import Head from "../../components/organism/head";

const Editorial = (props) => {
  return (
    <div>
      <Header optionSelected="editorial" />
        <Head title="Editorial" />
    </div>
  );
};

export default Editorial;
