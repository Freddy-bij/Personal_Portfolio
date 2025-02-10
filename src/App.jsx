import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'

const App = () => {
  return (
     <div className='bg-black text-white'>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     
     </BrowserRouter>
     </div>
  )
}

export default App