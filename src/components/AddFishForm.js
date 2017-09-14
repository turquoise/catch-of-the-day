import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class AddFishForm extends Component {
  createFish(event) {
    event.preventDefault();
    console.log('create some fish');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value
    }
    console.log(fish);
    this.props.addFish(fish);
    this.fishForm.reset();
  }
  render() {
    return (
      <div>
        <Form ref={ (input) => this.fishForm = input} className="fish-edit" onSubmit={ (e) => {this.createFish(e)}}>
          <FormGroup>
            <Input ref={ (input) => this.name = input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Fish Name" />
          </FormGroup>
          <FormGroup>
            <Input ref={ (input) => this.price = input}
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Fish Price" />
          </FormGroup>
          <FormGroup>
            <Input type="select" ref={ (input) => this.status = input} name="select" id="select">
              <option value="available">Fresh</option>
              <option value="unavailable">Sold Out!</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input type="textarea"
                  name="description"
                  id="description"
                  ref={ (input) => this.description = input}
                  placeholder="Fish Description" >
            </Input>
          </FormGroup>
          <FormGroup>
            <Input ref={ (input) => this.image = input}
                  type="text"
                  name="fishUrl"
                  id="fishUrl"
                  placeholder="Fish Image" >
            </Input>
          </FormGroup>
          <Button block type="submit">+ Add Item</Button>
          <br/>
        </Form>

        { /* <form ref={ (input) => this.fishForm = input} className="fish-edit" onSubmit={ (e) => {this.createFish(e)}}>
          <input ref={ (input) => this.name = input} type="text" placeholder="Fish Name" />
          <input ref={ (input) => this.price = input} type="text" placeholder="Fish Price" />
          <select ref={ (input) => this.status = input} >
            <option value="available">Fresh</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea ref={ (input) => this.description = input} type="text" placeholder="Fish Description" ></textarea>
          <input ref={ (input) => this.image = input} type="text" placeholder="Fish Image" />
          <button type="submit">+ Add Item</button>
        </form> */}
      </div>
    );
  }
}

export default AddFishForm;
