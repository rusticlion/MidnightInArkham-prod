import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectInvestigator, fetchCurrentGame, fetchUserInfo, takeAction } from '../../actions';

class Investigator extends Component {

  async componentDidMount() {
    await this.props.fetchCurrentGame();
  }

  async handleCharSelect(job) {
    await this.props.selectInvestigator(this.props.currentPlayer, this.props.currentGame, job);
  }

  async changeSlider(targetSlider, targetValue) {
    const res = await this.props.takeAction(this.props.currentGame._id, {
      type: "CHANGE_SLIDER",
      payload: { targetSlider, targetValue },
      player: this.props.currentPlayer._id,
    });
    const updatedGame = await this.props.fetchCurrentGame();
  }

  async useItem(item) {
    const res = await this.props.takeAction(this.props.currentGame._id, {
      type: "USE_ITEM",
      payload: item,
      player: this.props.currentPlayer._id,
    });
    const updatedGame = await this.props.fetchCurrentGame();
  }

  async equipItem(item) {
    const res = await this.props.takeAction(this.props.currentGame._id, {
      type: "EQUIP_ITEM",
      payload: item,
      player: this.props.currentPlayer._id,
    });
    const updatedGame = await this.props.fetchCurrentGame();
  }

  async unequipItem(hand) {
    const res = await this.props.takeAction(this.props.currentGame._id, {
      type: "UNEQUIP_ITEM",
      payload: hand,
      player: this.props.currentPlayer._id,
    });
    const updatedGame = await this.props.fetchCurrentGame();
  }

