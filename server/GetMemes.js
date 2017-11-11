const request = require('request');
const axios = require('axios');
const imgur = require('../imgurId.js');

let get = searchTerm => {
  let term = searchTerm.split(' ').join('+');
  axios.get(`https://api.imgur.com/3/g/memes/search/?q=${term}`, {
    headers: {
      Authorization: `Client-ID ${imgur.id}`
    }
  })
  .then(res => {
    console.log(res.data.data);
  })
  .catch(error => {
    console.log(error);
  });
}

module.exports.get = get;
