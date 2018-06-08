const { skills, allies } = require('../items/Decks');

const initializeUntradeablesDecks = () => {
  return {
    skillDeck: skills,
    allyDeck: allies,
  }
}

module.exports = {
  initializeUntradeablesDecks
};