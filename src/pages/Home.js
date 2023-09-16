import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Excercises from '../components/Excercises'

const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExcercises/>
        <Excercises/>
    </Box>
  )
}

export default Home