import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Components
import HomeNavigation from './components/homeNavigation/HomeNavigation';
import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';

import Dashboard from './components/dashboard/Dashbaord';

// Views
import Footer from './views/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    // State for the general application
    this.state = {
      user: {
        isLoggedIn: false,
        isAuthed: false,
        username: '',
        firstName: '',
        lastName: '',
        churchCode: '',
        church: ''
      }
    };
  }

  render() {
    return (
      <div className='App'>
        <Route
          path='/'
          render={props => (
            <HomeNavigation {...props} isAuthed={this.state.user.isAuthed} />
          )}
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in/' component={SignIn} />

          <Route exact path='/dashboard/' component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
