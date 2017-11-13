import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MemeList from './MemeList.jsx';
import Search from './Search.jsx';

class Home extends React.Component {
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
    axios.get('/memes').then(res => {
      this.setState({
        memes: res.data
      });
    });
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
        <div className="container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/searched">
                <a className="nav-link active" href="#">Search</a>
              </Link>
            </li>
            <li className="nav-item">
              <Search search={this.search}
                      onSearch={this.onSearch}
              />
            </li>
          </ul>
          <MemeList memes={this.state.memes} />
        </div>
      </div>
    )
  }
}

export default Home;
