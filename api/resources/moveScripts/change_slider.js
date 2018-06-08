const change_slider = (game, move, investigator) => {
  if (investigator.focusPoints) {
    investigator.focusPoints--;
    if (move.targetSlider === 'top_slider') {
      investigator.topPointer = move.targetValue;
    } else if (move.targetSlider === 'mid_slider') {
      investigator.midPointer = move.targetValue;
    } else if (move.targetSlider === 'bottom_slider') {
      investigator.bottomPointer = move.targetValue;
    }
  }
  return game;
}

module.exports = {
  change_slider
}