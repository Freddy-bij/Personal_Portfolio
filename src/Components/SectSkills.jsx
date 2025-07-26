

import { motion } from "framer-motion"
import htlm from "../images/html.svg"
import css from "../images/css.svg"
import javascript from "../images/javascript.svg"
import react from "../images/react.svg"
import git from "../images/git.svg"
import tailwind from "../images/tailwind.svg"
import figma from "../images/figma.svg"
import nodejs from "../images/nodejs.svg"
import { useContext } from "react"
import { filsContent } from "../contents/apiContent"


const skills = [
  { src: htlm, title: "HTML", category: "Frontend", level: 95 },
  { src: css, title: "CSS", category: "Frontend", level: 90 },
  { src: figma, title: "Figma", category: "Design", level: 85 },
  { src: tailwind, title: "Tailwind", category: "Frontend", level: 92 },
  { src: javascript, title: "JavaScript", category: "Frontend", level: 88 },
  { src: react, title: "React", category: "Frontend", level: 90 },
  { src: git, title: "Git", category: "Tools", level: 85 },
  { src: nodejs, title: "Node.js", category: "Backend", level: 82 },
]

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500",
  Design: "from-purple-500 to-pink-500",
  Tools: "from-orange-500 to-red-500",
}

const animationVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const SectSkills = () => {
   const { isChange, setIsChange } = useContext(filsContent)
  return (
    <div id="skills" className="min-h-screen  py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center text-gray-900 gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base  font-semibold">Technical Expertise</span>
          </div>

          <h2 className="text-3xl text-purple-600 sm:text-4xl lg:text-5xl font-bold  mb-4 sm:mb-6 ">
            My
            <span className=" bg-clip-text ">
              {" "}
              Skills
            </span>
            
          </h2>

          <p className="text-base sm:text-lg  max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital
            experiences
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skills.map((skill, i) => (
            <div

              className="group relative"
            >
           
              <div className="relative bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">

                <div
                  className={`absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r ${categoryColors[skill.category]}  text-xs font-semibold rounded-full shadow-lg`}
                >
                  {skill.category}
                </div>
                <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-white/90 p-3 sm:p-4 rounded-2xl shadow-lg">
                      <img
                        src={skill.src || "/placeholder.svg"}
                        alt={`${skill.title} icon`}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                      />
                    </div>
                  </div>

                
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold  text-center">{skill.title}</h3>

               
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs ">Proficiency</span>
                      <span className="text-xs font-semibold ">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {Object.entries(categoryColors).map(([category, gradient], index) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            const avgLevel =
              categorySkills.length > 0
                ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
                : 0

            return (
              <motion.div
                key={category}
                className={` ${isChange ? "bg-gray-900/80" : "bg-gray-200"}  Let's Work Togetherbackdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl mb-3`}
                  >
                    <span className=" font-bold text-lg">{categorySkills.length}</span>
                  </div>
                  <h3 className="font-bold  mb-1">{category}</h3>
                  <p className="text-sm  mb-2">{categorySkills.length} Skills</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs ">Avg:</span>
                    <span className="text-sm font-semibold ">{avgLevel}%</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-base sm:text-lg mb-6">Ready to bring these skills to your next project?</p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600  font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <a href="#contact"> Let's Work Together</a>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default SectSkills
