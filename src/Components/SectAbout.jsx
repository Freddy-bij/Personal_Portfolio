import { FaGithub } from "react-icons/fa6"
import freddy from "../images/freddy prof.png"
import { Link } from "react-router"
import { useState } from "react"

const SectAbout = () => {
  const [chowAllParagraph,setChowAllParagraph]=useState(false) 

  let paragraph = "I am a passionate full stack developer with a degree in Business Management and Computer Science with 1 year of web development training in front end and backend. My expertise lies in leveraging cutting edge technologies such as React JS, node js and various UI frameworks including, Tailwind css, Chachra UI and antdesign. My ability also lies in designing seamless UIs and components that align perfectly with the desired aesthetics, creating responsive websites that gracefully adapt to any device. My skills also extend to creating the data in the competent database. ensuring the seamless flow of data between the front-end and the back-end. Moreover, I write the code in a clean and well-structured manner that not only works flawlessly but also improves the overall maintainability of the projects."

  if(!chowAllParagraph){
    paragraph = paragraph.substring(0,515) + '...'
}
  return (
    <div className=" w-[70%]  font-[sofia] mx-auto bg-[url('./public/images/imgremov.png')] bg-no-repeat bg-center sm:bg-none ">

      <div className="grid xl:grid-cols-2 mt-20  bg-black/20 p-2 rounded-sm sm:bg-none ">
        <div >
          <div >
            <h1 className="text-[#ff3f34] text-2xl uppercase font-bold  pb-3 md:text-start text-center " >About Me</h1>
            
                          <p className=" text-xl ">{paragraph} <i onClick={()=> setChowAllParagraph((prevChowAllParagraph) => !prevChowAllParagraph)} className="text-[#ff3f34]/40">{!chowAllParagraph ? "more" : "less"}</i> </p>

            
          </div>

        </div>

        <div className=" flex justify-center">
          <div className="   hidden sm:flex sm:w-90 h-90">
            <img src={freddy} alt={freddy} className="w-full h-full sm:rounded-full" />
          </div>

        </div>

      </div>
    <div className="flex gap-4 mt-3">
      <button className="border px-3 py-1 rounded-sm font-bold hover:bg-[#ff3f34] hover-border-none">Hire me</button>
     <Link to="https://github.com/Freddy-bij" target="_blank"> <button className="bg-[#ff3f34] px-3 py-1 rounded-sm font-bold text-black  hover:border hover:bg-black flex items-center gap-1 hover:text-white  "> <FaGithub /> Find me</button></Link>
    </div>

    </div>
  )
}

export default SectAbout