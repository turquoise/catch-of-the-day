import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom'
import { getFunName } from '../helpers';
import './StorePicker.css';
import { PropTypes } from 'prop-types';
import { Button } from 'reactstrap';
//import Store from './Store';

class StorePicker extends Component {
  
  goToStore(event) {
    event.preventDefault();
    console.log('you changed the url');
    console.log('this.StoreInput ', this.storeInput);
    const userName = this.storeInput.value;
    const path = `/store/${userName}`;
    console.log('path ', path);

    this.context.router.history.push(path);
  }
  render() {
    // this is a comment anywhere else.
    return (
      <div>

        { /* this is a commment in react jsx */ }
        <form className="store-selector" onSubmit={ (e) => this.goToStore(e)} >
          <h4>Please enter a store</h4>
          <input type="text"
                required
                placeholder="Store Name"
                defaultValue={getFunName()}
                ref={ (input) =>  {this.storeInput = input} } />
            <Button color="info" block type="submit">
              Visit Store
            </Button>
        </form>

      </div>
    );
  }
}


StorePicker.contextTypes = {
  router: PropTypes.object
};

export default StorePicker;
