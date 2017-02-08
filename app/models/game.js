var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  xIsNext: Boolean,
  stepNumber: Number,
  squares: [Number]
});

module.exports = mongoose.model('Game', GameSchema);
