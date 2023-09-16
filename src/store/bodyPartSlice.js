import { createSlice } from "@reduxjs/toolkit";
const initialState={
    bodyPart:'all'
};

export const bodyPartSlice=createSlice({
    name:'bodyPart',
    initialState,
    reducers:{
        addBodyPart(state=initialState,action){
            state.bodyPart=action.payload;
        }
    }
});
export const {addBodyPart}=bodyPartSlice.actions;
export default bodyPartSlice.reducer;