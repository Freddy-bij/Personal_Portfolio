import { FaFacebookF, FaGithub, FaInstagram, FaPhone } from "react-icons/fa6"
import image from "../images/freddy prof.png"
import { FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router"

const Footer = () => {
  return (
    <div className=" bg-gray-900  rounded-xl font-[sofia] py-10 text-xl ">

      <div className="sm:w-[70%] sm:mx-auto  border-white border-b-1  pb-10 ">
        <div className="flex justify-center">
          <div >
            <div className="flex items-center" >
              <div className="w-20 h-20">
                <img src={image} alt="" className="h-full w-full rounded-full " />
              </div>
              <h1 className=" text-xl text-white font-semibold">Freddy-<span className="text-2xl font-bold text-purple-600">B</span></h1>
            </div>
            <div className="flex  gap-5">
             <Link to="https://github.com/Freddy-bij" target="_blank"> <div className="bg-purple-600 w-8 h-8 flex  items-center justify-center rounded-full text- hover:bg-white hover:text-purple-600"><FaGithub /></div></Link>
             <Link to="https://www.linkedin.com/in/freddy-bijanja-054b3031a/?trk=li_LOL_DA_global_careers_jobsgtm_otwGeneral_res_Sep2023_dav2" target="_blank"><div className="bg-purple-600 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-purple-600"><FaLinkedinIn /></div></Link>  
             <Link to="https://www.instagram.com/freddybijanja31/" target="_blank"> <div className="bg-purple-600 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-purple-600"><FaInstagram /></div></Link> 
             <Link to="https://www.facebook.com/profile.php?id=61559846249127&sk=about" target="_blank"><div className="bg-purple-600 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-purple-600"><FaFacebookF /></div></Link>  
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[70%] sm:mx-auto text-white text-center text-sm pt-4 ">

        <p>All right Reserved&copy; {new Date().getFullYear()}. freddy-b_porfolio </p>
      </div>
    </div>
  )
}

export default Footer