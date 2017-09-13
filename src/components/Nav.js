import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <div><Link to="/">Login</Link></div>
      </div>
    );
  }
}

export default Nav;
