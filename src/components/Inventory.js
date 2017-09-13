import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
  render() {
    return (
      <div>
        <h4>Inventory</h4>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;
