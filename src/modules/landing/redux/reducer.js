import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  tokenData: [],
  tokenDataRequestState: RequestStates.init,
  theme:'dark'
};


export default (state = INITIAL_STATE, action) => { // eslint-disable-line
  switch (action.type) {
    case actionTypes.GET_TOKEN_DATA_LOADING:
      return {
        ...state,
        tokenDataRequestState: RequestStates.loading,
      };
    case actionTypes.GET_TOKEN_DATA_SUCCESS:
      return {
        ...state,
        tokenData: (action.payload && action.payload.data && action.payload.data.data) || [],
      };
      case actionTypes.TOGGLE_THEME:
        return {
          ...state,
          theme: action.payload,
        };
    default:
      return state;
  }
};
