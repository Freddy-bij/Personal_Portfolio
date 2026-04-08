import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { filsContent } from './contents/apiContent'
import Layout from './Components/Layout'




const App = () => {
  const [isChange, setIsChange] = useState(false)
  const [isClicked, setIsClicked] = useState(true)
  return (
    <>
      <filsContent.Provider value={{ isChange, setIsChange, isClicked, setIsClicked }}>
        <div className={isChange ? "min-h-screen bg-slate-950 text-slate-50" : "min-h-screen bg-slate-100 text-slate-900"}>

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
