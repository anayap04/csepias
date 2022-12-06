import React from "react";
import Head from "../../components/organism/head";
import Header from "../../components/organism/header";

const Agenda = (props) => {
  return (
    <div>
      <Header optionSelected="agenda" />
      <Head
        title="Agenda"
        description={`En esta sección encontrarás todos los eventos que tenemos 
        para este mes. También puedes ver los que tendremos próximamente.`}
      >
        <div>{"p"}</div>
      </Head>
    </div>
  );
};

export default Agenda;
