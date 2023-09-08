import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalsScrollBar from './HorizontalsScrollBar';

const SearchExcercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState('');
    const [bodyParts,setBodyParts]=useState([]);
    useEffect(()=>{
        const fetchExercisesData=async()=>{
            const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(['all',...bodyPartsData]);
        }
        fetchExercisesData();
    },[])
    const handleSearch= async()=>{
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
            const searchedExercises = exercisesData.filter(
              (item) => item.name.toLowerCase().includes(search)
                     || item.target.toLowerCase().includes(search)
                     || item.equipment.toLowerCase().includes(search)
                     || item.bodyPart.toLowerCase().includes(search),
            );
      
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
                
            setSearch('');
            setExercises(searchedExercises);
          }
        };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:"30px"}}} mb="50px" textAlign="center">
            Awesome Excercises You<br/>Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField height='76px' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} sx={{input:{fontWeight:'700px',border:'none',borderRadius:'4px'},width:{lg:'800px',xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'}} placeholder='Search Excercises' type='text'/>
            <Button onClick={handleSearch} className='search-btn' sx={{bgcolor:'#ff2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},height:'56px',position:'absolute',right:'0'}}>Search</Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalsScrollBar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyPart={true}/>
        </Box>
    </Stack>
  )
}

export default SearchExcercises;