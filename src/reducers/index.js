import { combineReducers } from 'redux';
import moodReducer from './moodReducer';
import saveGameReducer from './saveGameReducer';

export default combineReducers({
  moodReducer,
  saveGameReducer
});
