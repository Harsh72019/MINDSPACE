import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
// import cont from "../../assets/cont.jpg"

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_atuunuo', 'template_k49fggj', e.target, '6bnkQCVHKvG9fLhMx')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className=" "
      variants={container}
      initial="hidden"
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 1 }}
      animate="show"
    >
    <div className="flex  justify-center  bg-contact h-[100vh]  text-white white-glassmorphism2 fontt flex-row">
      
      <div className="w-[50vw] p-6   mt-10 ">
        <h2 className="text-7xl text-center font-bold mb-10">Get in touch</h2>
        {isEmailSent ? (
          <p className="text-white text-center text-xl mb-4">We have recieved your message! We will be in touch soon.</p>
        ) : (
          <form className="lol" onSubmit={sendEmail}>
            <label className="block mb-2">
              Name:
              <input placeholder="Enter your name " className="border text-black border-gray-400 p-2 w-full" type="text" name="user_name" required />
            </label>
            <label className="block mb-2">
              Email:
              <input placeholder="Enter your email" className="border text-black border-gray-400 p-2 w-full" type="email" name="user_email" required />
            </label>
            <label className="block mb-4">
              Message:
              <textarea placeholder="Type a message for us" className="border text-black border-gray-400 p-2 w-full" name="message" required />
            </label >
            <div className="flex justify-center items-center">
            <button className=" bg-[#d14516]  hover:bg-[#441414] text-white  font-bold py-2 px-20 rounded" type="submit" onclick={""}>Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
    </motion.div>
  );
}

export default Contact;

