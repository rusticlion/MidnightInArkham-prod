const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewMarie = () => {
  const MarieTannenbaum = {};
  MarieTannenbaum.name = "Marie Tannenbaum";
  MarieTannenbaum.job = "Screenwriter";
  MarieTannenbaum.sanity = 6;
  MarieTannenbaum.maxSanity = 6;
  MarieTannenbaum.stamina = 4;
  MarieTannenbaum.maxStamina = 4;
  MarieTannenbaum.focus = 2;
  MarieTannenbaum.home = "Velma's Diner";
  MarieTannenbaum.statBlock = {
    speedMin: 1,
    sneakMin: 0,
    topPointer: 2,
    fightMin: 0,
    willMin: 2,
    midPointer: 2,
    loreMin: 1,
    luckMin: 2,
    bottomPointer: 2
  };
  MarieTannenbaum.wallet = 7;
  MarieTannenbaum.clues = 2;
  MarieTannenbaum.monsterTrophies = 0;
  MarieTannenbaum.gateTrophies = 0;
  MarieTannenbaum.bag = [];
  MarieTannenbaum.innates = [];
  MarieTannenbaum.tags = [];

  return new Investigator(MarieTannenbaum.name, MarieTannenbaum.job, MarieTannenbaum.home, MarieTannenbaum.maxSanity, MarieTannenbaum.maxStamina, MarieTannenbaum.focus, MarieTannenbaum.statBlock, MarieTannenbaum.wallet, MarieTannenbaum.clues, MarieTannenbaum.gateTrophies, 1,2,0,1,0, MarieTannenbaum.tags);
}

module.exports = {
  rollNewMarie
}