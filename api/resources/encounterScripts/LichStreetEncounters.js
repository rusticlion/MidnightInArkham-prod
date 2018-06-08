// getRandomEncounterDescription should return an object of structure: {
//   text: String,
//   buttons: Array,
//   encounterNumber: Number,
// }
// resolveEncounter should take a game state, ref to investigator, and value from button, 
// and return a game state.

const DarkStrangerDetermineChoices = (gameState, currentInvestigator) => {
  if (!currentInvestigator.stamina || !currentInvestigator.sanity) return {
    contextButtons: [
      {
        text: "Ok...",
        type: 'PROCESS_ENCOUNTER_CHOICE',
        payload: 1,
      },
      {
        text: "No way!",
        type: 'PROCESS_ENCOUNTER_CHOICE',
        payload: 0,
      },
    ],
    narration: "A dark stranger offers you a deal - give up 1 sanity and 1 stamina, and you'll get three artifacts.",
  }
  else return {
    contextButtons: [
      {
        text: "Deal.",
        type: 'PROCESS_ENCOUNTER_CHOICE',
        payload: 1,
      },
      {
        text: "No deal!",
        type: 'PROCESS_ENCOUNTER_CHOICE',
        payload: 0,
      },
    ],
    narration: "A dark stranger offers you a deal: gain 1 artifact in exchange for 1 stamina and 1 sanity.",
  }
}

const DarkStrangerEffects = (gameState, currentInvestigator, playerChoice) => {
  console.log("Resolving effect of Dark Stranger!", playerChoice);
  switch(playerChoice) {
    case 1:  //Investigator took the deal.
      currentInvestigator.sanity--;
      currentInvestigator.stamina--;
      currentInvestigator.clientState = {
        view_type: "INVESTIGATION",
        contextButtons: [
          {
            text: 'Move on',
            type: 'GO_TO_END_PHASE',
            payload: 0,
          }
        ],
        narration: "With a wicked smile, the man hands over a parcel. As soon as you take it, you feel light-headed and begin to stumble, barely catching yourself against a nearby tree.\nWhen you regain your bearings, the dark man is nowhere to be seen."
      }
  }
}

const LichStreetEncounters = {
  name: 'Lich Street',
  encounters: [
    {
      index: 0,
      name: 'Dark Stranger',
      init: DarkStrangerDetermineChoices,
      resolve: DarkStrangerEffects,
    }
  ],
}


module.exports = {
  LichStreetEncounters
}