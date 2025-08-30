
import { Link } from "react-router";
import Image from "../images/freddy.jpeg";

import { motion } from "framer-motion"


const Pdf_FILE = 'http://localhost:5173/CV_Frederick_BIJANJA_2025.pdf'
const Description = () => {

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
    <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
              <img
                src={Image}
                alt="Freddy BIJANJA - Full Stack Developer"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </motion.div>


        <motion.div
          className="order-1 lg:order-2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-purple-600 leading-tight">
              Full Stack
              <span className="blocktext-purple-600">
                Web Developer
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg  leading-relaxed">
              Hello, I'm <span className="font-semibold text-purple-600 ">Freddy BIJANJA</span>, a passionate full-stack
              developer dedicated to crafting exceptional digital experiences. I specialize in building modern, scalable
              web applications using cutting-edge technologies.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong foundation in both frontend and backend development, I transform ideas into robust,
              user-friendly solutions that drive business growth and deliver outstanding user experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {["React", "Next.js", "Node.js", "TypeScript", "MongoDB"].map((tech, index) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >

            <Link to="https://github.com/Freddy-bij" target="_blank">
              <button className="px-8 py-3 bg-gradient-to-r w-full  from-blue-600 to-purple-600  font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                View My Work
              </button>
            </Link>

            <button className="px-8 py-3 border-2 border-gray-300  font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200"
            onClick={() => {downloadFileAtURL(Pdf_FILE)}}
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {[
          { number: "20+", label: "Projects Completed" },
          { number: "2+", label: "Years Experience" },
          { number: "10+", label: "Happy Clients" },
          { number: "24/7", label: "Support Available" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600  mb-2">{stat.number}</div>
            <div className=" text-sm lg:text-base">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Description

