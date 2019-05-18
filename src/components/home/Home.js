import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <span>This is home</span>
      </div>
    );
  }
}

export default Home;
