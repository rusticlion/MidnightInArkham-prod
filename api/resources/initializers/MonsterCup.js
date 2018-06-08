const initializeMonsterCup = () => {
  return monsterCup;
}

const monsterCup = [
  {
    name: "Star Vampire",
    awareness: -3,
    horrorRating: -3,
    horrorDamage: 3,
    combatRating: -3,
    combatDamage: 3,
    toughness: 3,
    homeDimensions: ["Celeano", "Underworld"],
    tags: ["Stalker", "Physical Resistance"]
  },
  {
    name: "Cthonian",
    awareness: +1,
    horrorRating: -2,
    horrorDamage: 2,
    combatRating: -3,
    combatDamage: 3,
    toughness: 3,
    homeDimensions: ["Yith", "Kadath"],
    tags: ["Stationary", "Special"]
  },
  {
    name: "Cultist",
    awareness: -3,
    horrorRating: 0,
    horrorDamage: 0,
    combatRating: 1,
    combatDamage: 1,
    toughness: 1,
    homeDimensions: ["Earth"],
    tags: ["Cultist"]
  },
  {
    name: "Maniac",
    awareness: -1,
    horrorRating: 0,
    horrorDamage: 0,
    combatRating: 1,
    combatDamage: 1,
    toughness: 1,
    homeDimensions: ["Earth"],
    tags: []
  },
  {
    name: "Fire Vampire",
    awareness: 0,
    horrorRating: 0,
    horrorDamage: 0,
    combatRating: -2,
    combatDamage: 2,
    toughness: 1,
    homeDimensions: ["Celeano", "Underworld"],
    tags: ["Flying", "Ambush", "Physical Immunity"]
  },
  {
    name: "Mi-Go",
    awareness: -2,
    horrorRating: -1,
    horrorDamage: 2,
    combatRating: 0,
    combatDamage: 1,
    toughness: 1,
    homeDimensions: ["Carcosa", "Yuggoth"],
    tags: ["Flying", "Special"]
  },
  {
    name: "Warlock",
    awareness: -2,
    horrorRating: -1,
    horrorDamage: 1,
    combatRating: -3,
    combatDamage: 1,
    toughness: 2,
    homeDimensions: ["Carcosa", "Earth"],
    tags: ["Stalker", "Physical Resistance", "Stationary"]
  },
  {
    name: "Star Spawn",
    awareness: -1,
    horrorRating: -3,
    horrorDamage: 2,
    combatRating: -3,
    combatDamage: 3,
    toughness: 3,
    homeDimensions: ["R'lyeh"],
    tags: []
  },
  {
    name: "Ghost",
    awareness: -3,
    horrorRating: -2,
    horrorDamage: 2,
    combatRating: -3,
    combatDamage: 2,
    toughness: 1,
    homeDimensions: ["Earth", "Underworld"],
    tags: ["Stationary", "Physical Immunity", "Undead"]
  }
];

module.exports = {
  initializeMonsterCup
};