import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// import logo from './logo.svg';
import Store from './components/Store';
import StorePicker from './components/StorePicker';
import Nav from './components/Nav';
//import NotFound from './components/NotFound';
import './App.css';

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     login: userName
  //   };
  //
  // }
  //
  // goToStore(event) {
  //   event.preventDefault();
  //   console.log('you changed the url');
  //   console.log('this.StoreInput ', this.storeInput);
  //   const userName = this.storeInput.value;
  //   const path = `/store/${userName}`;
  //   console.log('path ', path);
  //
  //   this.context.router.history.push(path);
  // }

  render() {
    return (
        <div className="App" >
          <Router>
            <div>
              <Route exact path="/" render={ () => (<StorePicker />)}/>
              <Route path="/store/:id" render={ () => (<Store />)} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
