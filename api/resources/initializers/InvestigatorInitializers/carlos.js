const Decks = require('../../items/Decks');
const Investigator = require('./InvestigatorPrototype').Investigator;

const rollNewCarlos = () => {
  const CarlosRodriguez = {};
  CarlosRodriguez.name = "Carlos Rodriguez";
  CarlosRodriguez.job = "Cameraman";
  CarlosRodriguez.sanity = 4;
  CarlosRodriguez.maxSanity = 4;
  CarlosRodriguez.stamina = 6;
  CarlosRodriguez.maxStamina = 6;
  CarlosRodriguez.focus = 2;
  CarlosRodriguez.home = "Arkham Investigator";
  CarlosRodriguez.texts = {
    intro: "Take some time off, they said! You need some rest, they said! You'll show them. Camera slung on your shoulder like a revolutionary's rifle, you set off into the night.",
  }
  CarlosRodriguez.statBlock = {
    speedMin: 2,
    sneakMin: 0,
    topPointer: 2,
    fightMin: 2,
    willMin: 1,
    midPointer: 2,
    loreMin: 0,
    luckMin: 1,
    bottomPointer: 2
  };
  CarlosRodriguez.wallet = 4;
  CarlosRodriguez.clues = 1;
  CarlosRodriguez.monsterTrophies = 0;
  CarlosRodriguez.gateTrophies = 0;
  CarlosRodriguez.bag = [];
  CarlosRodriguez.innates = [];
  CarlosRodriguez.tags = ["Retainer"];

  return new Investigator(CarlosRodriguez.name, CarlosRodriguez.job, CarlosRodriguez.home, CarlosRodriguez.maxSanity, CarlosRodriguez.maxStamina, CarlosRodriguez.focus, CarlosRodriguez.statBlock, CarlosRodriguez.wallet, CarlosRodriguez.clues, CarlosRodriguez.gateTrophies, 1,2,0,1,0, CarlosRodriguez.tags);
}

module.exports = {
  rollNewCarlos
}