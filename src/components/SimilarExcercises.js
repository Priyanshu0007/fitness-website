import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalsScrollBar from './HorizontalsScrollBar';
import Loader from'../components/Loader';

const SimilarExcercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
        <Typography variant='h3' mb={5}>
            Exercises that target the same muscle group
        </Typography>
        <Stack direction='row' sx={{p:'2',position:'relative'}}>
            {targetMuscleExercises.length ?
            <HorizontalsScrollBar data={targetMuscleExercises}/>:<Loader/>
        }
        </Stack>
        <Typography variant='h3' mb={5}>
            Exercises that use the same equipment
        </Typography>
        <Stack direction='row' sx={{p:'2',position:'relative'}}>
            {targetMuscleExercises.length ?
            <HorizontalsScrollBar data={equipmentExercises}/>:<Loader/>
        }
        </Stack>
    </Box>
  )
}

export default SimilarExcercises