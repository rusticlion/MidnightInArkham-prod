const { CommonItemEffects } = require('./commonItems');

const itemEffects = [CommonItemEffects];

const resolveItemEffect = (game, item, investigator) => {
  const itemToUse = investigator.bag.find(el => el.name === item.name);
  const effectToUse = itemEffects[0].effects.find(itemEffect => itemEffect.name === item.name);
  effectToUse.effect(game, itemToUse, investigator);
}

module.exports = {
  resolveItemEffect
}