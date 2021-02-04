import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import general from './generalReducer';

export default combineReducers({
  form,
  general,
});
