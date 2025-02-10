

const SectContact = () => {
  return (
    <div className="w-[70%] mx-auto font-[sofia] p-5">
       <h1 className="text-[#ff3f34] text-2xl font-bold uppercase " > contact Me</h1>
       <div className="flex justify-center py-4 ">
 
        <div className="bg-gray-950/30 rounded-xl text-xl py-5 px-4 w-96 ">
           
                <label>User Name</label><br></br>
                <input type="text" placeholder="Enter user name" className="outline-none border-b-2 border-[#ff3f34] pb-1 mb-1 pl-1 w-full" /><br></br>
                <label>Email</label><br></br>
                <input type="text " placeholder="Enter your Email" className="outline-none border-b-2 border-[#ff3f34] pb-1 mb-1 pl-1 w-full"  /><br></br>
                <label >Message</label><br></br>
                <textarea placeholder="Enter your message here" className="outline-none border-2 h-28 rounded-xl border-[#ff3f34] pb-1 mb-1 pl-1 w-full" ></textarea><br></br>
               <button className="bg-[#ff3f34] w-full py-0.5 rounded-xl uppercase font-bold hover:bg-white hover:text-[#ff3f34]">send</button>
          
        </div>

       </div>
    </div>
  )
}

export default SectContact