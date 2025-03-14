
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const SectContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4bsv52r', 'template_s01cp66', form.current, {
        publicKey: 'utz4OsEk8a0S0BuJS',
      })
      .then(
        () => {
          alert("message successfully sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="sm:w-[70%] sm:mx-auto font-[sofia] m-5">
       <h1 className="text-[#ff3f34] text-2xl font-bold uppercase md:text-start text-center" > contact Me</h1>
       <div className="flex justify-center py-4 ">
 
        <form ref={form} onSubmit={sendEmail} className="bg-gray-500 rounded-xl text-xl py-5 px-4 w-96 ">
           
                <label>User Name</label><br></br>
                <input type="text" name="from_name" placeholder="Enter user name" className="outline-none border-b-2 border-[#ff3f34] pb-1 mb-1 pl-1 w-full" /><br></br>
                <label>Email</label><br></br>
                <input type="text "  name="from_email" placeholder="Enter your Email" className="outline-none border-b-2 border-[#ff3f34] pb-1 mb-1 pl-1 w-full"  /><br></br>
                <label >Message</label><br></br>
                <textarea placeholder="Enter your message here" name="message" className="outline-none border-2 h-28 rounded-xl border-[#ff3f34] pb-1 mb-1 pl-1 w-full" ></textarea><br></br>
               
               <input type="submit" value="Send" className="bg-[#ff3f34] w-full py-0.5 rounded-xl uppercase font-bold hover:bg-white hover:text-[#ff3f34]" />
        </form>

       </div>
    </div>
  )
}

export default SectContact