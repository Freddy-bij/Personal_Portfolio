import { useContext } from "react"
import image from "../images/imag3.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoIosSunny } from "react-icons/io"
import { filsContent } from "../contents/apiContent"
import { FaMoon } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router"

const NavBar = () => {
  const { isChange, setIsChange, isClicked, setIsClicked } = useContext(filsContent)
  return (
    <div className=" font-[sofia] pt-6 sticky top-0 z-50">

      <nav className=" flex justify-between bg-gray-900/80 text-white items-center py-1   px-1 sm:w-[70%] sm:mx-auto  mx-4 rounded-[30px]    ">
        <div className="flex items-center">
          <div className="w-10 h-10 " >
            <img src={image} alt="" className="rounded-full w-full h-full" />
          </div>

          <Link to="/"> <h1 className=" text-xl font-semibold">Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span></h1></Link>
        </div>
        <div>
          <div className="flex items-center gap-x-2 ">


            <div>
              <div className=" text-white font-bold hidden md:flex md:items-center md:gap-3">

                <Link to="/">
                <button className=" hover:text-[#ff3f34] px-2 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] ... ">
                  Home
                </button>
                </Link>

                <Link to="about">
                <button className=" hover:text-[#ff3f34] px-2 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] ...">
                  About Me
                </button>
                </Link>
                <Link to="/">
                <button className=" hover:text-[#ff3f34] px-2 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] ...">
                  Skills
                </button></Link>

                <Link to="contact">
                <button className=" hover:text-[#ff3f34] px-2 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] ...">
                  Contact Me
                </button></Link>

              </div>
            </div>
            <div className={`${isChange ? "bg-black text-white" : "bg-white text-black"} w-8 h-8 flex items-center justify-center rounded-full text-2xl`}
              onClick={() => setIsChange(prevIsChange => !prevIsChange)}>
              {isChange ? <IoIosSunny /> : <FaMoon />}
            </div>

            <div className="flex items-center bg-black text-white rounded-2xl gap-x-2 relative md:hidden flex ">
              <h1 className="pl-2 font-semibold">Menu</h1>
              <div className="w-8 h-8 bg-[#ff3f34] flex justify-center items-center rounded-full font-semibold text-white text-2xl" onClick={() => setIsClicked(prevIsClicked => !prevIsClicked)} >{isClicked ? <HiOutlineMenuAlt3 /> : <RxCross2 />}</div>
            </div>
          </div>
          {!isClicked && (
            <ul className=" text-white font-bold  absolute  top-20  bg-gray-900 rounded-sm p-2">
              <Link to="/"><li className="hover:text-[#ff3f34]">Home</li></Link>
              <Link to="/about"><li className="hover:text-[#ff3f34]">About Me</li></Link>
              <Link to="/"><li className="hover:text-[#ff3f34]">Skills</li></Link>
              <Link to="/contact" target="_blank"><li className="hover:text-[#ff3f34]">Contact Me</li></Link>
              
              

              
            </ul>
          )
          }
        </div>
      </nav>
    </div>
  )
}

export default NavBar