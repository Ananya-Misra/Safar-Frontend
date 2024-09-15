import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    travelPlan: [],
    travelInfo: {}
};

const travelPlanSlice = createSlice({
    name: 'travelPlan',
    initialState,
    reducers: {
        setTravelPlan: (state, payload) => {
            state.travelPlan = payload.payload.travelPlan;
        },
        setTravelInfo: (state, payload) => {
            state.travelInfo = payload.payload.travelInfo;
        }
    },
});

export const { setTravelPlan, setTravelInfo } = travelPlanSlice.actions;
export default travelPlanSlice.reducer;
