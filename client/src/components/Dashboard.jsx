import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { joinGame, fetchCurrentGame, fetchAllGames, buildGame } from '../actions';
import GameDisplay from './Game';
import Matchmaker from './Matchmaking';
//import Toolbar from './Toolbar';

class Dashboard extends Component {

  async componentDidMount() {
    const uuID = localStorage.getItem('uuID');
    await this.props.fetchCurrentGame(uuID);
    await this.props.fetchAllGames(uuID);
  }

  render(){
    console.log("At the time of this render, props on Dashboard are: ", this.props, '\n');
    if (!this.props.currentGame) {
      return (
        <div className="View">
          <div className="View__Toolbar">
            {/* <Toolbar /> */}
          </div>
          <div className="View__Main">
            <Matchmaker />
          </div>
        </div>
      )
    } else {
      return (
        <div className="View">
          <div className="View__Toolbar">
            {/* <Toolbar /> */}
          </div>
          <div className="View__Main">
            <GameDisplay />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    authed: state.authed,
    currentGame: state.currentGame,
  }
}

export default connect(mapStateToProps, { joinGame, fetchCurrentGame, fetchAllGames, buildGame })(Dashboard);