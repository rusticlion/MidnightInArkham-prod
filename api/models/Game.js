const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = Schema({
  game: {
    type: Object,
    required: true,
  },
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }]
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;