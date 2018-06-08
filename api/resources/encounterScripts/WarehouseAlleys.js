const { makeTest } = require('../makeTest');
const Decks = require('../items/Decks.js');

const DumpsterDivingChoices = (game, investigator) => {
  return {
    narration: "You find something useful in a dumpster! Get a common item.",
    contextButtons: [
      {
        text: "Pick it up.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 1,
      },
      {
        text: "Keep on walking.",
        type: 'GO_TO_END_PHASE', 
        payload: 0,
      },
    ]
  }
}

const DumpsterDivingEffects = (game, investigator, choice) => {
  switch(choice) {
    case 1: //Picked up item
    investigator.bag.push(Decks.getRandomCard(Decks.commonItems));
      investigator.clientState = {
        view_type: "INVESTIGATION",
        narration: "You'll need every piece of gear you can get your hands on.",
        contextButtons: [
          {
            text: 'Continue',
            type: 'GO_TO_END_PHASE',
            payload: 0,
          },
        ],
      }
      break;
    default:
      break;
  }
}

const WarehouseAlleys = {
  name: 'Warehouse Alleys',
  encounters: [
    {
      index: 0,
      name: 'Dumpster Diving',
      init: DumpsterDivingChoices,
      resolve: DumpsterDivingEffects,
    }
  ],
}

module.exports = {
  WarehouseAlleys
}