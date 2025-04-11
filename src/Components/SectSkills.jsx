
import { motion } from "framer-motion";
import htlm from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import git from "../images/git.svg";
import tailwind from "../images/tailwind.svg";
import figma from "../images/figma.svg";
import nodejs from "../images/nodejs.svg";

const skills = [
  { src: htlm, title: "HTML" },
  { src: css, title: "CSS" },
  { src: figma, title: "Figma" },
  { src: tailwind, title: "Tailwind" },
  { src: javascript, title: "JavaScript" },
  { src: react, title: "React" },
  { src: git, title: "Git" },
  { src: nodejs, title: "Node.js" },
];

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SectSkills = () => {
  return (
    <div className="sm:w-[70%] mx-auto  py-16  font-[sofia]">
      
       <h1 className="text-[#ff3f34] text-2xl uppercase font-bold  pb-3 md:text-start text-center ">
          My Skills
        </h1>
      <div className="max-w-4xl mx-auto ">
       

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="w-28 h-28 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={skill.src} alt={skill.title} className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-medium">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectSkills;
