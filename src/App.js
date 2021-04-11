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
import i18n from './i18n';

function App() {
  const [desktop, setDesktop] = useState(
    window.innerWidth > theme.desktopBreakpoint
  );
  const [small, setSmall] = useState(window.innerWidth < theme.smallBreakpoint);

  const [dark, setDark] = useState(true);

  useEffect(() => {
    if(i18n.languages.includes(i18n.language.slice(0, 2))){
      i18n.language = i18n.language.slice(0, 2);
    }else{
      i18n.language = i18n.languages[0];
    }
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
          <BrowserRouter basename="/">
            <Router />
          </BrowserRouter>
        </div>
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
