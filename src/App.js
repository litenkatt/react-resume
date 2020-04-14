import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './utils/contexts';
import {
  theme,
  desktopFontSizes,
  mobileFontSizes,
  darkColors,
  lightColors,
} from './styling/theme';
import { GlobalStyle } from './styling/GlobalStyle';
import { Router } from './Router';

function App() {
  const [desktop, setDesktop] = useState(window.innerWidth > theme.desktopBreakpoint);
  const [small, setSmall] = useState(window.innerWidth < theme.smallBreakpoint);

  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setDesktop(e.target.innerWidth > theme.desktopBreakpoint);
    setSmall(e.target.innerWidth < theme.smallBreakpoint);
  };

  const fontSizes = desktop ? desktopFontSizes : mobileFontSizes;
  const colors = dark ? darkColors : lightColors;
  const combinedTheme = { ...theme, fontSizes, desktop, small, colors, dark };
  return (
    <ThemeProvider theme={combinedTheme}>
      <ThemeContext.Provider value={{ dark, setDark, small }}>
        <div className="App">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
