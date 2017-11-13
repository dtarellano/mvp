const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/memes');

let memeSchema = mongoose.Schema({
  id: String,
  title: String,
  link: String,
  views: Number,
  ups: Number,
  downs: Number
});

let Memes = mongoose.model('Meme', memeSchema);

let save = (meme) => {
  return new Memes(meme).save( error => {
    if (error) {
      throw error;
    }
    console.log('dank memes saved');
  });
}

let get = () => {
  return Memes.find().limit(30).sort('-views');
}
module.exports.save = save;
module.exports.get = get;
