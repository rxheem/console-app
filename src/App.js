import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './components/home/Home';
function App() {
  return (
    <div className='App'>
      <div>This is being made with semantic ui</div>

      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
