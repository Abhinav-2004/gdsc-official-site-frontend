import React from 'react'
import Homepage from './Pages/Homepage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react';
const App = () => {
  return (<>
  <ChakraProvider>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
      
  </BrowserRouter>
  </ChakraProvider>
    </>)
}

export default App
