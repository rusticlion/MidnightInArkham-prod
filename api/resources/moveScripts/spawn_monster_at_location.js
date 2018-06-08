const { allMonsters } = require('../monsterdex/allMonsters.js');

const spawn_monster_at_location = (game, options) => {
  const { locationToSpawn, monster } = options;
  const targetLocation = game.board.map.locations.find(location => {
    console.log("Comparing ", location.name);
    console.log("To ", locationToSpawn.name);
    if (location.name === locationToSpawn.name) return location;
  });
  const monsterToSpawn = monster ? allMonsters.find(aMonster => aMonster.name === monster) : targetLocation.wildMonsters[Math.floor(Math.random()*targetLocation.wildMonsters.length)];
  console.log("About to add this monster:", monsterToSpawn);
  console.log("To this location: ", targetLocation.name);
  targetLocation.monsters.push(monsterToSpawn);
  
  return game;
}

module.exports = {
  spawn_monster_at_location,
}