const end_turn = (game, move, currentInvestigator) => {
  let investigatorsAreReady = true;
  currentInvestigator.finishedTurn = true;
  game.investigators.forEach(investigator => {
    if (!investigator.finishedTurn) investigatorsAreReady = false;
  });
  if (!investigatorsAreReady) {
    currentInvestigator.clientState = {
      view_type: "TURN_END_LOBBY",
      contextButtons: [
        {
          text: 'Wait...',
          type: 'GO_TO_END_PHASE',
          payload: 0,
        }
      ],
      narration: "Nothing else will happen until everyone has finished their exploration and encounters.",
    };
    return game;
  } else {
    const mythosLog = resolve_mythos(game);
    game.investigators.forEach(investigator => {
      investigator.clientState = {
        view_type: "UPKEEP",
        contextButtons: [
          {
            text: 'Ready...',
            type: 'GO_TO_MOVEMENT_PHASE',
            payload: investigator.playerId,
          }
        ],
        narration: mythosLog,
      };
    });
    return game;
  }
}

const resolve_mythos = (game) => {
  const { parse } = require('../moveParser');
  game.oldOne.doom++;
  //const randomLocation = game.board.map.locations[Math.floor(Math.random()*game.board)]
  game = parse(game, {
    type: 'SPAWN_MONSTER_AT_LOCATION',
    player: null,
    payload: {
      locationToSpawn: game.board.map.locations[Math.floor(Math.random() * game.board.map.locations.length)]
    }
  });
  if (game.oldOne.doom < game.oldOne.doomMax) return `${game.oldOne.name} stirs in its slumber...`;
  else return `Dread ${game.oldOne.name} awakens! This is your last chance!`;
}

module.exports = {
  end_turn,
}