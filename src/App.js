import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import logo from './logo.svg';
import Store from './components/Store';
import StorePicker from './components/StorePicker';
import Nav from './components/Nav';
//import NotFound from './components/NotFound';
import './App.css';

class App extends Component {

  
  render() {
    return (
        <div className="App" >
          <Router>
            <div>
              <Nav/>
              <Route exact path="/" component={StorePicker} />
              <Route path="/store" component={Store} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
