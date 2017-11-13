import React from 'react';
import axios from 'axios';
import imgurId from '../../../imgurId.js';

class SearchedMemes extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      database: []
    }
  }

  search() {
    let term = searchTerm.split(' ').join('+');
    axios.get(`https://api.imgur.com/3/g/memes/search/?q=${term}`, {
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
      <div>Hi</div>
    )
  }
}

export default SearchedMemes;
