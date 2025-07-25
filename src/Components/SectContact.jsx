import chat from "../images/chat.svg"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaLocationDot, FaPhone, FaPaperPlane } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { motion } from "framer-motion"

const SectContact = () => {
  const form = useRef()
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (data) => {
    const newErrors = {}
    if (!data.from_name.trim()) {
      newErrors.from_name = "Name is required."
    }
    if (!data.from_email.trim()) {
      newErrors.from_email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) {
      newErrors.from_email = "Invalid email format."
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required."
    }
    return newErrors
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const data = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
    }

    const validationErrors = validateForm(data)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      toast.error(" Please fix the errors before sending.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      })
      setIsSubmitting(false)
      return
    }

    emailjs
      .sendForm("service_4bsv52r", "template_s01cp66", form.current, {
        publicKey: "utz4OsEk8a0S0BuJS",
      })
      .then(
        () => {
          toast.success(" Message successfully sent!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          })
          form.current.reset()
          setErrors({})
          setIsSubmitting(false)
        },
        (error) => {
          toast.error("Failed to send message. Try again!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          })
          console.log("FAILED...", error.text)
          setIsSubmitting(false)
        },
      )
  }

  return (
    <div id="contact" className="min-h-screen  py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToastContainer />

      
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base text-gray-700 font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-4 sm:mb-6">
            Contact
            <span >
              {" "}
              Me
            </span>
          </h2>

          <p className="text-base sm:text-lg  max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-white/20 h-full">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/90 p-6 rounded-3xl shadow-lg">
                    <img
                      src={chat || "/placeholder.svg?height=200&width=200"}
                      alt="Chat Icon"
                      className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 mx-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">Let's Connect</h3>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <FaLocationDot className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Location</p>
                      <p className="text-gray-900 font-semibold">Kigali, Kimisagara</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Phone</p>
                      <p className="text-gray-900 font-semibold">+250792404909</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <MdEmail className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Email</p>
                      <p className="text-gray-900 font-semibold">freddybijanja31@gmail.com</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Available for new projects</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>


          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your full name"
                    className={`w-full p-4 bg-white/50 text-black border-2 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:shadow-lg ${
                      errors.from_name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"
                    }`}
                  />
                  {errors.from_name && <p className="text-red-600 text-sm mt-2">{errors.from_name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold  mb-2">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter your email address"
                    className={`w-full p-4 bg-white/50 text-black  border-2 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:shadow-lg ${
                      errors.from_email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                  />
                  {errors.from_email && <p className="text-red-600 text-sm mt-2">{errors.from_email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="6"
                    className={`w-full p-4 bg-white/50 text-black border-2 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:shadow-lg resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm mt-2">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SectContact
