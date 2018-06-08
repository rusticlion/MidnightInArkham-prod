const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewAlexandra = () => {
  const AlexandraEdgefield = {};
  AlexandraEdgefield.name = "Alexandra Edgefield";
  AlexandraEdgefield.job = "Student";
  AlexandraEdgefield.sanity = 5;
  AlexandraEdgefield.maxSanity = 5;
  AlexandraEdgefield.stamina = 5;
  AlexandraEdgefield.maxStamina = 5;
  AlexandraEdgefield.focus = 3;
  AlexandraEdgefield.home = "Lecture Hall";
  AlexandraEdgefield.texts = {
    intro: "The nightmares of a city beneath the waves come on stronger every night. You must find out why...",
  }
  AlexandraEdgefield.statBlock = {
    speedMin: 1,
    sneakMin: 1,
    topPointer: 2,
    fightMin: 1,
    willMin: 1,
    midPointer: 2,
    loreMin: 1,
    luckMin: 1,
    bottomPointer: 2
  };
  AlexandraEdgefield.wallet = 1;
  AlexandraEdgefield.clues = 1;
  AlexandraEdgefield.monsterTrophies = 0;
  AlexandraEdgefield.gateTrophies = 0;
  AlexandraEdgefield.bag = [];
  AlexandraEdgefield.innates = [];
  AlexandraEdgefield.tags = [];

  console.log("\nThis is the Investigator class prototype:\n", Investigator, "\n* * *\n");
  
  return new Investigator(AlexandraEdgefield.name, AlexandraEdgefield.job, AlexandraEdgefield.home, AlexandraEdgefield.maxSanity, AlexandraEdgefield.maxStamina, AlexandraEdgefield.focus, AlexandraEdgefield.statBlock, AlexandraEdgefield.wallet, AlexandraEdgefield.clues, AlexandraEdgefield.gateTrophies, 1, 1, 1, 2, 0);
}

module.exports = {
  rollNewAlexandra
}