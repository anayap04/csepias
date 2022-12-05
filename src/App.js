import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './theme/themes';
import GlobalStyles from './theme/GlobalStyles';
import Icons from './app/components/foundations/Icons';
import Header from './app/components/atoms/header';

function App() {

  console.log(DefaultTheme)
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
      <Icons iconName="Location" />
    </ThemeProvider>
  );
}

export default App;
