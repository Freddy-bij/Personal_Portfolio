
import { FaGithub, FaLink } from "react-icons/fa6"
import { filsContent } from "../contents/apiContent"
import { useContext } from "react"
import univ1 from "../images/univ1.png"

const Projects = [
    {
        "id": 2,
        "title": "world universities website",
        "subtitle": "Own Project",
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
        "image":univ1
    }
]

const WorldProject = () => {
      const { isChange, setIsChange } = useContext(filsContent)
  return (
    <div>

         {
                Projects.map((project) => (
                   <div className="  bg-gradient-to-r from-blue-500/20 via-purple-500/20  to-blue-200   lg:flex p-4 mb-2 rounded-lg gap-8">
                <div className="md:w-200">
                  <h2 className="sm:text-2xl  text-gray-950 border-b-blue-500 border-b-2  mt-4 pb-1 md:mt-0 mb-4 text-bold">{project.title}</h2>
                  <span className=" font-bold ">{project.subtitle}</span>
        
        
                  <div className="flex my-2 gap-2">
                    <div className="border rounded-lg px-5 py-1 gap-1  mb-3 sm:mb-0">{project.branchs[0]}</div>
                     <div className="border rounded-lg px-5 py-1 gap-1  mb-3 sm:mb-0">{project.branchs[1]}</div>
                  
                  </div>
        
        
        
                  <div>
                    <p className="my-4 text-sm text-black font-medium">{project.description}</p>
                  </div>
                  <div className="flex  gap-6">
        
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

                     <div className="border-blue-500 border shadow-xl md:mt-0 mt-5 p-3 rounded-lg">
        
                  <div className="">
                    <img src={project.image} alt="alight1"  />
                  </div>
        
        
        
                </div>
              </div>
                ))
              }
    </div>
  )
}

export default WorldProject