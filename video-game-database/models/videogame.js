let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var VideoGameSchema = new Schema(
  {
    title: {type: String, required: true},
    devloper: {type: String, required: true},
    release_date: {type: Date, required: true},
  }
);

module.export = mongoose.model('VideoGame', VideoGameSchema);
