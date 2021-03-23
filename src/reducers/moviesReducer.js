import {FETCHED_MOVIES} from "../actions/movieActions"
const initialState = {
  fetching:false,
  fetched:false,
  movies:[],
  error: {}, 
}


export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCHED_MOVIES:
    return { ...state, movies:payload }

  default:
    return state
  }
}
