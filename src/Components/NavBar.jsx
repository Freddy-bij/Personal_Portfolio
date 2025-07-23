
import { useContext } from "react"
import image from "../images/freddy prof.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoIosSunny } from "react-icons/io"
import { filsContent } from "../contents/apiContent"
import { FaMoon } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import { Link, useNavigate, useLocation } from "react-router"

const NavBar = () => {
  const { isChange, setIsChange, isClicked, setIsClicked } = useContext(filsContent)
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleSkillsClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const skillsSection = document.getElementById('skills')
      if (skillsSection) {
        skillsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      
      navigate('/')
      setTimeout(() => {
        const skillsSection = document.getElementById('skills')
        if (skillsSection) {
          skillsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }
  
  return (
    <div className="font-[sofia] pt-6 sticky top-0 z-50">
      <nav className="flex justify-between bg-gray-900/80 backdrop-blur-md text-white items-center py-1 px-1 sm:w-[70%] sm:mx-auto mx-4 rounded-[30px] shadow-lg">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img src={image} alt="" className="rounded-full w-full h-full transition-transform duration-300 hover:scale-110" />
          </div>
          <Link to="/">
            <h1 className="text-xl font-semibold hover:text-[#ff3f34] transition-colors duration-300">
              Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span>
            </h1>
          </Link>
        </div>
        
        <div className="relative">
          <div className="flex items-center gap-x-2">
            <div className="text-white font-bold hidden md:flex md:items-center md:gap-3">
              <Link to="/">
                <button className="hover:text-[#ff3f34] px-2 py-1 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] transition-all duration-300 hover:scale-105">
                  Home
                </button>
              </Link>
              <Link to="about">
                <button className="hover:text-[#ff3f34] px-2 py-1 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] transition-all duration-300 hover:scale-105">
                  About Me
                </button>
              </Link>
              <button 
                onClick={handleSkillsClick}
                className="hover:text-[#ff3f34] px-2 py-1 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] transition-all duration-300 hover:scale-105"
              >
                Skills
              </button>
              <a href="#contact">
                <button className="hover:text-[#ff3f34] px-2 py-1 focus:outline-2 rounded-md focus:outline-offset-2 focus:outline-[#ff3f34] active:text-[#ff3f34] transition-all duration-300 hover:scale-105">
                  Contact Me
                </button>
              </a>
            </div>
            
            <div 
              className={`${isChange ? "bg-black text-white" : "bg-white text-black"} w-8 h-8 flex items-center justify-center rounded-full text-2xl cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95`}
              onClick={() => setIsChange(prevIsChange => !prevIsChange)}
            >
              <div className="transition-transform duration-500 ease-in-out">
                {isChange ? <IoIosSunny className="animate-pulse" /> : <FaMoon />}
              </div>
            </div>
            
            <div className="flex items-center bg-black text-white rounded-2xl gap-x-2 relative md:hidden overflow-hidden">
              <h1 className="pl-2 font-semibold transition-all duration-300">Menu</h1>
              <div 
                className="w-8 h-8 bg-[#ff3f34] flex justify-center items-center rounded-full font-semibold text-white text-2xl cursor-pointer transition-all duration-300 hover:bg-[#ff2f24] active:scale-95" 
                onClick={() => setIsClicked(prevIsClicked => !prevIsClicked)}
              >
                <div className="transition-transform duration-300 ease-in-out">
                  {isClicked ? (
                    <HiOutlineMenuAlt3 className="transform rotate-0" />
                  ) : (
                    <RxCross2 className="transform rotate-180" />
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`
            md:hidden absolute top-11 right-0 w-48
            transition-all duration-500 ease-out
            ${!isClicked 
              ? 'opacity-100 visible translate-y-0 scale-100' 
              : 'opacity-0 invisible -translate-y-4 scale-95'
            }
          `}>
            <div className="bg-gray-900/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-gray-700/50">
              <ul className="text-white font-bold space-y-3">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <Link 
                    to="/" 
                    className="block hover:text-[#ff3f34] py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                    onClick={() => setIsClicked(true)}
                  >
                    Home
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <Link 
                    to="/about" 
                    className="block hover:text-[#ff3f34] py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                    onClick={() => setIsClicked(true)}
                  >
                    About Me
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <button 
                    onClick={(e) => {
                      handleSkillsClick(e)
                      setIsClicked(true)
                    }}
                    className="block w-full text-left hover:text-[#ff3f34] py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                  >
                    Skills
                  </button>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="#contact" 
                    className="block hover:text-[#ff3f34] py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                    onClick={() => setIsClicked(true)}
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar