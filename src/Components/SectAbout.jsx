import freddy from "../images/freddy prof.png"
const SectAbout = () => {
  return (
    <div className="bg-black text-white w-[70%]  font-[sofia] mx-auto">

      <div className="grid grid-cols-2 mt-20">
        <div className="flex flex-col ">
          <div >
            <h1 className="text-[#ff3f34] text-2xl uppercase font-bold  pb-3 " >About Me</h1>
            <p className="w-md text-xl ">Passionate about creating elegant solutions, I am doing research to evolve my permanence in software development. I dedicate all my time to creating dynamic and modern websites, working on different projects to increase my skills.</p>
          </div>

        </div>

        <div className="flex justify-center">
          <div className="w-90 h-90">
            <img src={freddy} alt={freddy} className="w-full h-full rounded-full" />
          </div>

        </div>

      </div>


    </div>
  )
}

export default SectAbout