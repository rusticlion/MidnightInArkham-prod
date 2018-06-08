module.exports = app => {
  const GameControllers = require('../controllers/GameControllers');
  const UserControllers = require('../controllers/UserControllers');

  app.route('/new-game')
    .post(GameControllers.buildNewGame);

  app.route('/act')
    .post(GameControllers.makeMove);

  app.route('/claim-investigator')
    .post(UserControllers.claimInvestigator)

  app.route('/register')
    .post(UserControllers.register);

  app.route('/login')
    .post(UserControllers.login);

  app.route('/join-game')
    .post(UserControllers.joinGame);
  
  app.route('/games/all')
    .get(GameControllers.getAllGames);

  app.route('/games/:id')
    .get(UserControllers.getCurrentGame);
  
  app.route('/users/:id')
    .get(UserControllers.getCurrentUser);
  
}