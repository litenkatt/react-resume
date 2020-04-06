import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './styling/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';

WebFont.load({
  google: {
    families: ['Syncopate:wght@400;700', 'Gotu', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
