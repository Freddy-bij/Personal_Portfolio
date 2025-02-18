import { FaArrowDown } from "react-icons/fa6";

const Description = () => {
  return (
    <div className='w-[70%]  mx-auto'>
      <div className="  sm:text-3xl uppercase mt-30 font-[sofia]">
        <h1 className="font-bold text-center sm:text-start">welcome to my portfolio</h1>
      </div>
      <div className=" mt-20  flex justify-center font-[sofia]">
        <div className="">
          <h1 className="text-center text-[#ff3f34]  font-extrabold sm:text-3xl uppercase sm:font-bold  ">full stack web developper</h1>
          <p className=" sm:w-130 mt-14 text-xl ">   Hello!👋  I am a junior web developer passionate about creating modern and efficient sites. Curious and motivated, I learn every day to master the best web technologies to design interactive and fluid experiences.  </p>
        </div>
      </div>

      <div className="flex justify-center mt-40 items-center gap-1 capitalize  font-[sofia] ">
        <p className="text-xl">scrool down for see more</p>
        <div className="bg-[#ff3f34] w-7 h-7 flex justify-center items-center text-2xl rounded-full">
          <FaArrowDown />
        </div>
      </div>
 
    </div>
  )
}

export default Description