import htlm from"../images/html.svg";
import css from"../images/css.svg"
import javascript from"../images/javascript.svg"
import react from"../images/react.svg"
import git from"../images/git.svg"
import tailwind from"../images/tailwind.svg"
import figma from"../images/figma.svg"

const SectSkills = () => {
  return (
    <div className="w-[70%] mx-auto  font-[sofia] my-30">
        <h1 className="text-[#ff3f34] uppercase font-bold text-2xl">Skills</h1>
     <div className="flex justify-center">
      <div className=" grid grid-cols-7 gap-10 ">
        <img src={htlm} alt="" className="w-20 h-20"/>
        <img src={css} alt="" className="w-20 h-20"/>
        <img src={figma} alt="" className="w-20 h-20"/>
        <img src={tailwind} alt="" className="w-20 h-20"/>
        <img src={javascript} alt="" className="w-20 h-20" />
        <img src={react} alt="" className="w-20 h-20" />
        <img src={git} alt="" className="w-20 h-20"/>
        
        
      </div>

     </div>
    </div>
  )
}

export default SectSkills