import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import { Button, ListGroup, ListGroupItem, Form, FormGroup, Col, Input} from 'reactstrap';

class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    //console.log(e.target.value);
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <ListGroup>
          <ListGroupItem>
            <Form ref={ (input) => this.fishForm = input}  onSubmit={ (e) => {this.createFish(e)}}>
                  <FormGroup>
                      <Input ref={ (input) => this.name = input}
                            type="text"
                            name="name"
                            value={fish.name}
                            id="name"
                            placeholder="Fish Name"
                            onChange={ (e) => this.handleChange(e, key) }>
                      </Input>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="6">
                      <Input ref={ (input) => this.price = input}
                            type="text"
                            name="price"
                            value={fish.price}
                            id="price"
                            placeholder="Fish Price"
                            onChange={ (e) => this.handleChange(e, key) }>
                      </Input>
                    </Col>
                    <Col xs="6">
                      <Input type="select"
                              ref={ (input) => this.status = input}
                              name="select"
                              id="select"
                              onChange={ (e) => this.handleChange(e, key) }>
                        <option value="available">Fresh</option>
                        <option value="unavailable">Sold Out!</option>
                      </Input>
                    </Col>
                  </FormGroup>

                <FormGroup>
                  <Input type="textarea"
                        name="description"
                        value={fish.desc}
                        id="description"
                        ref={ (input) => this.description = input}
                        placeholder="Fish Description"
                        onChange={ (e) => this.handleChange(e, key) }>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Input ref={ (input) => this.image = input}
                        type="text"
                        name="fishUrl"
                        value={fish.image}
                        id="fishUrl"
                        placeholder="Fish Image"
                        onChange={ (e) => this.handleChange(e, key) }>
                  </Input>
                </FormGroup>

              <Button block type="submit">+ Add Item</Button>
              <br/>
            </Form>

          </ListGroupItem>
        </ListGroup>

      </div>
    )
  }

  render() {
    return (
      <div>
        <h4>Inventory</h4>
        <Button block onClick={this.props.loadSamples}>Load Sample Fish</Button>
        {
          Object.keys(this.props.fishes)
            .map(this.renderInventory)
        }
        <AddFishForm addFish={this.props.addFish} />

      </div>
    );
  }
}

export default Inventory;