  render() {
    console.log("Current investigator props are:", this.props);
    if (this.props.currentPlayer.currentJob === 'None') return (
      <div className="Matchmaker">
        {
          this.props.currentGame.game.investigators.map((investigator, i) => {
            return (
              <div
                className="investigator-minitile"
                onClick={async () => {
                  await this.handleCharSelect(investigator.job);
                  await this.props.fetchUserInfo();
                  await this.props.fetchCurrentGame();
                  }
                }
                key={i}
              >
                {investigator.name}
              </div>
            )
          })
        }
      </div>
    );
    else {
      const thisInvestigator = this.props.currentInvestigator;
      const statValues = {
        speed: thisInvestigator.minSpeed + thisInvestigator.topPointer + thisInvestigator.speedBuffs.reduce(((total, buff) => total + buff.val), 0),
        sneak: thisInvestigator.minSneak + 3 - thisInvestigator.topPointer + thisInvestigator.sneakBuffs.reduce(((total, buff) => total + buff.val), 0),
        will: thisInvestigator.minWill + thisInvestigator.midPointer + thisInvestigator.willBuffs.reduce(((total, buff) => total + buff.val), 0),
        fight: thisInvestigator.minFight + 3 - thisInvestigator.midPointer + thisInvestigator.fightBuffs.reduce(((total, buff) => total + buff.val), 0),
        lore: thisInvestigator.minLore + thisInvestigator.bottomPointer + thisInvestigator.loreBuffs.reduce(((total, buff) => total + buff.val), 0),
        luck: thisInvestigator.minLuck + 3 - thisInvestigator.bottomPointer + thisInvestigator.luckBuffs.reduce(((total, buff) => total + buff.val), 0),
      };
      return (
        <div className="Investigator-Sheet">
          <div className="Investigator-Sheet__header">
            <div className="Investigator-Sheet__stamina">
              {this.props.currentInvestigator.stamina}
            </div>
            <div className="Investigator-Sheet__plaque">
              <div className="Investigator-Sheet__name">
                {this.props.currentInvestigator.name}
              </div>
              <div className="Investigator-Sheet__job">
                The {this.props.currentInvestigator.job}
              </div>
            </div>
            <div className="Investigator-Sheet__sanity">
              {this.props.currentInvestigator.sanity}
            </div>
          </div>
          <div className="Investigator-Sheet__stats">
            <div className="Investigator-Sheet__statblock">
              <div className="Investigator-Sheet__stat">
                <div>Speed</div>
                <div>{statValues.speed}</div>
              </div>
              <div className="Investigator-Sheet__statbar">
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("top_slider", 3)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("top_slider", 2)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("top_slider", 1)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("top_slider", 0)}>
                    X
                  </div>
                </div>
              </div>
              <div className="Investigator-Sheet__stat">
                <div>Sneak</div>
                <div>{statValues.sneak}</div>
              </div>
            </div>
            <div className="Investigator-Sheet__statblock">
              <div className="Investigator-Sheet__stat">
                <div>Will</div>
                <div>{statValues.will}</div>
              </div>
              <div className="Investigator-Sheet__statbar">
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("mid_slider", 3)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("mid_slider", 2)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("mid_slider", 1)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("mid_slider", 0)}>
                    X
                  </div>
                </div>
              </div>
              <div className="Investigator-Sheet__stat">
                <div>Fight</div>
                <div>{statValues.fight}</div>
              </div>
            </div>
            <div className="Investigator-Sheet__statblock">
              <div className="Investigator-Sheet__stat">
                <div>Lore</div>
                <div>{statValues.lore}</div>
              </div>
              <div className="Investigator-Sheet__statbar">
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("bottom_slider", 3)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("bottom_slider", 2)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("bottom_slider", 1)}>
                    X
                  </div>
                </div>
                <div className="Investigator-Sheet__statbar-block">
                  <div onClick={async () => this.changeSlider("bottom_slider", 0)}>
                    X
                  </div>
                </div>
              </div>
              <div className="Investigator-Sheet__stat">
                <div>Luck</div>
                <div>{statValues.luck}</div>
              </div>
            </div>
          </div>
          <div className="Investigator-Sheet__resources">
            Focus: {this.props.currentInvestigator.focusPoints}/{this.props.currentInvestigator.focusMax+"\n"}
            Movement: {this.props.currentInvestigator.movePoints+"\n"}
            Money: {this.props.currentInvestigator.wallet+"\n"}
            Clues: {this.props.currentInvestigator.clues+"\n"}
            Trophy: {this.props.currentInvestigator.trophy+"\n"}
          </div>
          <div className="Investigator-Sheet__inventory-innates">
            {this.props.currentInvestigator.innates.map((innate, i) => {
              return (
                <div className="Investigator-Sheet__tile" key={i}>
                  {innate.name}
                </div>
              );
            })}
          </div>
          <div className="Investigator-Sheet__inventory-spells">
            {this.props.currentInvestigator.spells.map((spell, i) => {
              return (
                <div className="Investigator-Sheet__tile" key={i}>
                  {spell.name}
                </div>
              );
            })}
          </div>
          <div className="Investigator-Sheet__inventory-items">
            {this.props.currentInvestigator.bag.map((item, i) => {
              return (
                <div
                  className="Investigator-Sheet__tile"
                  key={i}
                  onClick={() => {
                    if (item.hands > 0) this.equipItem(item)
                    else this.useItem(item);
                  }}
                >
                  {item.name} {item.charges ? (item.charges) : null}
                </div>
              );
            })}
          </div>
          <div className="Investigator-Sheet__inventory-equipment">
            <div
              className="Investigator-Sheet__hand"
              onClick={() => this.unequipItem('right')}
            >
              {this.props.currentInvestigator.rightHand.name}
            </div>
            <div
              className="Investigator-Sheet__hand"
              onClick={() => this.unequipItem('left')}
            >
              {this.props.currentInvestigator.leftHand.name}
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  const uuID = localStorage.getItem('uuID');
  const currentInvestigator = state.currentGame.game.investigators.find(investigator => investigator.job === state.currentUser.currentJob);
  return {
    currentPlayer: state.currentUser,
    currentGame: state.currentGame,
    currentInvestigator: currentInvestigator,
  };
};

export default connect(mapStateToProps, { selectInvestigator, fetchCurrentGame, fetchUserInfo, takeAction })(Investigator);