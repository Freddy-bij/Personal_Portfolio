import { useContext } from "react"
import image from "../images/imag3.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoIosSunny } from "react-icons/io"
import { filsContent } from "../contents/apiContent"
import { FaMoon } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"

const NavBar = () => {
  const { isChange, setIsChange, isClicked, setIsClicked } = useContext(filsContent)
  return (
    <div className="bg-balck font-[sofia] py-6">

      <nav className=" flex justify-between bg-gray-500 text-black items-center py-1  px-1 sm:w-[70%] sm:mx-auto  mx-10 rounded-[30px] shadow-xl   ">
        <div className="flex items-center">
          <div className="w-10 h-10 " >
            <img src={image} alt="" className="rounded-full w-full h-full" />
          </div>

          <h1 className=" text-xl font-semibold">Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span></h1>
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
            <ul className=" text-[#ff3f34] font-bold  absolute  top-20  bg-gray-500 rounded-sm p-2">
              <li className="hover:text-white">About Me</li>
              <li className="hover:text-white">Skills</li>
              <li className="hover:text-white">Contact Me</li>
            </ul>
          )
          }
        </div>
      </nav>
    </div>
  )
}

export default NavBar