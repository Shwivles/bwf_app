import { combineReducers } from 'redux';
import tickReducer from './time_tick';
import workoutReducer from './workout';

const rootReducer = combineReducers({
    tickReducer,
    workoutReducer
});

export default rootReducer;