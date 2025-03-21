import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";

const Card = ({education}) => {
  return (
    <div className='bg-gray-400 p-2 rounded-xl '>
        <div className='flex justify-between'>
            <div className="flex items-center gap-1 bg-black px-2 py-0.5 rounded-2xl text-[#ff3f34] text-sm font-medium ">
              <IoCalendarNumberSharp />
               <h1>{education.date}</h1>
               
            </div>
           <div className="flex items-center gap-1 bg-white py-0.5 text-black rounded-2xl px-2 text-sm font-medium ">
           <FaUserGraduate />
             <p>{education.title}</p>
           </div>   
        </div>
        <div className="flex gap-1 pt-2 pb-1">
           <div className="bg-white text-black px-2 rounded-2xl font-medium">
            <p>{education.degree}</p>
           </div>
           <div className="bg-white text-black px-2 rounded-2xl font-medium">
             <p>{education.grade}</p>
           </div>
          
        </div>
       
        <p className="capitalize text-black font-bold text-lg py-1">{education.name}</p>
       
       <div className="flex items-center gap-1 font-medium text-black">
       
       <div className="bg-white text-[#ff3f34] w-6 h-6 flex items-center justify-center rounded-full  ">
        <LuSchool />
        </div>
         <p>{education.institution}</p>
       </div>
       <div className="flex items-center gap-1 py-2 font-medium text-black">
     <div className="bg-white text-[#ff3f34] w-6 h-6 flex items-center justify-center rounded-full  ">
      <IoLocationSharp />
     </div>
       
        <p>{education.location}</p>
       </div>
        

    </div>
  )
}

export default Card