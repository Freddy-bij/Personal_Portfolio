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
    <div className=" font-[sofia] pt-6">

      <nav className=" flex justify-between bg-gray-900 text-white items-center py-1   px-1 sm:w-[70%] sm:mx-auto  mx-4 rounded-[30px] shadow-xl   ">
        <div className="flex items-center">
          <div className="w-10 h-10 " >
            <img src={image} alt="" className="rounded-full w-full h-full" />
          </div>

          <Link to="/"> <h1 className=" text-xl font-semibold">Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span></h1></Link>
        </div>
        <div>
          <div className="flex items-center gap-1 ">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-2xl" onClick={() => setIsChange(prevIsChange => !prevIsChange)}> {isChange ? <IoIosSunny /> : <FaMoon />} </div>

            <div className="flex items-center bg-black text-white rounded-2xl gap-x-2 relative ">
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