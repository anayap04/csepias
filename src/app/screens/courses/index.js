import React from "react";
import Head from "../../components/organism/head";
import Header from "../../components/organism/header";


const Courses = (props) => {
  return (
    <div>
      <Header optionSelected="courses" />
      <Head title="Cursos" description="Cursos actuales" />

    </div>
  );
};

export default Courses;
