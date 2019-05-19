import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Semantic UI
import 'semantic-ui-css/semantic.min.css';
import $ from "jquery";

// Asstes
import './assets/vendor/css/animate.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
