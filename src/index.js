import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // ← your star field + .card styles
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode><App/></React.StrictMode>
  );
