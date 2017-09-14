import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import { Button} from 'reactstrap';

class Inventory extends Component {
  render() {
    return (
      <div>
        <h4>Inventory</h4>
        <AddFishForm addFish={this.props.addFish} />
        <Button block onClick={this.props.loadSamples}>Load Sample Fish</Button>
      </div>
    );
  }
}

export default Inventory;
