import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './utils/contexts';
import {
  theme,
  desktopFontSizes,
  mobileFontSizes,
  darkColors,
  lightColors,
} from './styling/theme';
import { GlobalStyle } from './styling/GlobalStyle';

import { Main } from './views/Main';

function App() {
  const [desktop, setDesktop] = useState(window.innerWidth > theme.breakpoint);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setDesktop(e.target.innerWidth > theme.breakpoint);
  };

  const fontSizes = desktop ? desktopFontSizes : mobileFontSizes;
  const colors = dark ? darkColors : lightColors;
  const combinedTheme = { ...theme, fontSizes, desktop, colors, dark };
  return (
    <ThemeProvider theme={combinedTheme}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <div className="App">
          <Main setDark={setDark} />
        </div>
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
