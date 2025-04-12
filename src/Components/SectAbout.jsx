import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6"
import freddy from "../images/im1.jpg"
import { Link } from "react-router"


const SectAbout = () => {

  return (
    <div className=" sm:w-[70%]  font-[sofia] sm:mx-auto mx-4  ">

      <div className="grid xl:grid-cols-2    p-2 rounded-sm sm:bg-none ">
        <div >
          <div >
            <h1 className="text-[#ff3f34] text-2xl uppercase font-bold  pb-3 md:text-start text-center " >About Me</h1>

            <div>
              <p className="text-xl relative">I am a passionate full stack developer with a degree in Business Management and Computer Science
                with 1 year of web development training in front end and backend. My expertise lies in leveraging cutting edge technologies such as React JS, n
                ode js and various UI frameworks including, Tailwind css, Chachra UI and Framer Motion ...<Link to="about" target="_blank">
                  <span className="absolute text-sm letf-10 bottom-[5px] ml-1 text-[#ff3f34] hover:text-gray-400">
                    <FaArrowUpRightFromSquare />
                  </span>
                </Link>
              </p>

              <div className="flex gap-4 mt-3">
                <Link to="/contact" target="_blank">
                  <button className="border px-3 py-1 rounded-sm font-bold text-black shadow-sm bg-white hover:text-white hover:border  hover:border-gray-900 hover:bg-black">
                    Hire me
                  </button></Link>
                <Link to="https://github.com/Freddy-bij" target="_blank">
                  <button className="bg-[#ff3f34] px-3 py-1 rounded-sm font-bold text-black  hover:border  hover:border-gray-900 hover:bg-black flex items-center gap-1 hover:text-white  ">
                    <FaGithub />
                    Find me
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
        <div className=" flex justify-center">
          <div className="   hidden xl:flex sm:w-90 h-90">
            <img src={freddy} alt={freddy} className="w-full h-full sm:rounded-full" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SectAbout