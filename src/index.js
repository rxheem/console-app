import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Semantic UI
import 'semantic-ui-css/semantic.min.css';

// CSS Asstes
import './assets/vendor/css/animate.css';

// Scripts
import './assets/prod/scripts/main';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
