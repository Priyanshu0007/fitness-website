import React from 'react'
import './App.css'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Provider } from 'react-redux';
import store from './store/store'
const App = () => {
  return (
    <Provider store={store}>
    <Box width="400px" sx={{width:{x1:'1488px'}}} m='auto'>
        <ScrollToTop />
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
    </Provider>
  )
}

export default App