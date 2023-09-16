import { createSlice } from "@reduxjs/toolkit";
const initialState={
    exercises:[]
};

export const exercisesSlice=createSlice({
    name:'exercises',
    initialState,
    reducers:{
        addExercises(state=initialState,action){
            state.exercises=action.payload;
        },
        clearExercises(state,action){
            state=[];
        }
    }
});
export const {addExercises,clearExercises}=exercisesSlice.actions;
export default exercisesSlice.reducer;