import { FaFacebookF, FaGithub, FaInstagram, FaPhone } from "react-icons/fa6"
import image from "../images/imag3.png"
import { FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <div className=" bg-gray-500  rounded-xl font-[sofia] py-10 text-xl ">

      <div className="sm:w-[70%] sm:mx-auto   border-b-1  pb-10 ">
        <div className="flex justify-center">
          <div >
            <div className="flex items-center" >
              <div className="w-20 h-20  ">
                <img src={image} alt="" className="h-full w-full rounded-full " />
              </div>
              <h1 className=" text-xl font-semibold">Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span></h1>
            </div>
            <div className="flex  gap-5">
              <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaGithub /></div>
              <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaLinkedinIn /></div>
              <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaInstagram /></div>
              <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaFacebookF /></div>
            </div>

          </div>

        </div>
        <div className="grid md:grid-cols-2  justify-center">

          <div className=" md:flex justify-center">
            <div>
              <h1 className="text-[#ff3f34] capitalize font-bold text-2xl">custom menu</h1>
              <ul className=" pl-6 font-semibold  pt-2">
                <li className=" hover:underline hover:underline-offset-6 hover:text-[#ff3f34]">about</li>
                <li className=" hover:underline hover:underline-offset-6 hover:text-[#ff3f34]">Skills</li>
                <li className=" hover:underline hover:underline-offset-6 hover:text-[#ff3f34]">contact me</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
             <div>
            <h1 className="text-[#ff3f34] capitalize font-bold text-2xl">contact info</h1>
            <ul className="sm:pl-6 font-semibold  pt-2">
              <div className="flex items-center gap-2 pb-4">  <div className="w-8 h-8  bg-[#ff2f34] flex items-center justify-center rounded-full "><FaPhone /></div> <li className="hover:underline hover:underline-offset-6 hover:text-[#ff3f34] ">+250792404909</li> </div>
              <div className="flex items-center gap-2 pb-4">  <div className="w-8 h-8  bg-[#ff2f34] flex items-center justify-center rounded-full "><MdEmail /></div><li className="hover:underline hover:underline-offset-6 hover:text-[#ff3f34]  ">freddybijanja31@gmail.com</li></div>
              <div className="flex items-center gap-2 ">  <div className="w-8 h-8  bg-[#ff2f34] flex items-center justify-center rounded-full "><FaLinkedinIn /></div><li className="hover:underline hover:underline-offset-6 hover:text-[#ff3f34] "> freddy-bij</li></div>
            </ul>
          </div>
          </div>

         

        </div>


      </div>

      <div className="sm:w-[70%] sm:mx-auto text-center text-sm pt-4 ">

        <p>All right Reserved&copy; {new Date().getFullYear()}. freddy-b_porfolio </p>
      </div>
    </div>
  )
}

export default Footer