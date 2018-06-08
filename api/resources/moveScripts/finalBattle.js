const { makeTest } = require("../makeTest");

const start_final_battle = (game, investigators) => {
  investigators.forEach(investigator => {
    investigator.clientState = {
      view_type: "BOSS_DESCRIPTION",
      narration: "The final battle begins...",
      threat: game.oldOne,
      contextButtons: [
        {
          text: "Cross your fingers",
          type: "ATTACK_BOSS",
          payload: "Attacking",
          player: investigator.playerId._id
        }
      ]
    };
  });
  return game;
};

const attack_boss = (game, boss, investigator) => {
  const fightRoll = makeTest(investigator, 'fight', boss.difficulty);
  if (fightRoll) {
    boss.doom -= fightRoll;
    investigator.clientState = {
      view_type: "BOSS_DESCRIPTION",
      narration: `You struck for ${fightRoll} damage! ${boss.name} only has ${boss.doom} health left!`,
      threat: boss,
      contextButtons: [
        {
          text: "Brace yourself",
          type: "BOSS_ATTACK",
          payload: "Defending",
          player: investigator.playerId._id
        }
      ]
    }
  }
  return game;
};

const boss_attack = (game, boss, investigator) => {
  investigator.stamina--;
  investigator.sanity--;
  investigator.clientState = {
    view_type: "BOSS_DESCRIPTION",
    narration: `${boss.name} struck at your body and mind! But it only has ${boss.doom} health left!`,
    threat: boss,
    contextButtons: [
      {
        text: "Cross your fingers",
        type: "ATTACK_BOSS",
        payload: "Attacking",
        player: investigator.playerId._id
      }
    ]
  }
  return game;
}

module.exports = {
  start_final_battle,
  attack_boss,
  boss_attack,
}