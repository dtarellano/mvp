const request = require('request');
const axios = require('axios');
const imgur = require('../imgurId.js');
const mongod = require('../database/mongod.js');

let get = searchTerm => {
  let term = searchTerm.split(' ').join('+');
  axios.get(`https://api.imgur.com/3/gallery/search/top/?q_exactly=${term}`, {
    headers: {
      Authorization: `Client-ID ${imgur.id}`
    }
  })
  .then(res => {
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
      mongod.save(data)
    });
    //console.log(res.data.data[0].images[0].link);
  })
  .catch(error => {
    console.log(error);
  });
}

module.exports.get = get;
