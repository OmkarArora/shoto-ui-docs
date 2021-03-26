import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavProvider } from './components';

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
    <App />
    </NavProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
