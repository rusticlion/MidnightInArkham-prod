const { resolveItemEffect } = require('../itemScripts');

const use_item = (game, move, currentInvestigator) => {
  const activationResolvedInfo = resolveItemEffect(game, move, currentInvestigator);
  return game;
}

module.exports = {
  use_item
}