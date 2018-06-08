const take_path = (game, move, investigator) => {
  if (investigator.movePoints) {
    investigator.location = game.board.map.locations[move].name;
    const locationRef = game.board.map.locations[move];
    console.log("New location: ", locationRef);
    investigator.movePoints--;
    if (!locationRef.monsters.length) {
      investigator.clientState = {
        view_type: "MOVEMENT",
        narration: game.board.map.locations.find(
          location => location.name === investigator.location
        ).description,
        contextButtons: game.board.map.locations
          .find(location => {
            if (location.name === investigator.location) return location;
          })
          .paths.map(path => {
            return {
              text: path.description,
              type: "TAKE_PATH",
              payload: path.destination
            };
          })
      };
    } else {
      const { parse } = require("../moveParser");
      const { allMonsters } = require("../monsterdex/allMonsters");
      const monsterName = locationRef.monsters[0];
      console.log("Monster to fight is:", monsterName);
      const monsterData = allMonsters.find(monster => {
        console.log("Check ", monster.name);
        console.log("Against ", monsterName);
        if (monster.name === monsterName) return monster;
      });
      console.log("About to encounter monster with data: ", monsterData);
      game = parse(game, {
        type: "GO_TO_BATTLE",
        player: investigator.playerId._id,
        payload: monsterData
      });
    }
  }
  return game;
};

module.exports = {
  take_path
};
