const { spliceOutByName } = require('../makeTest');

const smokeCigarette = (game, item, investigator) => {
  investigator.stamina--;
  investigator.sanity++;
  item.charges--;
  console.log("Decremented cigarette count:", item.charges)
  if (!item.charges) spliceOutByName(investigator.bag, 'Pack of Cigarettes');
  investigator.clientState.narration += "You cough as you exhale, but you do feel a bit calmer.";
}

const CommonItemEffects = {
  name: 'Common Effects',
  effects: [
    {
      index: 0,
      name: 'Pack of Cigarettes',
      effect: smokeCigarette,
    }
  ],
}

module.exports = {
  CommonItemEffects
}