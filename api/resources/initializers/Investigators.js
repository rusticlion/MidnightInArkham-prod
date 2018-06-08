const { rollNewAlexandra } = require("./InvestigatorInitializers/alexandra");
const { rollNewKim } = require("./InvestigatorInitializers/kim");
const { rollNewTerry } = require("./InvestigatorInitializers/terry");
const { rollNewCarlos } = require("./InvestigatorInitializers/carlos");
const { rollNewMarie } = require("./InvestigatorInitializers/marie");
const { rollNewRoss } = require("./InvestigatorInitializers/ross");

const populateInvestigators = options => {
  /* options : {
    numberOfPlayers: Number,

  }
  */
  console.log(`\n${options.numberOfPlayers}\n`);
  const investigators = [];
  console.log("Number of investigator slots: ", options.numberOfPlayers);
  console.log("Number of investigators generated: ", investigators.length);
  const alreadyChosen = [];
  while (investigators.length < options.numberOfPlayers) {
    console.log("We're executing a loop of character population.\n");
    let seed = Math.ceil(Math.random() * 6);
    console.log("This is the set of characters already used: ", alreadyChosen, "\n");
    while (alreadyChosen.find(element => element === seed)) seed = Math.ceil(Math.random() * 6);
    alreadyChosen.push(seed);
    console.log("This is the chargen seed: ", seed, "\n");
    switch (seed) {
      case 1:
        investigators.push(rollNewAlexandra());
        break;
      case 2:
        investigators.push(rollNewCarlos());
        break;
      case 3:
        investigators.push(rollNewMarie());
        break;
      case 4:
        investigators.push(rollNewKim());
        break;
      case 5:
        investigators.push(rollNewTerry());
        break;
      case 6:
        investigators.push(rollNewRoss());
        break;
      default:
        return;
    }
  }
  console.log("Finished while loop to populate Investigators. Returning: ", investigators);
  return investigators;
}

module.exports = {
  populateInvestigators
};