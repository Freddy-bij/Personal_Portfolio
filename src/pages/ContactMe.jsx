


import chat from "../images/chat.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4bsv52r", "template_s01cp66", form.current, {
        publicKey: "utz4OsEk8a0S0BuJS",
      })
      .then(
        () => {
          toast.success("✅ Message successfully sent!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto font-[sofia] p-6">

      <ToastContainer />

      <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center text-center md:text-left">
          <img src={chat} alt="Chat Icon" className="h-64 w-64 mb-4 " />
          <p className="text-lg font-semibold">Kigali, Kimisagara</p>
          <p className="text-lg font-semibold">+250792404909</p>
          <p className="text-lg font-semibold">freddybijanja31@gmail.com</p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h1 className="text-[#ff3f34] text-2xl font-bold uppercase text-center">
            Contact Me
          </h1>
          <div>
            <label className="block text-sm font-medium">User Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="w-full p-2 mt-1 border-b-2 border-[#ff3f34] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border-b-2 border-[#ff3f34] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message here"
              className="w-full p-2 mt-1 border-2 border-[#ff3f34] rounded-lg outline-none h-28"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#ff3f34] text-white font-bold uppercase rounded-lg hover:bg-white hover:text-[#ff3f34]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
