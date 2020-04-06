import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import {theme, desktopFontSizes, mobileFontSizes} from './styling/theme';
import {GlobalStyle} from './styling/GlobalStyle';

import {Main} from './views/Main';

function App() {
  const [desktop, setDesktop] = useState(window.innerWidth > theme.breakpoint);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setDesktop(e.target.innerWidth > theme.breakpoint);
  };

  const fontSizes = desktop ? desktopFontSizes : mobileFontSizes;
  const combinedTheme = {...theme, fontSizes}
  return (
    <ThemeProvider theme={combinedTheme}>
      <div className="App">
        <Main />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
