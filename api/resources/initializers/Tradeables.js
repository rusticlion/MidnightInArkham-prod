const { commonItems, artifacts, spells } = require('../items/Decks');

const initializeTradeablesDecks = () => {
  return {
    commonDeck: commonItems,
    spellDeck: spells,
    artifactDeck: artifacts,
  }
}

module.exports = {
  initializeTradeablesDecks
};