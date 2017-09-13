import React, { Component } from 'react';
import './StorePicker.css';
import { Button } from 'reactstrap';

class StorePicker extends Component {
  render() {
    // this is a comment anywhere else.
    return (
      <div>
        { /* this is a commment in react jsx */ }
        <form className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          <Button color="info" block>Visit Store</Button>
        </form>
      </div>
    );
  }
}

export default StorePicker;
