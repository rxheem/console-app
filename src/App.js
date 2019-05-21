import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Components
import HomeNavigation from './components/homeNavigation/HomeNavigation';
import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';

// Views
import Footer from './views/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path='/' component={HomeNavigation} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in/' component={SignIn} />
        </Switch>
        <Route path='/' component={Footer} />
      </div>
    );
  }
}

export default App;
