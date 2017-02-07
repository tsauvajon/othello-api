var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  id: String,
  xIsNext: Boolean,
  stepNumber: Number,
  squares: [Number]
});

module.exports = mongoose.model('Game', GameSchema);
