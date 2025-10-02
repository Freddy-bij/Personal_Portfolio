import { motion } from "framer-motion"
import alight1 from "../images/alight1.png"

import { FaGithub, FaLink } from "react-icons/fa6"
import { Link } from "react-router"
import { filsContent } from "../contents/apiContent"

import { useContext } from "react"
import WorldProject from "./WorldProject"


const Projects=[
  {
        "id": 1,
        "title": "Alight coding school website",
        "subtitle": "worked on",
        "branchs": [
            "website",
            "admin Panel"
        ],
        "description": "Alight Coding School is a platform created to support young people with dreams of becoming web developers. It offers accessible training programs. Our purpose is to guide students in applying their passion and building a future in tech.",
        "links": [
            {
                "type": "github",
                "label": "Visit GitHub",
                "url": "https://github.com/eugide/alight-coding-school-website"
            },
            {
                "type": "site",
                "label": "Visit Site",
                "url": "https://cs-website-1.onrender.com/"
            }
        ],
        "image":alight1
    },
]

const ProjectsSect = () => {
    const { isChange, setIsChange } = useContext(filsContent)
  return (
    <div id="projects" className="max-w-7xl mx-auto px-6 ">
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


      {
        Projects.map((project) => (
           <div className="  bg-gradient-to-r from-blue-500/20 via-purple-500/20  to-blue-200  lg:flex p-4 mb-2 rounded-lg gap-8">
        <div className="border-blue-500 border shadow-xl p-3 rounded-lg">

          <div className="">
            <img src={project.image} alt="alight1" className="h-full" />
          </div>



        </div>

        <div className="md:w-200">
          <h2 className="text-2xl text-gray-950 border-b-blue-500 border-b-2  mt-4 pb-1 md:mt-0 mb-4 text-bold">{project.title}</h2>
          <span className="text-white font-bold ">{project.subtitle}</span>


          <div className="flex my-2 gap-2">
            <div className="border rounded-lg px-5 py-1 gap-1  mb-3 sm:mb-0">{project.branchs[0]}</div>
             <div className="border rounded-lg px-5 py-1 gap-1  mb-3 sm:mb-0">{project.branchs[1]}</div>
          
          </div>



          <div>
            <p className="my-4 text-sm text-black font-medium">{project.description}</p>
          </div>
          <div className="flex  gap-2">

            {project.links.map((link , index)=>(
                 <div className={`flex ${isChange? " bg-gray-900" : "bg-gray-300"} px-4 py-2 rounded-lg items-center gap-2 sm:mb-0 mb-2`}>
              <a
                 key={index}
                 href={link.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2"
              >
              {link.type ==="github" ? <FaGithub/> : <FaLink/>}
              <span className="border-b-blue-500 border-b hover:border-none hover:text-blue-500 ">{link.label}</span>
              </a>
            </div>
            ))}
         
           
          </div>
        </div>
      </div>
        ))
      }
      <WorldProject/>
     
    </div>
  )
}

export default ProjectsSect

