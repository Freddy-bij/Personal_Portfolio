import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { filsContent } from './contents/apiContent'
import Layout from './Components/Layout'




const App = () => {
  const [isChange, setIsChange] = useState(true)
  const [isClicked, setIsClicked] = useState(true)
  return (
    <>
      <filsContent.Provider value={{ isChange, setIsChange, isClicked, setIsClicked }}>
        <div className={isChange ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}>

          <BrowserRouter>
            <Routes>

              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
              
            
              </Route>
            </Routes>

          </BrowserRouter>
        </div>
      </filsContent.Provider>

    </>

  )
}

export default App