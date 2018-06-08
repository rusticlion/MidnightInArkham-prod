const calculate_buffs = (game, investigator) => {
  investigator.speedBuffs = [];
  investigator.sneakBuffs = [];
  investigator.willBuffs = [];
  investigator.fightBuffs = [];
  investigator.loreBuffs = [];
  investigator.luckBuffs = [];
  console.log("This is the right equip: ", investigator.rightHand);
  console.log("This is the left equip: ", investigator.leftHand);

  if (investigator.rightHand.buffs) {
    investigator.rightHand.buffs.forEach(buff => {
      switch(buff.stat) {
        case 'Speed':
          investigator.speedBuffs.push(buff);
          break;
        case 'Sneak':
          investigator.sneakBuffs.push(buff);
          break;
        case 'Fight':
          investigator.fightBuffs.push(buff);
          break;
        case 'Will':
          investigator.willBuffs.push(buff);
          break;
        case 'Lore':
          investigator.loreBuffs.push(buff);
          break;
        case 'Luck':
          investigator.luckBuffs.push(buff);
          break;
      }
    });
  }

  if (investigator.leftHand.buffs) {
    investigator.leftHand.buffs.forEach(buff => {
      switch(buff.stat) {
        case 'Speed':
          investigator.speedBuffs.push(buff);
          break;
        case 'Sneak':
          investigator.sneakBuffs.push(buff);
          break;
        case 'Fight':
          investigator.fightBuffs.push(buff);
          break;
        case 'Will':
          investigator.willBuffs.push(buff);
          break;
        case 'Lore':
          investigator.loreBuffs.push(buff);
          break;
        case 'Luck':
          investigator.luckBuffs.push(buff);
          break;
      }
    });
  }
  
  return game;
}

module.exports = {
  calculate_buffs
}