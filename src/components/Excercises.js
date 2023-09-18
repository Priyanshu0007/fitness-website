import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions } from '../utils/fetchData';
import { fetchExercises } from '../store/exercisesSlice';
import { useDispatch, useSelector } from 'react-redux';


const Excercises = () => {
    const exercises=useSelector(state=>state.exercises.exercises);
    const bodyPart=useSelector(state=>state.bodyPart.bodyPart);
    const dispatch=useDispatch();
    const [currentPage,setCurrentPage]=useState(1);
    const exercisesPerPage=12;
    const indexOfLastExercise=currentPage*exercisesPerPage;
    const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;
    const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise);
    const paginate=(e,val)=>{
        setCurrentPage(val);
        window.scrollTo({top:1800,behavior:'smooth'})
    }
    
    useEffect(()=>{
        if((bodyPart==='all')){dispatch(fetchExercises(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions));}
        else{dispatch(fetchExercises(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions));}
        setCurrentPage(1);
    },[bodyPart])
  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
        <Typography variant='h3' mb="46px">Showing Results</Typography>
        <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
            {
                currentExercises.map((exercise,index)=>(
                    <ExerciseCard key={index} exercise={exercise} />
                ))
            }
        </Stack>
        <Stack mt='100px' alignItems='center'>
            {exercises.length>exercisesPerPage &&(
                <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>
            )}
        </Stack>
    </Box>
  )
}

export default Excercises