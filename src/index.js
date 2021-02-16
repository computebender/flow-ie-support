import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'core-js/stable';
import 'resize-observer-polyfill/dist/ResizeObserver.global';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
