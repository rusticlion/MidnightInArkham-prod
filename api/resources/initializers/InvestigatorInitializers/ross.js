const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewRoss = () => {
  const RossTorrance = {};
  RossTorrance.name = "Ross Torrance";
  RossTorrance.job = "Groundskeeper";
  RossTorrance.sanity = 4;
  RossTorrance.maxSanity = 4;
  RossTorrance.stamina = 6;
  RossTorrance.maxStamina = 6;
  RossTorrance.focus = 1;
  RossTorrance.home = "Christchurch Cemetery";
  RossTorrance.statBlock = {
    speedMin: 0,
    sneakMin: 1,
    topPointer: 2,
    fightMin: 1,
    willMin: 3,
    midPointer: 2,
    loreMin: 1,
    luckMin: 1,
    bottomPointer: 2
  };
  RossTorrance.wallet = 4;
  RossTorrance.clues = 0;
  RossTorrance.monsterTrophies = 5;
  RossTorrance.gateTrophies = 0;
  RossTorrance.bag = [];
  RossTorrance.innates = [];
  RossTorrance.tags = [];

  RossTorrance.bag = Decks.addCardsToArray(RossTorrance.bag, Decks.commonItems, 2);
  RossTorrance.bag = Decks.addCardsToArray(RossTorrance.bag, Decks.artifacts, 2);
  RossTorrance.bag = Decks.addCardsToArray(RossTorrance.innates, Decks.skills, 1);
  
  return new Investigator(RossTorrance.name, RossTorrance.job, RossTorrance.home, RossTorrance.maxSanity, RossTorrance.maxStamina, RossTorrance.focus, RossTorrance.statBlock, RossTorrance.wallet, RossTorrance.clues, RossTorrance.gateTrophies, 2,2,0,1,0, RossTorrance.tags);
}

module.exports = {
  rollNewRoss
}