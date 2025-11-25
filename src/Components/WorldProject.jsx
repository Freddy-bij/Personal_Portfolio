
import { FaGithub, FaLink } from "react-icons/fa6";
import { useState } from "react";
import univ1 from "../images/univ1.png"

const Projects = [
   {
        "id": 2,
        "title": "world universities website",
        "subtitle": "own Project",
        "branchs": [
            "website",
            "admin Panel"
        ],
        "description": "World Universities is a platform that connects students with universities around the globe.It simplifies the search process by providing easy access to essential information.Our goal is to help every learner find the right institution to achieve their academic dreams.",
        "links": [
            {
                "type": "github",
                "label": "Visit GitHub",
                "url": "https://github.com/Freddy-bij/world-universities-websity"
            },
            {
                "type": "site",
                "label": "Visit Site",
                "url": "https://world-universities.vercel.app/"
            }
        ],
        "image": univ1
    }
]

const WorldProject = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {Projects.map((project) => (
        <div
          key={project.id}
          className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
    
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-pink-500/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/10 via-transparent to-purple-400/10"></div>
          
 
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

          <div className="relative grid lg:grid-cols-2 gap-0">

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
                  className=""
                />
           
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
              
            
              <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldProject;

