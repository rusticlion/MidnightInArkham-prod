import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { takeAction, fetchCurrentGame } from '../../actions/index';

class TextLog extends Component {

  async componentDidMount() {
    await this.props.fetchCurrentGame();
  }

  async handleContextBtnPress(type, payload) {
    console.log("About to make a request to the server using this playerId: ", this.props.currentPlayer._id);
    const res = await this.props.takeAction(this.props.currentGame._id, {
      type,
      payload,
      player: this.props.currentPlayer._id,
    });
    console.log("Response from server from pressing button: ", res);
  }

  render() {
    try {
      console.log("Received client state to render ", this.props.currentInvestigator.clientState);
      return (
        <div>
          {this.props.currentInvestigator ? 
            <div className="Choices-Window">
              <div className="Choices-Window__Narration">
                {this.props.currentInvestigator.clientState ? this.props.currentInvestigator.clientState.narration : "Loading..."}
              </div>
              {this.props.currentInvestigator.clientState ?
                <div className="Choices-Window__Context-Buttons">
                  {
                    this.props.currentInvestigator.clientState.contextButtons.map(contextButton => {
                      return (
                        <button onClick={async () => {
                          await this.handleContextBtnPress(contextButton.type, contextButton.payload);
                          await this.props.fetchCurrentGame();
                          }
                        }>
                          {contextButton.text}
                        </button>
                        );
                      })
                  }
                </div>
              : "Loading..."}
            </div>
          : null}
        </div>
      )
    } catch(e) {
      console.log("Text Log rendering error: ", e);
      return (
        <div className="error-log">
          Whoops! A nightgaunt flew off with some code you need. The error message should be in the console.
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

export default connect(mapStateToProps, { takeAction, fetchCurrentGame })(TextLog);