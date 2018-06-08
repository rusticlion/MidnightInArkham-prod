import React, { Component } from 'react';
import { connect } from 'react-redux';
import Investigator from './GamePanels/Investigator.jsx';
import TextLog from './GamePanels/TextLog.jsx';
import Threat from './GamePanels/Threat.jsx';

class GameDisplay extends Component {
  render() {
    console.log("This is in the Game component's state:", this.props.currentGame);
    return (
      <div>
        {this.props.currentGame ? (
          <div className="Game-Container">
            <div className="Investigator-Tile"><Investigator /></div>
            <div className="TextLog-Tile"><TextLog /></div>
            <div className="Threat-Tile"><Threat /></div>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentGame: state.currentGame,
  };
};

export default connect(mapStateToProps)(GameDisplay);