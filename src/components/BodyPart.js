import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'
import { addBodyPart } from '../store/bodyPartSlice'
import { useDispatch, useSelector } from 'react-redux'

const BodyPart = ({item}) => {
  const dispatch=useDispatch();
  const bodyPart=useSelector(state=>state.bodyPart.bodyPart);
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card' 
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' 
    }}
    onClick={()=>{
      dispatch(addBodyPart(item));
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
    >        
        <img src={Icon} alt='dumbbell' style={{width:'40px',height:'40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart