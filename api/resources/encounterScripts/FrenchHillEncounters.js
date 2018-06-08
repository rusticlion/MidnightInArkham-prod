const { makeTest } = require('../makeTest');
const Decks = require('../items/Decks.js');

const ScreechingInTheManorDetermineChoices = (game, investigator) => {
  return {
    narration: "Walking past an elegant Victorian home, you hear a wailing shriek from inside!",
    contextButtons: [
      {
        text: "Use your Fighting ability to kick down the door and get to rescuing!",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 1,
      },
      {
        text: "Try to Sneak up to a window and con out the situation.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 2,
      },
      {
        text: "Push your Luck and just ring ther doorbell.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 3,
      },{
        text: "Keep on walking.",
        type: 'PROCESS_ENCOUNTER_CHOICE', 
        payload: 0,
      },
    ]
  }
}

const ScreechingInTheManorEffects = (game, investigator, choice) => {
  console.log("Resolving effect of Screeching in the Manor", choice);
  let successes;
  switch(choice) {
    case 1: //Used Fight
      successes = makeTest(investigator, 'fight', -2);
      if (successes) {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "A man with huge, bloodshot eyes looses a howl and charges. Fortunately, he collapses just in front of you. You find something strange on his person...",
          contextButtons: [
            {
              text: 'Leave it be',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            },
            {
              text: 'Pick it up',
              type: 'PROCESS_ENCOUNTER_CHOICE',
              payload: 4
            }
          ],
        }
      } else {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You stub your toe kicking the door, and also look quite foolish.",
          contextButtons: [
            {
              text: 'Move on',
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
        investigator.clues++;
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "A man is pacing back and forth inside the room...he doesn't look distressed. You wonder where the scream came from. Then, what you at first thought was a leather sack in the corner of the room begins to stretch and unfurl. For a moment, it seems to meet your eyes, and you quickly step away from the window.",
          contextButtons: [
            {
              text: 'Move on',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      } else {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You got caught. Will fill in later.",
          contextButtons: [
            {
              text: 'Move on',
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
        investigator.bag.push(Decks.drawRandomCardFrom(game.untradeablesDecks.allyDeck));
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "They loved your face so much they decided to come with you.",
          contextButtons: [
            {
              text: 'Move on',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      } else {
        investigator.clientState = {
          view_type: "INVESTIGATION",
          narration: "You stub your finger ringing the doorbell. Idiot.",
          contextButtons: [
            {
              text: 'Move on',
              type: 'GO_TO_END_PHASE',
              payload: 0,
            }
          ],
        }
      }
      break;
    case 4: //Successfully kicked down door, chose to pick up relic.
      investigator.bag.push(game.tradeablesDecks.artifactDeck.getRandomCard(Decks.artifacts));
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

const FrenchHillEncounters = {
  name: 'French Hill',
  encounters: [
    {
      index: 0,
      name: 'Screeching in the Manor',
      init: ScreechingInTheManorDetermineChoices,
      resolve: ScreechingInTheManorEffects,
    }
  ],
}

module.exports = {
  FrenchHillEncounters
}