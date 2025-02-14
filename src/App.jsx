import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { filsContent } from './contents/apiContent'

const App = () => {
  const [isChange, setIsChange] = useState(true)
  const [isClicked, setIsClicked] = useState(true)
  return (
    <>
      <filsContent.Provider value={{ isChange, setIsChange, isClicked, setIsClicked }}>
        <div className={isChange ? "bg-black text-white" : "bg-white text-black"}>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>

          </BrowserRouter>
        </div>
      </filsContent.Provider>

    </>

  )
}

export default App