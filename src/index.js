import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// CSS Asstes
import './assets/vendor/css/animate.css';

// Scripts
import './assets/prod/scripts/main';

// Master CSS
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
