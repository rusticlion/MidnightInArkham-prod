const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewKim = () => {
  const KimMarkus = {};
  KimMarkus.name = "Kimberly Markus";
  KimMarkus.job = "Scientist";
  KimMarkus.sanity = 6;
  KimMarkus.maxSanity = 6;
  KimMarkus.stamina = 4;
  KimMarkus.maxStamina = 4;
  KimMarkus.focus = 1;
  KimMarkus.home = "College of Physical Sciences";
  KimMarkus.statBlock = {
    speedMin: 1,
    sneakMin: 2,
    topPointer: 2,
    fightMin: 1,
    willMin: 0,
    midPointer: 2,
    loreMin: 2,
    luckMin: 1,
    bottomPointer: 2
  };
  KimMarkus.wallet = 7;
  KimMarkus.clues = 2;
  KimMarkus.monsterTrophies = 0;
  KimMarkus.gateTrophies = 0;
  KimMarkus.bag = [];
  KimMarkus.innates = [];
  KimMarkus.tags = [];

  KimMarkus.bag = Decks.addCardsToArray(KimMarkus.bag, Decks.commonItems, 1);
  KimMarkus.bag = Decks.addCardsToArray(KimMarkus.bag, Decks.artifacts, 1);
  KimMarkus.bag = Decks.addCardsToArray(KimMarkus.bag, Decks.spells, 2);
  KimMarkus.bag = Decks.addCardsToArray(KimMarkus.innates, Decks.skills, 1);
  
  return new Investigator(KimMarkus.name, KimMarkus.job, KimMarkus.home, KimMarkus.maxSanity, KimMarkus.maxStamina, KimMarkus.focus, KimMarkus.statBlock, KimMarkus.wallet, KimMarkus.clues, KimMarkus.gateTrophies, 1,1,2,1,0, KimMarkus.tags);
}

module.exports = {
  rollNewKim
}