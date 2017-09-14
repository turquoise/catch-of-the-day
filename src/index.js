import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';



import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';
import App from './App';
//import Store from './components/Store';
//import StorePicker from './components/StorePicker';
//import Nav from './components/Nav';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
  );




registerServiceWorker();
