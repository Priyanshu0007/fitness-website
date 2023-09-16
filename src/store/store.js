import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from './exercisesSlice';
import bodyPartSlice from "./bodyPartSlice";
export const store =configureStore({
    reducer:{
        exercises:exercisesReducer,
        bodyPart:bodyPartSlice,
    }
})
export default store;