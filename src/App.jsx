import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { filsContent } from './contents/apiContent'
import Layout from './Components/Layout'
import ContactMe from './pages/ContactMe'
import AboutMe from './pages/AboutMe'


const App = () => {
  const [isChange, setIsChange] = useState(true)
  const [isClicked, setIsClicked] = useState(true)
  return (
    <>
      <filsContent.Provider value={{ isChange, setIsChange, isClicked, setIsClicked }}>
        <div className={isChange ? "bg-black text-white" : "bg-white text-black"}>

          <BrowserRouter>
            <Routes>

              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactMe/>}/>
                <Route path='/about' element={<AboutMe/>}/>
              </Route>
            </Routes>

          </BrowserRouter>
        </div>
      </filsContent.Provider>

    </>

  )
}

export default App