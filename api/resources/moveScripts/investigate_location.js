const { getRandomEncounter, resolveEncounter } = require("../encounterScripts");

//Get a random encounter index for this location and attach it to the investigator
//Call the appropriate function for the encounter to determine its options.
//Attach the encounter index to the investigator.
const investigate_location = (newGameState, move, currentInvestigator) => {
  //const thisLocation = newGameState.board.map.locations.find(location => location.name === currentInvestigator.location);
  const encounter = getRandomEncounter(newGameState, currentInvestigator);
  encounterInitInfo = encounter.init(newGameState, currentInvestigator);
  currentInvestigator.activeEncounter = encounter.index;
  currentInvestigator.clientState = {
    view_type: "INVESTIGATION",
    contextButtons: encounterInitInfo.contextButtons,
    narration: encounterInitInfo.narration
  };
  return newGameState;
};

const process_encounter_choice = (newGameState, move, currentInvestigator) => {
  console.log(
    "This is the active encounter we're submitting our choice to:",
    currentInvestigator.activeEncounter
  );
  console.log("This is the choice we're sending in to the encounter:", move);
  const encounterResolvedInfo = resolveEncounter(
    newGameState,
    currentInvestigator.activeEncounter,
    currentInvestigator,
    move
  );
  // currentInvestigator.clientState = {
  //   view_type: encounterResolvedInfo.newClientView,
  //   contextButtons: encounterResolvedInfo.contextButtons,
  //   narration: encounterResolvedInfo.narration,
  // }
  return newGameState;
};

module.exports = {
  investigate_location,
  process_encounter_choice
};
