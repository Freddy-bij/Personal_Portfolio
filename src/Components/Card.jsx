import { IoCalendarNumberSharp } from "react-icons/io5"
import { FaUserGraduate } from "react-icons/fa6"
import { LuSchool } from "react-icons/lu"
import { IoLocationSharp } from "react-icons/io5"
import { motion } from "framer-motion"
import { useContext } from "react"
import { filsContent } from "../contents/apiContent"

const Card = ({ education }) => {
  const {isChange , setIsChange}=useContext(filsContent)
  return (
    <div
      className={`group relative ${isChange? "bg-white/80" : " bg-gradient-to-r from-blue-500/200 via-purple-500/20  to-blue-200" }  backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500`}
    >
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-blue-50/50 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-6">
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-fit"
            whileHover={{ scale: 1.05 }}
          >
            <IoCalendarNumberSharp className="text-blue-600" />
            <span>{education.date}</span>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserGraduate />
            <span>{education.title}</span>
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
          <motion.div
            className="px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-xl font-semibold shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-sm sm:text-base">{education.degree}</p>
          </motion.div>

          <motion.div
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-xl font-semibold shadow-sm border border-green-200 hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-sm sm:text-base">{education.grade}</p>
          </motion.div>
        </div>

        <motion.h3
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {education.name}
        </motion.h3>
        <div className="space-y-3 sm:space-y-4">
          <motion.div
            className="flex items-center gap-3 group/item"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
              <LuSchool className="text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-600 font-medium">Institution</p>
              <p className="text-gray-900 font-semibold text-base sm:text-lg truncate">{education.institution}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 group/item"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
              <IoLocationSharp className="text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-600 font-medium">Location</p>
              <p className="text-gray-900 font-semibold text-base sm:text-lg truncate">{education.location}</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      
    </div>
  )
}

export default Card
