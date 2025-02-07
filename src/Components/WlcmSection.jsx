import React from 'react'
import NavBar from './NavBar'
import Description from './Description'

const WlcmSection = () => {
  return (
    <div className='bg-[url("./public/images/bac-remove.png")] h-screen w-full bg-no-repeat bg-cover py-6 bg-black  text-white '>
      <NavBar />
      <Description />

    </div>
  )
}

export default WlcmSection