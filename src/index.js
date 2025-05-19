/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 05/05/2025 - 20:19:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
