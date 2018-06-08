const { LichStEncounters } = require('./encounterScripts/LichStreetEncounters');
const { investigate_location, process_encounter_choice } = require('./moveScripts/investigate_location');
const { end_turn } = require('./moveScripts/turnEndPhase');
const { change_slider } = require('./moveScripts/change_slider');
const { take_path } = require('./moveScripts/take_path');
const { spawn_monster_at_location } = require('./moveScripts/spawn_monster_at_location');
const { go_to_battle, attack_monster, evade_monster, resolve_attack, resolve_run } = require('./moveScripts/battle');
const { equip_item, unequip_item } = require('./moveScripts/inventory_management');
const { calculate_buffs } = require('./moveScripts/calculate_buffs');
const { use_item } = require('./moveScripts/use_item');
const { start_final_battle, attack_boss, boss_attack } = require('./moveScripts/finalBattle');

const parse = (gameState, move) => {
  console.log("The parser received move: ", move);
  const playerId = move.player;
  const newGameState = gameState;
  
  const thisInvestigator = newGameState.investigators.find(investigator => {
    if (investigator.playerId._id === playerId) return investigator;
  });
  switch (move.type) {
    case 'CREATE_GATE':
      newGameState.board.map.FrenchHillStreets.events = ['Gate to the Sunken City'];
      console.log("The path is open!: ", newGameState.board.map.FrenchHillStreets.events);
      console.log("Parser returned state: ", newGameState.board.map);
      return newGameState;
    case 'PLACE_CHARACTER':
      console.log("An investigation begins...");
      newGameState.board.map[thisInvestigator.home].investigators.push(thisInvestigator);
      return newGameState;
    case 'UPDATE_GAME':
      return newGameState;
    case 'BEGIN_GAME':
      newGameState.investigators.forEach(investigator => {
        investigator.location = newGameState.board.map.locations.find(location => {
          if (location.name === investigator.home) return location;
        }).name;
        newGameState.board.map.locations.forEach(location => {
          if (investigator.location === location.name) {
            location.investigators.push(investigator);
          };
        });

        investigator.clientState = {
          view_type: 'UPKEEP',
          contextButtons: [
            {
              text: 'Check the map',
              type: 'UPDATE_GAME',
              payload: investigator.playerId,
            },
            {
              text: 'Ready...',
              type: 'GO_TO_MOVEMENT_PHASE',
              payload: investigator.playerId,
            }
          ],
          narration: "Before you set out, be sure to activate any UPKEEP-only abilities or items. Also, your move score depends on your Speed at this time.",
        }
      });
      return newGameState;
    case 'GO_TO_MOVEMENT_PHASE':
      newGameState.investigators.forEach(investigator => {
        investigator.finishedTurn = false;
        investigator.movePoints = investigator.minSpeed + investigator.topPointer + thisInvestigator.speedBuffs.reduce(((total, buff) => total + buff.value), 0);
        investigator.focusPoints = investigator.focusMax;
        investigator.clientState = {
          view_type: 'MOVEMENT',
          contextButtons: newGameState.board.map.locations.find(location => {
            // console.log("Comparing:", location);
            // console.log("To:", investigator.location);
            if (location.name === investigator.location) return location;
          }).paths.map(path => {
            return {
              text: path.description,
              type: 'TAKE_PATH',
              payload: path.destination,
            }
          }),
          narration: newGameState.board.map.locations.find(location => location.name === investigator.location).description,
        }
      });
      return newGameState;
    case 'TAKE_PATH':
      return take_path(newGameState, move.payload, thisInvestigator);
    case 'CHANGE_SLIDER':
      return change_slider(newGameState, move.payload, thisInvestigator);
    case 'INVESTIGATE_LOCATION':
      return investigate_location(newGameState, move.payload, thisInvestigator);
    case 'PROCESS_ENCOUNTER_CHOICE':
      return process_encounter_choice(newGameState, move.payload, thisInvestigator);
    case 'GO_TO_END_PHASE':
      return end_turn(newGameState, move.payload, thisInvestigator);
    case 'SPAWN_MONSTER_AT_LOCATION':
      return spawn_monster_at_location(newGameState, move.payload);
    case 'GO_TO_BATTLE':
      return go_to_battle(newGameState, move.payload, thisInvestigator);
    case 'ATTACK_MONSTER':
      return attack_monster(newGameState, move.payload, thisInvestigator);
    case 'EVADE_MONSTER':
      return evade_monster(newGameState, move.payload, thisInvestigator);
    case 'RESOLVE_ATTACK':
      return resolve_attack(newGameState, move.payload, thisInvestigator);
    case 'RESOLVE_RUN':
      return resolve_run(newGameState, move.payload, thisInvestigator);
    case 'EQUIP_ITEM':
      const temp_equipping = equip_item(newGameState, move.payload, thisInvestigator);
      return calculate_buffs(temp_equipping, thisInvestigator);
    case 'UNEQUIP_ITEM':
      const temp_unequipping = unequip_item(newGameState, move.payload, thisInvestigator);
      return calculate_buffs(temp_unequipping, thisInvestigator);
    case 'CALCULATE_BUFFS':
      return calculate_buffs(newGameState, thisInvestigator);
    case 'USE_ITEM':
      return use_item(newGameState, move.payload, thisInvestigator);
    case 'GO_TO_FINAL_BATTLE':
      const { investigators } = newGameState;
      return start_final_battle(game, investigators);
    case 'BOSS_ATTACK':
      return boss_attack(newGameState, newGameState.oldOne, thisInvestigator);
    case 'ATTACK_BOSS':
      return attack_boss(newGameState, newGameState.oldOne, thisInvestigator);
  }
}

module.exports = {
  parse,
};