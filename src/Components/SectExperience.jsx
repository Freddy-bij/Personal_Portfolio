import { motion, AnimatePresence } from "framer-motion"
import experiences from "../Experiences.json"
import { useState } from "react"
import { useContext } from "react"
import { filsContent } from "../contents/apiContent"
import { IoCalendarNumberSharp, IoLocationSharp } from "react-icons/io5"
import { FaBriefcase } from "react-icons/fa6"
import { FaCheckCircle } from "react-icons/fa"
import { MdVerified } from "react-icons/md"

const SectExperience = () => {
  const { isChange } = useContext(filsContent)
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  return (
    <div id="experience" className={`min-h-screen py-12 sm:py-16 lg:py-24 `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={`inline-flex items-center ${isChange ? "text-white" : "text-gray-900"} gap-2 px-4 sm:px-6 py-2 sm:py-3 ${isChange ? "bg-slate-800/80" : "bg-white/80"} backdrop-blur-sm rounded-full shadow-lg mb-4 sm:mb-6`}>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base font-semibold">Professional Journey</span>
          </div>

          <h2 className={`text-3xl ${isChange ? "text-white" : "text-gray-900"} sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6`}>
            Experience &
            <span className="text-purple-600"> Training</span>
          </h2>

          <p className={`text-base sm:text-lg ${isChange ? "text-slate-300" : "text-gray-600"} max-w-2xl mx-auto leading-relaxed`}>
            Intensive training programs where I gained practical skills in modern web development and advanced technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Experience Cards Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  onClick={() => {
                    setSelectedExperience(exp)
                    setActiveTab("overview")
                  }}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                    selectedExperience.id === exp.id
                      ? `${isChange ? "bg-white/80" : "bg-gradient-to-r from-purple-600/30 via-purple-600/20 to-purple-600/30"} border-2 border-purple-600 shadow-lg`
                      : `${isChange ? "bg-white/50" : "bg-gradient-to-r from-purple-600/10 via-purple-600/10 to-purple-600/10"} border border-white/20 shadow-md hover:shadow-lg`
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedExperience.id === exp.id ? "bg-purple-600 text-white" : "bg-purple-600/20 text-purple-600"
                    }`}>
                      <FaBriefcase className="text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold ${isChange ? "text-white" : "text-gray-900"} text-sm sm:text-base truncate`}>
                        {exp.name}
                      </h3>
                      <p className={`text-xs sm:text-sm ${isChange ? "text-slate-400" : "text-gray-600"} truncate`}>
                        {exp.program}
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-purple-600 text-xs font-medium">
                        <IoCalendarNumberSharp />
                        {exp.date}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Card */}
            <div className={`rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border ${
              isChange 
                ? "bg-slate-800/80 border-slate-700/50" 
                : "bg-gradient-to-br from-purple-600/20 via-purple-600/10 to-purple-600/20 border-white/20"
            } shadow-2xl`}>
              
              {/* Title and Info */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isChange ? "text-white" : "text-gray-900"}`}>
                    {selectedExperience.name}
                  </h3>
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-700 rounded-full text-sm font-semibold w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MdVerified />
                    {selectedExperience.certificate.status}
                  </motion.div>
                </div>

                <p className={`text-lg ${isChange ? "text-slate-300" : "text-gray-700"} font-medium mb-4`}>
                  {selectedExperience.program}
                </p>

                <p className={`leading-relaxed mb-6 ${isChange ? "text-slate-400" : "text-gray-600"}`}>
                  {selectedExperience.description}
                </p>

                {/* Info Badges */}
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-700 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <IoCalendarNumberSharp />
                    {selectedExperience.date}
                  </motion.div>
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-700 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <IoLocationSharp />
                    {selectedExperience.location}
                  </motion.div>
                </div>
              </motion.div>

              {/* Tabs */}
              <div className="mb-8">
                <div className={`inline-flex rounded-full ${isChange ? "bg-slate-700/50" : "bg-white/90"} shadow-sm border ${isChange ? "border-slate-600" : "border-purple-100"} overflow-hidden`}>
                  {[
                    { key: "overview", label: "Skills Gained" },
                    { key: "certificate", label: "Brevet/Certificate" },
                  ].map((tab) => (
                    <motion.button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 focus:outline-none ${
                        activeTab === tab.key
                          ? "bg-purple-600 text-white shadow-lg"
                          : `${isChange ? "text-slate-300 hover:text-white" : "text-gray-600 hover:text-purple-700"}`
                      } ${activeTab !== tab.key ? "opacity-80 hover:opacity-100" : ""}`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        <p className={`text-sm ${isChange ? "text-slate-400" : "text-gray-600"} font-medium mb-4`}>
                          Key competencies and technologies learned during this training:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {selectedExperience.skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              className="group relative"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <div className="absolute inset-0 bg-purple-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                              <div className="relative px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-sm font-semibold text-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-purple-400/30">
                                {skill}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "certificate" && (
                    <motion.div
                      key="certificate"
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-6">
                       

                        {/* Certificate Placeholder */}
                        <motion.div
                          className={`relative aspect-video my-4 rounded-2xl overflow-hidden border-2 border-purple-600/30 ${isChange ? "bg-slate-700/50" : "bg-gradient-to-br from-purple-600/20 to-purple-600/10"} flex items-center justify-center min-h-96 sm:min-h-[400px]`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center">
                            <div className="text-6xl mb-4">📜</div>
                            <p className={`font-medium ${isChange ? "text-slate-300" : "text-gray-600"}`}>
                              Certificate of {selectedExperience.certificate.name}
                            </p>
                            <p className={`text-sm mt-2 ${isChange ? "text-slate-400" : "text-gray-500"}`}>
                              {selectedExperience.name} - {selectedExperience.date}
                            </p>
                          </div>
                        </motion.div>

                       
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SectExperience
