import freddy from "../images/freddy prof.png"
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa6"
import { motion } from "framer-motion"
import Education from "./Education"
import { Link } from "react-router"
import { useContext } from "react"
import { filsContent } from "../contents/apiContent"


const Pdf_FILE = 'http://localhost:5173/CV_Frederick_BIJANJA_2025.pdf'


const SectAbout = () => {
  const { isChange, setIsChange } = useContext(filsContent)

const downloadFileAtURL = (url) => {
  const fileName = url.split('/').pop();
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.setAttribute('download', fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

  return (
    <div id="about" className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
      
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-purple-600  font-semibold">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-600  mb-4">
            Building Tomorrow's
            <span className="block text-purple-600 ">
              Digital Experiences
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={` ${isChange? "bg-white/70" :"bg-gray-200"} backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20`}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate full-stack developer who bridges the gap between{" "}
                  <span className="font-semibold text-blue-600">business strategy</span> and{" "}
                  <span className="font-semibold text-purple-600">technical excellence</span>. With my background in
                  Business Management and Computer Science, I don't just build applications—I craft solutions that drive
                  growth.
                </p>

                <p className="text-lg  leading-relaxed">
                  My expertise spans the entire development stack, from creating intuitive user interfaces with{" "}
                  <span className="font-semibold text-gray-900">React.js</span> and{" "}
                  <span className="font-semibold text-gray-900">Tailwind CSS</span> to building robust backends with{" "}
                  <span className="font-semibold text-gray-900">Node.js</span>. I bring ideas to life with smooth
                  animations using <span className="font-semibold text-gray-900">Framer Motion</span>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {[
                    { icon: FaCode, label: "Clean Code", color: "bg-blue-100 text-blue-600" },
                    { icon: FaLaptopCode, label: "Full Stack", color: "bg-purple-100 text-purple-600" },
                    { icon: FaRocket, label: "Performance", color: "bg-green-100 text-green-600" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`${item.color} p-4 rounded-2xl text-center`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <item.icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                <span><a href="#contact">Let's Work Together</a></span>
                <FaArrowUpRightFromSquare className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button className={`px-8 py-4  ${isChange? "bg-white/70" : "bg-gray-300"}  text-gray-700 font-semibold rounded-2xl flex items-center justify-center gap-3 border border-gray-200`}
              onClick={() => downloadFileAtURL(Pdf_FILE)}
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                to="https://github.com/Freddy-bij"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${isChange? "bg-white/70" : "bg-gray-200"} backdrop-blur-sm text-gray-700 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 group border border-gray-200`}
              >
                <FaGithub className="whreh-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/freddy-bijanja-054b3031a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${isChange? "bg-white/70 " : "bg-gray-200"} backdrop-blur-sm text-gray-700 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 group border border-gray-200`}
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
             
            </motion.div>
             <Education/>
          </motion.div>
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-blue-200 rounded-full"></div>
              </div>
              <div className="relative z-10 bg-white/80- backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/20">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={freddy}
                    alt="Freddy BIJANJA - Full Stack Developer"
                    className="w-full h-auto object-cover"
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Available
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Projects", icon: "🚀", color: "from-blue-500 to-blue-600" },
                { number: "100%", label: "Satisfaction", icon: "⭐", color: "from-green-500 to-green-600" },
                { number: "24/7", label: "Support", icon: "💬", color: "from-purple-500 to-purple-600" },
                { number: "2+", label: "Years Exp", icon: "🎯", color: "from-orange-500 to-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-2xl text-center shadow-lg`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className= {` ${isChange? "bg-white/70" : "bg-gray-300"} backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="font-semibold text-blue-600 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "Tailwind", "MongoDB", "Framer Motion"].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1  ${isChange ? "bg-gray-900/80" : "bg-gradient-to-r from-gray-100 to-gray-200"} text-sm font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all cursor-default`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SectAbout