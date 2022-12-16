import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Normalize } from 'styled-normalize';

import './index.css';








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Normalize />
    <App/>
  </React.StrictMode>
);
