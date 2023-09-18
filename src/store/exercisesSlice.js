import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});
const initialState={
    exercises:[],
    status:STATUSES.IDLE
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
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchExercises.pending,(state,action)=>{
            state.status=STATUSES.LOADING;
        })
        .addCase(fetchExercises.fulfilled,(state,action)=>{
            state.exercises=action.payload;
            state.status=STATUSES.IDLE;
        })
        .addCase(fetchExercises.rejected,(state,action)=>{
            state.status=STATUSES.ERROR;
        })
    }
});
export const fetchExercises=createAsyncThunk('exercises/fetch',
    async(url,options)=>{
        // console.log(url, options)
    const response=await fetch(url,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '10c09878e4msh622511cc7bf0ef7p1cd256jsn00055ed8fbf7',//process.env.REACT_APP_RAPID_API_KEY, 
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });
    const data = await response.json();
    return data;
})

export const {addExercises,clearExercises}=exercisesSlice.actions;
export default exercisesSlice.reducer;