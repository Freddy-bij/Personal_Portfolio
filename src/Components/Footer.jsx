import { FaFacebook, FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6"
import image from "../images/imag3.png"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="h-60 bg-gray-500/10  rounded-xl font-[sofia] text-xl">

      <div className="w-[70%] mx-auto grid grid-cols-3 py-10">
        <div>
          <div className="flex items-center" >
            <div className="w-20 h-20  ">
              <img src={image} alt="" className="h-full w-full rounded-full " />
            </div>
            <h1 className=" text-xl">Freddy-<span className="text-2xl font-bold text-[#ff3f34]">B</span></h1>
          </div>
          <div className="flex justify-center gap-5">
            <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaGithub/></div>
            <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaLinkedinIn/></div>
            <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaInstagram/></div>
            <div className="bg-[#ff3f34] w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-[#ff3f34]"><FaFacebookF /></div>
          </div>
        </div>


        <div>
          <h1 className="text-[#ff3f34] capitalize font-bold text-2xl">custom menu</h1>
          <ul className=" pl-6 font-semibold ">
            <li className=" hover:underline hover:underline-offset-6 hover:text-gray-500/60">about</li>
            <li className=" hover:underline hover:underline-offset-6 hover:text-gray-500/60">Skills</li>
            <li className=" hover:underline hover:underline-offset-6 hover:text-gray-500/60">contact me</li>
          </ul>
        </div>
        <div>
          <h1>contact info</h1>
          <ul>
            <li>+250792404909</li>
            <li>freddybijanja31@gmail.com</li>
            <li>freddy-bij</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer