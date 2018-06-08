import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { takeAction, fetchCurrentGame } from '../../actions/index';

class Threat extends Component {

  async handleInvestigateBtnPress() {
    const res = await this.props.takeAction(this.props.currentGame._id, {
      type: 'INVESTIGATE_LOCATION',
      payload: null,
      player: this.props.currentPlayer._id,
    });
    console.log("Response from server from pressing button: ", res);
    this.props.fetchCurrentGame();
  }
  
  render() {
    console.log(this.props.currentGame.game);
    const clientState = this.props.currentInvestigator ? this.props.currentGame.game.investigators.find(investigator => {
      console.log("About to compare:", investigator.job);
      console.log("To:", this.props.currentInvestigator.job);
      if (investigator.job === this.props.currentInvestigator.job) {
        console.log("Found this client's state:", investigator.clientState);
        return investigator;
      };
    }).clientState : null;
    if (!clientState) {
      return (
        <div>
          No client state yet provided.
        </div>
      )
    } 
    console.log("About to use this clientState to render the Threat panel:", clientState.view_type);
    switch(clientState.view_type) {
      case 'SETUP':
        return (
          <div>
            {this.props.currentGame.game.oldOne.name}
          </div>
        );
      case 'UPKEEP':
        return (
          <div>
            {this.props.currentInvestigator.location}
          </div>
        );
      case 'MOVEMENT':
        return (
          <div className="Threat-Sheet">
            <div className="Threat-Sheet__Location-Name">
              {this.props.currentInvestigator.location}
            </div>
            <div className="Threat-Sheet__Teammates-Present">
              {
                this.props.currentGame.game.investigators.map(investigator => {
                  if (investigator.location === this.props.currentInvestigator.location) return <div className="Threat-Sheet__Teammate">{investigator.name}</div>
                })
              }
            </div>
            <div className="Threat-Sheet__Investigate-Location-Btn">
              <button onClick={async () => {
                await this.handleInvestigateBtnPress();
              }}>
                Investigate!
              </button>
            </div>
          </div>
        );
      case 'ENEMY_DESCRIPTION':
        console.log("About to load in enemy encounter", clientState.threat);
        return (
          <div className="Threat-Sheet">
            <div className="Threat-Sheet__Monster-Name">
              {clientState.threat.name}
            </div>
            <div className="Threat-Sheet__Monster-Combat-Damage">
              Combat Damage: {clientState.threat.combatDamage}
            </div>
            <div className="Threat-Sheet__Monster-Combat-Rating">
              Combat Difficulty: {clientState.threat.combatRating}
            </div>
            <div className="Threat-Sheet__Monster-Toughness">
              Toughness: {clientState.threat.toughness}
            </div>
            <div className="Threat-Sheet__Monster-Awareness">
              Awareness: {clientState.threat.awareness}
            </div>
            <div className="Threat-Sheet__Monster-Horror-Damage">
              Horror Damage: {clientState.threat.horrorDamage}
            </div>
            <div className="Threat-Sheet__Monster-Horror-Rating">
              Horror Difficulty: {clientState.threat.horrorRating}
            </div>
          </div>
        )
      case 'ATTACK_ATTEMPT':
        console.log("About to load in enemy encounter", clientState.threat);
        return (
          <div className="Threat-Sheet">
            <div className="Threat-Sheet__Monster-Name">
              {clientState.threat.name}
            </div>
            <div className="Threat-Sheet__Monster-Combat-Damage">
              Combat Damage: {clientState.threat.combatDamage}
            </div>
            <div className="Threat-Sheet__Monster-Combat-Rating">
              Combat Difficulty: {clientState.threat.combatRating}
            </div>
            <div className="Threat-Sheet__Monster-Toughness">
              Toughness: {clientState.threat.toughness}
            </div>
            <div className="Threat-Sheet__Monster-Awareness">
              Awareness: {clientState.threat.awareness}
            </div>
            <div className="Threat-Sheet__Monster-Horror-Damage">
              Horror Damage: {clientState.threat.horrorDamage}
            </div>
            <div className="Threat-Sheet__Monster-Horror-Rating">
              Horror Difficulty: {clientState.threat.horrorRating}
            </div>
          </div>
        )
      case 'EVADE_ATTEMPT':
        console.log("About to load in enemy encounter", clientState.threat);
        return (
          <div className="Threat-Sheet">
            <div className="Threat-Sheet__Monster-Name">
              {clientState.threat.name}
            </div>
            <div className="Threat-Sheet__Monster-Combat-Damage">
              Combat Damage: {clientState.threat.combatDamage}
            </div>
            <div className="Threat-Sheet__Monster-Combat-Rating">
              Combat Difficulty: {clientState.threat.combatRating}
            </div>
            <div className="Threat-Sheet__Monster-Toughness">
              Toughness: {clientState.threat.toughness}
            </div>
            <div className="Threat-Sheet__Monster-Awareness">
              Awareness: {clientState.threat.awareness}
            </div>
            <div className="Threat-Sheet__Monster-Horror-Damage">
              Horror Damage: {clientState.threat.horrorDamage}
            </div>
            <div className="Threat-Sheet__Monster-Horror-Rating">
              Horror Difficulty: {clientState.threat.horrorRating}
            </div>
          </div>
        )
      default:
        return (
          <div>
            No client view found for {clientState.view_type}.
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  console.log("The entire state received was: \n", state, "\n");
  const currentInvestigator = state.currentGame.game.investigators.find(investigator => investigator.job === state.currentUser.currentJob);
  return {
    currentPlayer: state.currentUser,
    currentGame: state.currentGame,
    currentInvestigator: currentInvestigator,
  };
};

export default connect(mapStateToProps, { fetchCurrentGame, takeAction })(Threat);