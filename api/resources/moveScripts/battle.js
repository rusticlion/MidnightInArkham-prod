const { makeTest } = require('../makeTest');

const go_to_battle = (game, monster, investigator) => {
  investigator.clientState = {
    view_type: 'ENEMY_DESCRIPTION',
    narration: monster.narration,
    threat: monster,
    contextButtons: [
      {
        text: "Attack!",
        type: "ATTACK_MONSTER",
        payload: monster,
        player: investigator.playerId._id
      },
      {
        text: "Escape!",
        type: "EVADE_MONSTER",
        payload: monster,
        player: investigator.playerId._id,
      }
    ]
  }
  return game;
}

const attack_monster = (game, monster, investigator) => {
  investigator.movePoints = 0;
  if (!makeTest(investigator, 'will', monster.horrorRating)) {
    investigator.sanity -= monster.horrorDamage;
    monster.narration += "\nIt's horrifying.";
  }
  investigator.clientState = {
    view_type: 'ATTACK_ATTEMPT',
    narration: monster.narration,
    threat: monster,
    contextButtons: [
      {
        text: "Attack!",
        type: 'RESOLVE_ATTACK',
        payload: monster,
      },
      {
        text: "Run!",
        type: 'RESOLVE_EVADE',
        payload: monster,
      }
    ]
  }
  return game;
}

const evade_monster = (game, monster, investigator) => {
  investigator.clientState = {
    view_type: 'EVADE_ATTEMPT',
    narration: monster.narration,
    threat: monster,
    contextButtons: [
      {
        text: "Evade!",
        type: 'RESOLVE_RUN',
        payload: monster,
      }
    ]
  }
  return game;
}

const resolve_attack = (game, monster, investigator) => {
  if (makeTest(investigator, 'fight', monster.combatRating)) {
    const locationOfBattle = game.board.map.locations.find(location => location.name === investigator.location);
    const indexOfMonster = locationOfBattle.monsters.find((monsterAtLocation, i) => {
      if (monsterAtLocation.name === monster.name) return i;
    });
    locationOfBattle.monsters = locationOfBattle.monsters.filter((monsterAtLocation) => monsterAtLocation !== monster.name);
    console.log("Defeated this monster: ", monster);
    investigator.trophy += monster.trophy;
    investigator.clientState = {
      view_type: "MOVEMENT",
      threat: monster,
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
        }),
      narration: game.board.map.locations.find(
        location => location.name === investigator.location
      ).description+"\nIts dead."
    }
  } else {
    investigator.stamina -= monster.combatDamage;
    investigator.clientState = {
      view_type: 'ATTACK_ATTEMPT',
      narration: monster.narration + "\nIt lands a blow.",
      threat: monster,
      contextButtons: [
        {
          text: "Attack!",
          type: 'RESOLVE_ATTACK',
          payload: monster,
        },
        {
          text: "Run!",
          type: 'RESOLVE_RUN',
          payload: monster,
        }
      ]
    }
  }
  return game;
}

const resolve_run = (game, monster, investigator) => {
  if (makeTest(investigator, 'sneak', monster.awareness)) {
    investigator.movePoints = 1;
    investigator.clientState = {
      view_type: "MOVEMENT",
      threat: monster,
      contextButtons: game.board.map.locations
        .find(location => {
          if (location.name === investigator.location) return location;
        })
        .paths.map(path => {
          return {
            text: path.description,
            type: "TAKE_PATH",
            payload: path.destination,
          };
        }),
      narration: game.board.map.locations.find(
        location => location.name === investigator.location
      ).description + "\nYou've lost it for now.",
    }
  } else {
    investigator.stamina -= monster.combatDamage;
    investigator.clientState = {
      view_type: 'ATTACK_ATTEMPT',
      narration: monster.narration + "\nIt lands a blow.",
      threat: monster,
      contextButtons: [
        {
          text: "Attack!",
          type: 'RESOLVE_ATTACK',
          payload: monster,
        },
        {
          text: "Run!",
          type: 'RESOLVE_RUN',
          payload: monster,
        }
      ]
    }
  }
  return game;
}


module.exports = {
  go_to_battle,
  attack_monster,
  evade_monster,
  resolve_attack,
  resolve_run,
}