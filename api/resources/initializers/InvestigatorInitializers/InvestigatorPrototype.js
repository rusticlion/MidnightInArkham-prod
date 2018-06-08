const Decks = require('../../items/Decks');

class Investigator {
  constructor(name, job, home, maxSanity, maxStamina, focus, statMins, wallet, clues, trophy, randomItems, randomArtifacts, randomSpells, randomSkills, randomAllies, tags = [], setInventory = []) {
    this.name = name;
    this.job = job;
    this.home = home;
    this.location = home;
    this.sanity = maxSanity;
    this.maxSanity = maxSanity;
    this.stamina = maxStamina;
    this.maxStamina = maxStamina;
    this.focusMax = focus;
    this.focusPoints = focus;
    this.movePoints = 0;
    this.minSpeed = statMins.speedMin;
    this.speedBuffs = [];
    this.minSneak = statMins.sneakMin;
    this.sneakBuffs = [];
    this.topPointer = statMins.topPointer;
    this.minFight = statMins.fightMin;
    this.fightBuffs = [];
    this.minWill = statMins.willMin;
    this.willBuffs = [];
    this.midPointer = statMins.midPointer;
    this.minLore = statMins.loreMin;
    this.loreBuffs = [];
    this.minLuck = statMins.luckMin;
    this.luckBuffs = [];
    this.bottomPointer = statMins.bottomPointer;
    this.wallet = wallet;
    this.clues = clues;
    this.trophy = trophy;
    this.tags = tags;
    this.bag = [];
    this.innates = [];
    this.spells = [];
    this.leftHand = 'None',
    this.rightHand = 'None',
    this.equippedTrinkets = [],
    this.bag = Decks.addCardsToArray(this.bag, Decks.commonItems, randomItems);
    this.bag = Decks.addCardsToArray(this.bag, Decks.artifacts, randomArtifacts);
    this.spells = Decks.addCardsToArray(this.spells, Decks.spells, randomSpells);
    this.innates = Decks.addCardsToArray(this.innates, Decks.skills, randomSkills);
    this.innates = Decks.addCardsToArray(this.innates, Decks.allies, randomAllies);
  }

  speed() {
    return this.speedMin+this.topPointer+this.speedBuffs.reduce(((total, buff) => total + buff.val), 0);
  }

  sneak() {
    return this.sneakMin+4-this.topPointer+this.sneakBuffs.reduce(((total, buff) => total + buff.val), 0);
  }

  fight() {
    return this.fightMin+this.medPointer+this.fightBuffs.reduce(((total, buff) => total + buff.val), 0);
  }

  will() {
    return this.willMin+4-this.medPointer+this.willBuffs.reduce(((total, buff) => total + buff.val), 0);
  }

  lore() {
    return this.loreMin+this.bottomPointer+this.loreBuffs.reduce(((total, buff) => total + buff.val), 0);
  }

  luck() {
    return this.luckMin+4-this.bottomPointer+this.luckBuffs.reduce(((total, buff) => total + buff.val), 0);
  }

}

module.exports = {
  Investigator,
}