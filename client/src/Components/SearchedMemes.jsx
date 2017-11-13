import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import imgur from '../../../imgurId.js';

import MemeList from './MemeList.jsx';
import Search from './Search.jsx';

class SearchedMemes extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      database: []
    }
    this.search = this.search.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  search(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSearch() {
    let term = this.state.search.split(' ').join('+');
    axios.get(`https://api.imgur.com/3/gallery/search/top/?q_exactly=${term}`, {
      headers: {
        Authorization: `Client-ID ${imgur.id}`
      }
    })
    .then(res => {
      let database = [];
      res.data.data.map(value => {
        if (value.images === undefined) {
          return;
        }
        let data = {
          id: value.id,
          title: value.title,
          link: value.images[0].link,
          views: value.views,
          ups: value.ups,
          downs: value.downs
        }
        database.push(data);
      });

      this.setState({
        database: database
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active" href="#">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Search search={this.search}
                      onSearch={this.onSearch}
              />
            </li>
          </ul>
          <MemeList memes={this.state.database} />
        </div>
      </div>
    )
  }
}

export default SearchedMemes;
