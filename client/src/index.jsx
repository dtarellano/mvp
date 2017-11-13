import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import App from './Components/App.jsx';
import SearchedMemes from './Components/SearchedMemes.jsx';

const RenderApp = () => {
  render(
    <Router>
      <App />
    </Router>, document.getElementById('app'));
}

RenderApp();
