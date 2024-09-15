// store/rootReducer.js
import { combineReducers } from 'redux';
import travelPlanSlice from './slice/travelPlanSlice';

const rootReducer = combineReducers({
    travelPlan: travelPlanSlice
});

export default rootReducer;
