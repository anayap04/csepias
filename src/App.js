import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './theme/themes';
import GlobalStyles from './theme/GlobalStyles';

function App() {

  console.log(DefaultTheme)
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
