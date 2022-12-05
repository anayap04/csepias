import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme/themes";
import GlobalStyles from "./theme/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./app/screens/info";
import Agenda from "./app/screens/agenda";
import Courses from "./app/screens/courses";
import Editorial from "./app/screens/editorial";

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/editorial" element={<Editorial />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
