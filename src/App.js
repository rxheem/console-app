import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Components
import HomeNavigation from './components/homeNavigation/HomeNavigation';
import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path='/' component={HomeNavigation} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in/' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
