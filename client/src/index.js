import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./global.css";
import 'react-toastify/dist/ReactToastify.css';
import AppProvaider from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvaider>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvaider>
  </React.StrictMode>,
  document.getElementById('root')
);
