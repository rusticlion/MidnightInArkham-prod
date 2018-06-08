const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewTerry = () => {
  const TrashcanTerry = {};
  TrashcanTerry.name = "'Trashcan' Terry";
  TrashcanTerry.job = "Drifter";
  TrashcanTerry.sanity = 4;
  TrashcanTerry.maxSanity = 4;
  TrashcanTerry.stamina = 6;
  TrashcanTerry.maxStamina = 6;
  TrashcanTerry.focus = 1;
  TrashcanTerry.home = "Warehouse Alleys";
  TrashcanTerry.statBlock = {
    speedMin: 0,
    sneakMin: 3,
    topPointer: 2,
    fightMin: 2,
    willMin: 2,
    midPointer: 2,
    loreMin: 0,
    luckMin: 0,
    bottomPointer: 2
  };
  TrashcanTerry.wallet = 1;
  TrashcanTerry.clues = 3;
  TrashcanTerry.monsterTrophies = 0;
  TrashcanTerry.gateTrophies = 0;
  TrashcanTerry.bag = [];
  TrashcanTerry.innates = [Decks.getByName("Jake", Decks.allies)];
  TrashcanTerry.tags = ['Bad Credit'];

  TrashcanTerry.bag = Decks.addCardsToArray(TrashcanTerry.bag, Decks.commonItems, 1);
  TrashcanTerry.bag = Decks.addCardsToArray(TrashcanTerry.bag, Decks.artifacts, 1);
  TrashcanTerry.bag = Decks.addCardsToArray(TrashcanTerry.innates, Decks.skills, 1);
  
  return new Investigator(TrashcanTerry.name, TrashcanTerry.job, TrashcanTerry.home, TrashcanTerry.maxSanity, TrashcanTerry.maxStamina, TrashcanTerry.focus, TrashcanTerry.statBlock, TrashcanTerry.wallet, TrashcanTerry.clues, TrashcanTerry.gateTrophies, 1,1,0,1,0, TrashcanTerry.tags);
}

module.exports = {
  rollNewTerry
}