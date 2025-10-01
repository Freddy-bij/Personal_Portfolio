import { motion } from "framer-motion"
import alight1 from "../images/alight1.png"
import alight2 from "../images/alight2.png"
import { FaGithub, FaLink } from "react-icons/fa6"
import { Link } from "react-router"
import { filsContent } from "../contents/apiContent"
import { useContext } from "react"
const ProjectsSect = () => {
    const { isChange, setIsChange } = useContext(filsContent)
  return (
    <div className="max-w-7xl mx-auto px-6 ">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="text-purple-600  font-semibold">Projects</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-purple-600  mb-4">
          Projects I've
          <span className="block text-purple-600 ">
            Worked on
          </span>
        </h2>
      </motion.div>
      <div className="  bg-gradient-to-r from-blue-500/20 via-purple-500/20  to-blue-200  md:flex p-4 rounded-lg gap-8">
        <div className="border-blue-500 border shadow-xl p-3 rounded-lg">

          <div className="">
            <img src={alight1} alt="alight1" className="h-full" />
          </div>



        </div>

        <div className="md:w-200">
          <h2 className="md:text-2xl text-gray-950 border-b-blue-500 border-b-2  mt-4 pb-1 md:mt-0 mb-4 text-bold">Alight coding school website</h2>
          <span className="text-white font-bold ">Worked on</span>
          <div className="sm:flex my-2 gap-5">
            <div className="border rounded-lg px-5 py-1 gap-1  mb-3 sm:mb-0">website</div>
            <div className="border rounded-lg px-5 py-1 gap-1">Admin Panel</div>
          </div>

          <div>
            <p className="my-4 text-sm text-black font-medium">Alight Coding School is a platform created to support young people with dreams of becoming web developers.It offers accessible training programs t.
              Our purpose is to guide students in applying their passion and building a future in tech.</p>
          </div>
          <div className="sm:flex  sm:gap-6">
            <div className={`flex ${isChange? " bg-gray-900" : "bg-gray-300"} px-4 py-2 rounded-lg items-center gap-2 sm:mb-0 mb-2`}>
              <div><FaGithub/></div>
              <Link><span className="border-b-blue-500 border-b hover:border-none hover:text-blue-500 ">visit github</span></Link>
            </div>
             <div className={`flex ${isChange? " bg-gray-900" : "bg-gray-300"} px-4 py-2 rounded-lg items-center gap-2`}>
              <div><FaLink/></div>
              <Link to="https://cs-website-1.onrender.com/" target="_blank"><span className="border-b-blue-500 border-b hover:border-none hover:text-blue-500 ">visit site </span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSect