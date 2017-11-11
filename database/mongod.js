const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/memes');

let memeSchema = mongoose.Schema('Memes', {
  id: Number,
  title: String,
  link: String,
  views: Number,
  ups: Number,
  downs: Number
});

let Memes = mongoose.model('meme', memeSchema);

let save = (meme) => {
  return new Memes(meme).save( error => {
    if (error) {
      throw error;
    }
    console.log('dank memes saved');
  });
}

module.exports.save = save;
