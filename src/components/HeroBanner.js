import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from "../assets/images/banner.png"
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}} position="relative">
        <Typography color="#FF2625" fontWeight="26px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px">Sweat,Smile <br/> and Repeat</Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>Check out the most effective excercises</Typography>
        <Button sx={{backgroundColor:'#FF2625', padding:"10px"}} variant="contained" mb={3} color='error' href='#exercises'>Explore Excercises</Button>
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>Excercise</Typography>
        <img src={HeroBannerImage} alt='Banner' className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner