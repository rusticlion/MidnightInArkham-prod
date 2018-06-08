import { LOGIN_SUCCESS, LOGIN_FAILURE , GAME_RETRIEVED, ALL_GAMES_RETRIEVED, USER_PROF_RETRIEVED } from "../actions";

const initialState = {
  authed: false,
};

export default (state = initialState, action) => {
  console.log("Reducer received: ", action);
  switch (action.type) {
    case LOGIN_SUCCESS:
    console.log("Got user info from logging in: \n", action.payload, "\n");
      return {
        ...state,
        authed: true,
        currentUser: action.payload.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    case USER_PROF_RETRIEVED:
      return {
        ...state,
        currentUser: action.payload.currentUser.data,
      }
    case GAME_RETRIEVED:
    console.log(action.payload);
      return {
        ...state,
        currentGame: action.payload.currentGame.data,
      };
    case ALL_GAMES_RETRIEVED:
      return {
        ...state,
        availableGames: action.payload,
      }
    default:
      return state;
  }
}