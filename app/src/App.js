import React from 'react'
import Homepage from './Pages/Homepage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar'
const App = () => {
  return (<>
  <Navbar/>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
      
  </BrowserRouter>
    
    </>)
}

export default App
