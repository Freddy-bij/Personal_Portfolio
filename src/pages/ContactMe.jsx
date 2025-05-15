import chat from "../images/chat.svg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.from_name.trim()) {
      newErrors.from_name = "Name is required.";
    }

    if (!data.from_email.trim()) {
      newErrors.from_email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) {
      newErrors.from_email = "Invalid email format.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
    };

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("⚠️ Please fix the errors before sending.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    emailjs
      .sendForm("service_4bsv52r", "template_s01cp66", form.current, {
        publicKey: "utz4OsEk8a0S0BuJS",
      })
      .then(
        () => {
          toast.success("✅ Message successfully sent!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
          form.current.reset();
          setErrors({});
        },
        (error) => {
          toast.error("❌ Failed to send message. Try again!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto font-[sofia] p-6">
      <ToastContainer />
      <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-400 text-black rounded-xl shadow-lg">
        <div className="flex flex-col items-center text-center md:text-left">
          <img src={chat} alt="Chat Icon" className="h-64 w-64 mb-4" />
          <div>
            <p className="text-lg font-semibold flex items-center gap-1">
              <FaLocationDot /> Kigali, Kimisagara
            </p>
            <p className="text-lg font-semibold flex items-center gap-1">
              <FaPhone /> +250792404909
            </p>
            <p className="text-lg font-semibold flex items-center gap-1">
              <MdEmail /> freddybijanja31@gmail.com
            </p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 bg-gray-300 p-6 rounded-lg shadow-md"
        >
          <h1 className="text-[#ff3f34] text-2xl font-bold uppercase text-center">
            Contact Me
          </h1>

          <div>
            <label className="block text-sm font-medium">User Name</label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Enter your name"
              className={`w-full p-2 mt-1 border-b-2 outline-none ${
                errors.from_name ? "border-red-500" : "border-[#ff3f34]"
              }`}
            />
            {errors.from_name && (
              <p className="text-red-600 text-sm mt-1">{errors.from_name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="Enter your email"
              className={`w-full p-2 mt-1 border-b-2 outline-none ${
                errors.from_email ? "border-red-500" : "border-[#ff3f34]"
              }`}
            />
            {errors.from_email && (
              <p className="text-red-600 text-sm mt-1">{errors.from_email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              placeholder="Enter your message here"
              className={`w-full p-2 mt-1 border-2 rounded-lg outline-none h-28 ${
                errors.message ? "border-red-500" : "border-[#ff3f34]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#ff3f34] text-white font-bold uppercase rounded-lg hover:bg-white hover:text-[#ff3f34] transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

