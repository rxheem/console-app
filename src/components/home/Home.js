import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    document.title = 'Home | Console Membership Management Studio';
  }

  render() {
    return (
      <div>
        <span />
      </div>
    );
  }
}

export default Home;
