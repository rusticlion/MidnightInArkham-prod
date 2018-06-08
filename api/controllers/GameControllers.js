const Game = require('../models/Game');
const { parse } = require('../resources/moveParser');
const initializeGameState = require('../resources/gameInitializer');

const buildNewGame = async (req, res) => {
  const gameOptions = {
    numberOfPlayers: req.body.gameSize,
  }
  const newGame = initializeGameState.initializeGameState(gameOptions);
  const game = new Game({game: newGame});
  try {
    const createdGame = await game.save();
    res.status(201).send(createdGame);
  } catch(e) {
    console.log(e);
  }
}

const makeMove = async (req, res) => {
  try {
    const currentGameState = await Game.findById(req.body.gameId);
    const newGameState = parse(currentGameState._doc.game, req.body.move);
    const updatedGame = await Game.findOneAndUpdate(
      { "_id" : req.body.gameId },
      { game : newGameState },
      { returnNewDocument: true }
    ); //I can't quite figure out how to get this findOneAndUpdate to return the new document value, it seems to be a syntax thing. Worked around for now.
    const supremeMostUpdatedGame = await Game.findById(req.body.gameId); //We should be able to factor out this request.
    console.log("About to reply to the request with this updated state:", supremeMostUpdatedGame);
    res.status(200).send(supremeMostUpdatedGame);
  } catch(e) {
    console.log(e);
  }
}

const getAllGames = async (req, res) => {
  try {
    const allGames = await Game.find({});
    res.status(200).send(allGames);
  } catch(e) {
    console.log("There was a problem retrieving the full set of games: ", e);
  }
}


module.exports = {
  buildNewGame,
  makeMove,
  getAllGames,
}