import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    document.title = 'Dashboard | Console Membership Management Studio';
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <span />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Dashboard;
