import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Footer1 from "./Components/Footer/Footer1"
import { ChakraProvider } from '@chakra-ui/react';
import Projects from './Pages/Projects/Projects';
import Events from './Pages/Events/Events';
import Teams, { Team } from './Pages/Teams/Team';
import AboutUS from './Pages/AboutUs/AboutUs';
import Faq from './Pages/Faq/Faq';
import Newsletter from './Pages/Newsletter/Newsletter';

const App = () => {
  return (<>
  <ChakraProvider>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/about' element={<AboutUS/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/newsletter' element={<Newsletter/>}/>
    </Routes>
  <Footer1 />    
  </BrowserRouter>
  </ChakraProvider>
    </>)
}

export default App
