const User = require('../models/User');
const Game = require('../models/Game');

const register = async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = { username, password, email };
  const user = new User(newUser);
  user.save((err, createdUser) => {
    if (err) {
      console.log('There was a problem saving the user to the database!')
      res.status(422);
      res.send({'Error inserting into users: ': err.message});
      return;
    }
    res.json(createdUser);
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const formattedUsername = username.toLowerCase();
  try {
    const currentUser = await User.findOne({ username: formattedUsername });
    if (currentUser === null) {
      res.status(422).json({ error: "Couldn't find that user in the database" });
      return;
    }
    const userIsValidated = await currentUser.checkPassword(password);
    if (userIsValidated) {
      res.status(200).json(currentUser)
    } else {
      res.status(422).json({ error: "Couldn't validate user's password" });
    }
  } catch(e) {
    console.log("There was an error logging in: ", e);
  }
}

const joinGame = async (req,res) => {
  const { userId, gameId } = req.body;
  try {
    //console.log("About to join game ID : ", gameId, "\n");
    await User.findByIdAndUpdate(userId, { $set : { currentGame : gameId }});
    await Game.findByIdAndUpdate(gameId, { $push : { players : userId }});
    const userInfoWithGame = await User.findById(userId).populate('currentGame');
    //console.log("Gave the user access to the game: ", userInfoWithGame);
    //console.log("This should grab the events happening at French Hill Streets in the current game: ", userInfoWithGame.currentGame.game.board.map.FrenchHillStreets);
    res.status(202).send({ message: "The User should now have access to their game." });
  } catch(e) {
    console.log("There was an error joining the game: ", e);
  }
}

const claimInvestigator = async (req, res) => {
  const { userId, gameId, jobToClaim } = req.body;
  try {
    const currentGameState = await Game.findById(gameId);
    const newGameState = {
      ...currentGameState._doc.game,
    };
    console.log("The copy of the game state is: ", newGameState);
    const investigatorToModify = newGameState.investigators.find(investigator => (investigator.job === jobToClaim));
    console.log(`\nInvestigator to Modify: ${investigatorToModify.name}\nuserId: ${userId}\ngameId: ${gameId}\nJob to Claim: ${jobToClaim}\n\n`);
    investigatorToModify.playerId = userId;
    investigatorToModify.clientState = {
      view_type: 'SETUP',
      contextButtons: [
        {
          text: "Ready...",
          type: 'BEGIN_GAME',
          payload: userId,
        }
      ],
      narration: `${newGameState.game ? newGameState.game.oldOne.name : 'Arkham'} welcomes you... we will begin when you are ready.`
    }
    console.log("About to reassign game state: ", newGameState.investigators);
    const gameToUpdate = await Game.findByIdAndUpdate(gameId, { $set:
      {
        game : newGameState
      }
    });

    const userProfileToUpdate = await User.findByIdAndUpdate(userId, { $set:
      {
        currentJob : jobToClaim
      }
    });
    console.log("\nUpdated user with job!\n");
    res.status(200).send({ message: "The user should now be attached to their chosen character and vice versa." });
  } catch(e) {
    console.log("There was a problem claiming the investigator: ", e);
  }
}

const getCurrentGame = async (req, res) => {
  const userId = req.params.id;
  console.log("This is the UID we'll look for: ", userId);
  try {
    const currentUser = await User.findById(userId).populate('currentGame');
    res.status(200).send(currentUser.currentGame);
  } catch(e) {
    console.log("There was an error fetching the current game: ", e);
  }
};

const getCurrentUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUser = await User.findById(userId).populate('currentGame');
    res.status(200).send(currentUser);
  } catch(e) {
    console.log("There was an error fetching the current game: ", e);
  }
}

module.exports = {
  register,
  login,
  joinGame,
  getCurrentGame,
  getCurrentUser,
  claimInvestigator
}