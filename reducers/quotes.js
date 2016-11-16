import {
  QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE
} from '../actions';

// The quotes reducer
const initialState = {
    isFetching: false,
    quote: '',
    authenticated: false
};

export default function quotes(state = initialState, action) {
  switch (action.type) {
    case QUOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case QUOTE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        quote: action.response,
        authenticated: action.authenticated || false
      })
    case QUOTE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}
