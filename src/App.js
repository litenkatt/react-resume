import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';

import {Main} from './views/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
