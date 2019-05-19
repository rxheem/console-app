import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in/' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
