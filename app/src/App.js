import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react';
import Projects from './Pages/Projects/Projects';
import Events from './Pages/Events/Events';
const App = () => {
  return (<>
  <ChakraProvider>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
      
  </BrowserRouter>
  </ChakraProvider>
    </>)
}

export default App
