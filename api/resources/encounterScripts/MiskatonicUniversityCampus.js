const { makeTest } = require('../makeTest');
const Decks = require('../items/Decks.js');

const dummyEncounterChoices = (game, investigator) => {
  return {
    narration: "The night is deep and strange...!",
    contextButtons: [
      {
        text: "Use the first option.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 1,
      },
      {
        text: "Use the second option.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 2,
      },
      {
        text: "Use the third option.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 3,
      },{
        text: "Keep on walking.",
        type: 'GO_TO_END_PHASE', 
        payload: 0,
      },
    ]
  }
}

const dummyEncounterEffects = (game, investigator, choice) => {
  console.log("Resolving effect of dummy encounter", choice);
  let successes;
  switch(choice) {
    case 1: //Used Fight
      successes = makeTest(investigator, 'fight', -2);
      if (successes) {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You passed a Fight test.",
          contextButtons: [
            {
              text: 'Continue',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            },
          ],
        }
      } else {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You failed a Fight test.",
          contextButtons: [
            {
              text: 'Continue',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      }
      break;
    case 2: //Used Sneak
      successes = makeTest(investigator, 'sneak');
      if (successes) {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You passed a Sneak test.",
          contextButtons: [
            {
              text: 'Continue',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      } else {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You failed a Sneak test.",
          contextButtons: [
            {
              text: 'Continue',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      }
      break;
    case 3: //Used Luck
      successes = makeTest(investigator, 'luck');
      if (successes) {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "Passed a Luck test.",
          contextButtons: [
            {
              text: 'Continue',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      } else {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "Failed a Luck test.",
          contextButtons: [
            {
              text: 'Continue',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      }
      break;
    case 4: //Successfully kicked down door
      investigator.bag.push(Decks.getRandomCard(Decks.artifacts));
      investigator.sanity--;
      investigator.clientState = {
        view_type: "INVESTIGATION",
        narration: "A vicious draft slams the door shut just as you pick up the item.\nIt doesn't lock, but it gives you a nasty scare anyway. Lose 1 sanity.",
        contextButtons: [
          {
            text: 'Move on',
            type: 'GO_TO_END_PHASE',
            payload: 0,
          }
        ]
      }
    default:
      break;
  }
}

const MiskatonicUniversityCampus = {
  name: 'Miskatonic University Campus',
  encounters: [
    {
      index: 0,
      name: 'Dummy Encounter',
      init: dummyEncounterChoices,
      resolve: dummyEncounterEffects,
    }
  ],
}

module.exports = {
  MiskatonicUniversityCampus
}