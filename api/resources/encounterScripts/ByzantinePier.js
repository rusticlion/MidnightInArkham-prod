const { makeTest } = require('../makeTest');
const Decks = require('../items/Decks.js');

const LongWalk = (game, investigator) => {
  investigator.location = "Wooded Graveyard";
  return {
    narration: "The moon's shattered mirror image on the black surface of the Miskatonic arrests your vision. In the twilit shimmers, suddenly you see yourself, not reflected, but as if from above - and, your gaze transfixed, unable to so much as shift an eyeball, you observe yourself strolling silently off the end of the pier. The vision falls soundlessly for an endless moment, and just before it strikes the water, everything goes black.\n\nThe next thing you are aware of is the cool feeling of thick grass beneath your back.",
    contextButtons: [
      {
        text: "What just happened?",
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

const ByzantinePier = {
  name: 'Byzantine Pier',
  encounters: [
    {
      index: 0,
      name: 'A Long Walk',
      init: LongWalk,
      resolve: dummyEncounterEffects,
    }
  ],
}

module.exports = {
  ByzantinePier
}