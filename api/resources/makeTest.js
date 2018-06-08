const makeTest = (investigator, stat, difficulty = 0, tags = []) => {
  let value;
  switch(stat) {
    case 'speed':
      value = investigator.minSpeed + investigator.topPointer + investigator.speedBuffs.reduce(((total, buff) => total + buff.val), 0);
      break;
    case 'sneak':
      value = investigator.minSneak + 3 - investigator.topPointer + investigator.sneakBuffs.reduce(((total, buff) => total + buff.val), 0);
      break;
    case 'will':
      value = investigator.minWill + investigator.midPointer + investigator.willBuffs.reduce(((total, buff) => total + buff.val), 0);
      break;
    case 'fight':
      value = investigator.minFight + 3 - investigator.midPointer + investigator.fightBuffs.reduce(((total, buff) => total + buff.val), 0);
      break;
    case 'lore':
      value = investigator.minLore + investigator.bottomPointer + investigator.loreBuffs.reduce(((total, buff) => total + buff.val), 0);
      break;
    case 'luck':
      value = investigator.minLuck + 3 - investigator.bottomPointer + investigator.luckBuffs.reduce(((total, buff) => total + buff.val), 0);
      break;
    default:
      console.log("Making default roll. This should be null - otherwise, it is malformed: ", stat);
      value = 1;
      break;
  }

  let bar = 0.65;
  if (investigator.tags.find(tag => tag === "Blessed")) bar = 0.5;
  if (investigator.tags.find(tag => tag === "Cursed")) bar = 0.83;
  
  let successes = 0;
  for (let i = 0; i < value + difficulty; i++) {
    if (Math.random() > bar) successes++;
  }
  console.log(`Rolled ${successes} succeses with score of ${value}`);
  return successes;
}

const spliceOutByName = (arr, target) => {
  console.log("About to remove ", target, " from a bag.");
  let indexToPull;
  arr.forEach((el, i) => {
    if (el.name === target) indexToPull = i;
  })
  console.log("About to pull ", target, " from ", indexToPull);
  if (indexToPull) arr.splice(indexToPull, 1);
}

module.exports = {
  makeTest,
  spliceOutByName
}