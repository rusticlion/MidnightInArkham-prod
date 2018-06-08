import React, { Component } from 'react';
import { connect } from 'react-redux';

import { joinGame, fetchCurrentGame, fetchAllGames, buildGame } from '../actions';

class Matchmaker extends Component {
  state = {
    gameIdField: '',
    numberOfPlayersField: '',
  };

  async componentDidMount() {
    const uuID = localStorage.getItem('uuID');
    await this.props.fetchAllGames();
    console.log('Fetched fresh info from the DB!');
  }

  handleGameIdFieldChange = (event) => {
    this.setState({ gameIdField: event.target.value });
  }

  handleNumberOfPlayersFieldChange = event => {
    this.setState({ numberOfPlayersField: event.target.value })
  }

  handleJoinGameSubmit = async (event) => {
    event.preventDefault();
    await this.props.joinGame(this.state.gameIdField);
    await this.props.fetchCurrentGame(localStorage.getItem('uuID'));
  }

  handleBuildGameSubmit = async (event) => {
    event.preventDefault();
    await this.props.buildGame(this.state.numberOfPlayersField);
    await this.props.fetchAllGames();
  }

  render() {
    return <div className="Dashboard">
        <h2>Welcome to Arkham...</h2>
        <p>Create or join a game.</p>
        <form className="Form" onSubmit={this.handleJoinGameSubmit}>
          <input
            type="text"
            placeholder="Target game ID goes here:"
            value={this.state.gameIdField}
            onChange={this.handleGameIdFieldChange}
          />
          <button className="Form__submit" type="submit">Join Game</button>
        </form>
        <form className="Form" onSubmit={this.handleBuildGameSubmit}>
          <input
            type="text"
            placeholder="# of players"
            value={this.state.numberOfPlayersField}
            onChange={this.handleNumberOfPlayersFieldChange}
          />
          <button className="Form__submit" type="submit">Initialize a game</button>
        </form>
        {this.props.availableGames ? <div className="Available-Games">
          {
            this.props.availableGames.gameIds.map((gameId, i) => {
              if (gameId) return (
                <div key={i} onClick={async () => {
                  await this.props.joinGame(gameId);
                  await this.props.fetchCurrentGame();
                }}>
                  {gameId}
                </div>
              )
            })
          }
        </div> : null }
      </div>
  }
}

const mapStateToProps = state => {
  return {
    authed: state.authed,
    availableGames: state.availableGames,
  }
}

export default connect(mapStateToProps, { joinGame, fetchCurrentGame, fetchAllGames, buildGame})(Matchmaker);