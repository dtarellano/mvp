import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import MemeList from './Components/MemeList.jsx';
import Search from './Components/Search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: [],
      search: ''
    }
    this.search = this.search.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {

  }

  search(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSearch() {
    axios.post('/memes', {
      query: this.state.search
    });
  }

  render() {
    return (
      <div>
        <h1>Yo You Init</h1>
        <Search search={this.search}
                onSearch={this.onSearch}
        />
        <MemeList />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
