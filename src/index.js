import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'core-js/stable';
import { enableES5 } from 'immer';
enableES5();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
