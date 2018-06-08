// It is important to note that what is stored here is the *client-side* information for each card.
// This should be considered a sort of 'key', to be used to access deeper properties of the cards wehen necessary on the server.
// This way, the game state does not need to contain (and more importantly, pass back and forth), the JS describing the effects of each card.

const commonItems = [
  // {
  //   name: ".18 Derringer",
  //   hands: 1,
  //   buffs: [
  //     {
  //       name: 'Small-Caliber Shot',
  //       stat: 'Fight',
  //       val: 1,
  //     },
  //     {
  //       name: 'Concealed Threat',
  //       stat: 'Sneak',
  //       val: 1,
  //     },
  //   ],
  //   description:
  //     "Don't scoff: it's easy to hide, and most certainly still a gun.",
  // },
  // {
  //   name: ".38 Revolver",
  //   hands: 1,
  //   buffs: [
  //     {
  //       name: 'Medium-Caliber Shot',
  //       stat: 'Fight',
  //       val: 2,
  //     },
  //   ],
  //   description:
  //     "You worry that the weapon may not be effective against the...thing, you saw, but you feel better with it in your bag all the same."
  // },
  // {
  //   name: ".45 Automatic",
  //   hands: 1,
  //   buffs: [
  //     {
  //       name: 'Large-Caliber Shot',
  //       stat: 'Fight',
  //       val: 3,
  //     },
  //   ],
  //   description: "A sizeable and sturdy handgun."
  // },
  // {
  //   name: "Ancient Tome",
  //   hands: 1,
  //   buffs: [
  //     {
  //       name: 'Reference Text',
  //       stat: 'Lore',
  //       val: 2,
  //     },
  //   ],
  //   description: "You don't want to know what kind of leather this is."
  // },
  // {
  //   name: "Axe",
  //   hands: 2,
  //   buffs: [
  //     {
  //       name: 'Axing a Question',
  //       stat: 'Fight',
  //       val: 3,
  //     },
  //     {
  //       name: 'Here\'s Johnny',
  //       stat: 'Luck',
  //       val: 1,
  //     }
  //   ],
  //   description: "Good for all kinds of jobs, this one included."
  // },
  // {
  //   name: "Bullwhip",
  //   hands: 1,
  //   description: "It belongs in a museum."
  // },
  // {
  //   name: "Dusty Manuscript",
  //   hands: 1,
  //   buffs: [
  //     {
  //       name: 'Manuscript Notes',
  //       stat: 'Luck',
  //       val: 1,
  //     },
  //     {
  //       name: 'Author\'s Forward',
  //       stat: 'Lore',
  //       val: 1,
  //     }
  //   ],
  //   description:
  //     "This forgotten and unfinished work may still yet be amongst the most important ever committed to the page."
  // },
  // {
  //   name: "Tommy Gun",
  //   hands: 2,
  //   description: "An illegal instrument for filling the air with lead."
  // },
  // {
  //   name: "Knife",
  //   hands: 1,
  //   buffs: [
  //     {
  //       name: "Cold Iron",
  //       stat: "Fight",
  //       val: 1,
  //     }
  //   ],
  //   description:
  //     "A cold iron blade, with which to slay demons and worse (Yesterday you used it to cut summer sausage)."
  // },
  // {
  //   name: "Newspaper",
  //   hands: 2,
  //   buffs: [
  //     {
  //       name: 'Local Update',
  //       stat: 'Luck',
  //       val: 1,
  //     },
  //     {
  //       name: 'Frame of Reference',
  //       stat: 'Lore',
  //       val: 1,
  //     },
  //     {
  //       name: 'Covered Ops',
  //       stat: 'Sneak',
  //       val: 2,
  //     }
  //   ],
  //   description:
  //     "Good for both information and concealing one's face in public."
  // },
  // {
  //   name: "Rebar",
  //   hands: 2,
  //   description:
  //     "Monster + rebar = fubar."
  // },
  // {
  //   name: "Shotgun",
  //   hands: 2,
  //   description:
  //     "\"It don't look so scary now!\" - Old Man Vernicky"
  // },
  {
    name: "Pack of Cigarettes",
    hands: 0,
    charges: 5,
    description:
      "You know they're bad for you, but you aren't exactly worried about cancer or heart disease tonight."
  }
];

const artifacts = [
  {
    name: "Hero's Elder Sign",
    hands: 0,
    description: "By light and by fire, I seal this path!"
  },
  {
    name: "Survivor's Elder Sign",
    hands: 0,
    description: "By home and by hope, I seal this path!"
  },
  {
    name: "Poet's Elder Sign",
    hands: 0,
    description: "By reason and by rhyme, I seal this path!"
  },
  {
    name: "Pastor's Elder Sign",
    hands: 0,
    description: "By faith and by friends, I seal this path!"
  },
  {
    name: "Knight's Elder Sign",
    hands: 0,
    description: "By honor and by courage, I seal this path!"
  },
  {
    name: "Father's Elder Sign",
    hands: 0,
    description: "By love and by family, I seal this path!"
  },
  {
    name: "Alien Device",
    hands: 1,
    description:
      "You can't tell how it works at all - but it's definitely working."
  },
  {
    name: "Golden Sword of Yhar'Nataam",
    hands: 2,
    description: "It darkles. It ouzes. It...tincts."
  }
];

const spells = [
  {
    name: "Shrivelling",
    hands: 1,
    description: "All things turn to dust - some faster than others."
  },
  {
    name: "Find Gate",
    hands: 1,
    description: "The way is open. You only need to step through."
  },
  {
    name: "Foresee",
    hands: 1,
    description:
      "Knowledge is neither a blessing nor a curse. It is a pathway, and once you have begun to walk down it, there is no turning back."
  },
  {
    name: "Voice of Ra",
    hands: 0,
    description: "A voice silenced for millenia speaks once more tonight."
  },
  {
    name: "Fire of Celaeno",
    hands: 2,
    description: "A flame fuelled by madness finds ideal tinder here."
  }
];

const skills = [
  {
    name: "Confidence",
    description: "There is a power to ignorance."
  },
  {
    name: "Fisticuffs",
    description:
      "The scars of battles long lost will be the currency by which we purchase victory."
  },
  {
    name: "Performance",
    description:
      "As long as we can sing and dance, we have something they don't."
  }
];

const allies = [
  {
    name: "Meridith Withers",
    description: '"I can help - I have some things stashed away."'
  },
  {
    name: "Mack T. Tomason",
    description: '"Aw, I seen miles worse than this in my New York days."'
  },
  {
    name: "Jake",
    description: '"Bark! Bark! Woof!"'
  }
];

const getByName = (name, deck) => {
  const fetchedItem = deck.filter(card => {
    if (card.name === name) return card;
  });
  return fetchedItem[0];
};

const getRandomCard = deck =>
  deck[Math.floor(Math.random() * deck.length)];

const drawRandomCardFrom = deck => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1);
}

const addCardsToArray = (arr, deck, numberOfCards) => {
  const resultingArray = arr.slice(0);
  for (let i = 0; i < numberOfCards; i++) {
    resultingArray.push(getRandomCard(deck));
  }
  return resultingArray;
}

module.exports = {
  commonItems,
  artifacts,
  spells,
  skills,
  allies,
  getByName,
  getRandomCard,
  drawRandomCardFrom,
  addCardsToArray,
};