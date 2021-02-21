import { combineReducers } from 'redux';
import room from './room.reducer';
import user from './user.reducer';

export default combineReducers({
    room,
    user
});