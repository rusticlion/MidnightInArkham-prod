const equip_item = (game, item, investigator) => {
  if (item.hands === 2) {
    if (investigator.rightHand !== 'None') investigator.bag.push(investigator.rightHand);
    investigator.rightHand = item;
    
    if ((investigator.leftHand !== 'None') && (investigator.leftHand.name !== '(Two-Handing)')) investigator.bag.push(investigator.leftHand)
    investigator.leftHand = { name: '(Two-Handing)'};
  } else if (item.hands === 1) {
    if (investigator.rightHand === 'None') {
      investigator.rightHand = item;
    } else if (investigator.leftHand === 'None') {
      investigator.leftHand = item;
    } else if (investigator.leftHand.name = '(Two-Handing)') {
      investigator.bag.push(investigator.rightHand);
      investigator.rightHand = item;
      investigator.leftHand = 'None';
    } else {
      investigator.bag.push(investigator.rightHand);
      investigator.rightHand = item;
    }
  } else {
    investigator.equippedTrinkets.push(item);
  }
  let index;
  investigator.bag.find((searchItem, i) => {
    console.log("Comparing ", searchItem.name);
    console.log("To ", item.name);
    if (searchItem.name === item.name) {
      console.log("Found that item in the bag at index: ", i);
      index = i;
    };
  });
  console.log("This is the index of item to pull from bag: ", index);
  console.log("About to remove this item from bag to equip it: ", investigator.bag[index]);
  investigator.bag = investigator.bag.slice(0,index).concat(investigator.bag.slice(index+1));
  return game;
}

const unequip_item = (game, hand, investigator) => {
  if (hand === 'right') {
    investigator.bag.push(investigator.rightHand);
    if (investigator.rightHand.hands === 2) investigator.leftHand = 'None';
    investigator.rightHand = 'None';
  } else if (hand === 'left' && investigator.leftHand.name !== '(Two-Handing)') {
    investigator.bag.push(investigator.leftHand);
    investigator.leftHand = 'None';
  }
  return game;
}

module.exports = {
  equip_item,
  unequip_item
}