

const NavBar = () => {
  return (
   <div className="bg-balck">

     <nav className=" flex justify-between bg-gray-500/10 items-center py-4 px-5 w-[70%] mx-auto rounded-[30px]    ">
       <h1 className="font-[sofia] text-xl">Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span></h1>
       <ul className="flex gap-5 text-[#ff3f34] font-bold ">
        <li className="hover:text-white">About Me</li>
        <li className="hover:text-white">Skills</li>
        <li className="hover:text-white">Contact Me</li>
       </ul>
    </nav>
   </div>
  
  )
}

export default NavBar