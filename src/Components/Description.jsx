
import { motion } from "framer-motion";
import Image from "../images/freddy.jpeg";

const Description = () => {
  return (
    <div className="max-w-5xl- sm:w-[70%] sm:mx-auto sm:px-0 px-6 py-12 font-[sofia]">
      <motion.h1
        className="text-xl sm:text-3xl font-bold uppercase  text-[#ff3f34] text-center sm:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to my portfolio
      </motion.h1>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Image}
            alt="Developer working"
            className="w-[300px] sm:w-[400px] rounded-lg "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center sm:text-left"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-[#ff3f34] uppercase">
            Full Stack Web Developer
          </h2>
          <p className="mt-6 text-lg">
            Hello!👋 my name is <i className="font-semibold text-[#ff34f3]">Freddy BIJANJA</i>  I am a junior web developer passionate about creating
            modern and efficient sites. Curious and motivated, I learn every day
            to master the best web technologies to design interactive and fluid
            experiences.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Description;
