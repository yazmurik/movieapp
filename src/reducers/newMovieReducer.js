import {
  NEW_MOVIES_PENDING,
  NEW_MOVIES_FULFILLED,
  NEW_MOVIES_REJECTED,
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_REJECTED,
  UPDATE_MOVIES_PENDING,
  UPDATE_MOVIES_FULFILLED,
  UPDATE_MOVIES_REJECTED,
} from "../actions/newMovieActions";
const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //New MOvies
    case NEW_MOVIES_PENDING:
      return { ...state, fetching: true, fetched: false };
    case NEW_MOVIES_FULFILLED:
      return { ...state, movies: payload, fetching: false, fetched: true };
    case NEW_MOVIES_REJECTED:
      return { ...state, error: payload, fetching: false, fetched: true };
//FETCH moive
      case FETCH_MOVIES_PENDING:
        return { ...state, fetching: true, fetched: false };
      case FETCH_MOVIES_FULFILLED:
        return { ...state, movies: payload, fetching: false, fetched: true };
      case FETCH_MOVIES_REJECTED:
        return { ...state, error: payload, fetching: false, fetched: true };

        case UPDATE_MOVIES_PENDING:
        return { ...state, fetching: true, fetched: false };
      case UPDATE_MOVIES_FULFILLED:
        return { ...state, movies: payload, fetching: false, fetched: true };
      case UPDATE_MOVIES_REJECTED:
        return { ...state, error: payload, fetching: false, fetched: true };

    default:
      return state;
  }
};
