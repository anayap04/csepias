import "./App.css";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme/themes";
import GlobalStyles from "./theme/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./app/screens/info";
import Agenda from "./app/screens/agenda";
import Courses from "./app/screens/courses";
import Editorial from "./app/screens/editorial";
import Home from "./app/screens/home";
import DetailEvent from "./app/screens/details/agenda";
import DetailCourse from "./app/screens/details/courses";

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/csepias">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda/event" element={<DetailEvent />}/>
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/detalle" element={<DetailCourse />} />
          <Route path="/editorial" element={<Editorial />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
