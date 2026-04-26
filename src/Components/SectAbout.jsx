import freddy from "../images/freddy prof.png"
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaStar,
  FaHeadset,
  FaBullseye,
} from "react-icons/fa6"
import { motion } from "framer-motion"
import { Link } from "react-router"
import { useContext } from "react"
import { filsContent } from "../contents/apiContent"
import { RiRocket2Fill } from "react-icons/ri"


const Pdf_FILE = '/Frederick_Bijanja_CV_2026.pdf'


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
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-purple-600  font-semibold">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-600  mb-4">
            Building Tomorrow's
            <span className="block text-purple-600 ">
              Digital Experiences
            </span>
          </h2>
        </motion.div>
            {/* font-semibold text-purple-600 */}
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
                 I'm a full-stack developer who bridges business strategy and technical excellence. With backgrounds in both Commercial Management and intensive software engineering, I don't just build applications – I craft solutions that drive real growth.
                </p>

                <p className="text-lg  leading-relaxed">
                  My expertise spans the entire stack: intuitive interfaces with{" "}
                  <span className="font-semibold text-gray-900">React.js , Typescript </span> and{" "}
                  <span className="font-semibold text-gray-900">Tailwind CSS</span> robust backends with{" "}
                  <span className="font-semibold text-gray-900">Node.js</span>.and smooth animations using <span className="font-semibold text-gray-900">Framer Motion</span>. I bring ideas to life, from first commit to deployed product.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {[
                    { icon: FaCode, label: "Clean Code", color: "bg-purple-600/10 text-purple-600" },
                    { icon: FaLaptopCode, label: "Full Stack", color: "bg-purple-600/10 text-purple-600" },
                    { icon: FaRocket, label: "Performance", color: "bg-purple-600/10 text-purple-600" },
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
              <button className="group px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
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
                className={`p-4 ${isChange? "bg-white/70" : "bg-gray-200"} backdrop-blur-sm text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 group border border-gray-200`}
              >
                <FaGithub className="whreh-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/freddy-bijanja-054b3031a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${isChange? "bg-white/70 " : "bg-gray-200"} backdrop-blur-sm text-gray-900 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 group border border-gray-200`}
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
             
            </motion.div>
             
          </motion.div>
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SectAbout
