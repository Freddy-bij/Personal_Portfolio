import { motion } from "framer-motion"
import alight1 from "../images/alight1.png"
import klab from "../images/klab.png"

import { FaGithub, FaLink } from "react-icons/fa6"
import { Link } from "react-router"
import { filsContent } from "../contents/apiContent"


import { useContext, useState } from "react"
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

    {
        "id": 1,
        "title": "Finance track website",
        "subtitle": "Own Project",
        "branchs": [
            "website",
            "admin Panel"
        ],
        "description": "Finance Track Website is a personal finance web application that helps users manage income, expenses, and categories with a clean and intuitive interface. It includes real-time tracking, data storage with Firestore, and responsive UI built with HTML, CSS, and JavaScript.",
        "links": [
            {
                "type": "github",
                "label": "Visit GitHub",
                "url": "https://github.com/Freddy-bij/klab-finance-track-project"
            },
            {
                "type": "site",
                "label": "Visit Site",
                "url": "https://klab-finance-track-project.vercel.app/"
            }
        ],
        "image":klab
    },
]

const ProjectsSect = () => {
    const { isChange, setIsChange } = useContext(filsContent)
      const [isHovered, setIsHovered] = useState(false);
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
              <div
                key={project.id}
                className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm mb-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
          
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-pink-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/10 via-transparent to-purple-400/10"></div>
                
       
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
                <div className="relative grid lg:grid-cols-2">
      
                  <div className="relative p-8 lg:p-10 flex items-center justify-center">
      
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-transparent"></div>
                    
                    <div
                      className={`
                        relative rounded-xl overflow-hidden shadow-2xl border border-white/30
                        transition-transform duration-500 
                        ${isHovered ? "scale-105 rotate-1" : "scale-100"}
                      `}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full"
                      />
                 
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                    </div>
                    
                  
                    <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
          
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-md rounded-full mb-3 border border-white/30">
                          {project.subtitle}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-sm">
                          {project.title}
                        </h2>
                      </div>
      
                
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.branchs.map((branch, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm font-medium text-gray-800 bg-white/40 backdrop-blur-md rounded-lg hover:bg-white/60 transition-all border border-white/50 shadow-sm"
                          >
                            {branch}
                          </span>
                        ))}
                      </div>
      
                  
                      <p className="text-gray-900 font-medium leading-relaxed mb-8 drop-shadow-sm">
                        {project.description}
                      </p>
                    </div>
      
                    <div className="flex flex-wrap gap-4">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                            transition-all duration-300 transform hover:scale-105 shadow-lg
                            ${
                              link.type === "github"
                                ? "bg-gray-900 text-white hover:bg-gray-800"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }
                          `}
                        >
                          {link.type === "github" ? (
                            <FaGithub className="text-xl" />
                          ) : (
                            <FaLink className="text-xl" />
                          )}
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
      
      
                
                </div>
              </div>
            ))}
      
      <WorldProject/>
     
    </div>
  )
}

export default ProjectsSect

