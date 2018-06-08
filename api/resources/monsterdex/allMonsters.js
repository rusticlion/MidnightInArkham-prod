const allMonsters = [
  {
    name: "Star Vampire",
    awareness: -3,
    horrorRating: -3,
    horrorDamage: 3,
    combatRating: -3,
    combatDamage: 3,
    toughness: 3,
    trophy: 4,
    homeDimensions: ["Celeano", "Underworld"],
    narration: "It draws the eye irresistibly, projecting an inner fire like an explosion of shimmering rubies.",
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
    trophy: 3,
    homeDimensions: ["Yith", "Kadath"],
    narration: "The beast towers from the earth, a hateful monument of flesh thrashing about in place",
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
    trophy: 1,
    homeDimensions: ["Earth"],
    narration: "The line between good and evil divides the heart of each man..",
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
    trophy: 1,
    homeDimensions: ["Earth"],
    narration: "Frothing at the mouth, howling obscenities.",
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
    trophy: 2,
    homeDimensions: ["Celeano", "Underworld"],
    narration: "It feels like a warm sunbeam on your back - at first.",
    tags: ["Flying", "Ambush", "Physical Immunity"]
  },
  {
    name: "Mi-Go",
    awareness: -2,
    horrorRating: -1,
    horrorDamage: 2,
    combatRating: 0,
    combatDamage: 1,
    toughness: 2,
    trophy: 4,
    homeDimensions: ["Carcosa", "Yuggoth"],
    narration: "As terrible as it is in form, it is fouler still in thought.",
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
    trophy: 2,
    homeDimensions: ["Carcosa", "Earth"],
    narration: "He has long since left behind the truths of being human.",
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
    trophy: 3,
    homeDimensions: ["R'lyeh"],
    narration: "Its terrible, elongated face ended in a multitude of tentacles of varying lengths...as I watched, it unfurled, spined, slimy black wings and leapt into the air.",
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
    trophy: 2,
    homeDimensions: ["Earth", "Underworld"],
    narration: "A trapped soul. Perhaps you can set it free.",
    tags: ["Stationary", "Physical Immunity", "Undead"]
  },
  {
    name: "Speaking Demon",
    awareness: +1,
    horrorRating: -4,
    horrorDamage: 2,
    combatRating: 0,
    combatDamage: 0,
    toughness: 1,
    trophy: 1,
    homeDimensions: ["Earth", "Underworld"],
    narration: "The jawbones of dead demons speak terrible truths.",
    tags: ["Stationary", "Physical Immunity", "Undead"]
  }
];

module.exports = {
  allMonsters
}