import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import SearchedMemes from './SearchedMemes.jsx'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/searched" component={SearchedMemes} />
    </Switch>
  </div>
)



export default App;
