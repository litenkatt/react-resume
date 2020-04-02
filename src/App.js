import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';

import {Header} from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
