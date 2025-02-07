import { FaArrowDown } from "react-icons/fa6";

const Description = () => {
  return (
    <div className='w-[70%]  mx-auto'>
      <div className="text-3xl uppercase mt-30 font-[sofia]">
        <h1 className="font-bold">welcome to my portfolio</h1>
      </div>
      <div className=" mt-20  flex justify-center font-[sofia]">
        <div className="">
          <h1 className="text-center text-[#ff3f34] text-3xl uppercase font-bold  ">full stack web developper</h1>
          <p className="w-130 mt-14 text-xl "> I am a software developer i strive to showcase my skills between logic and creativity currently immersed in the dynamic world of web development </p>
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