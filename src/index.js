import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';
import App from './App';
import StorePicker from './components/StorePicker';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />,
  document.querySelector('#root')
  );
registerServiceWorker();
