import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const About = () => {
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
      className="py-10 text-white bg-[#6c5ca5]"
      variants={container}
      initial="hidden"
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.7 }}
      animate="show"
    >
      <motion.div className="text-center mt-8" variants={item} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.7 }}>
        <div className=" text-5xl m-4">
          About US
        </div>
        <h1 className="text-white-400 text-xl my-1">MINDSPACE</h1>
      </motion.div>
      <motion.div
        className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
        variants={item}
        transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.7 }}
      >
        <div className="p-2">
          <motion.div className="text-white-300 my-3" variants={item} viewport={{ once: true, amount: 0.7 }}>
            <p className="text-justify leading-7 w-11/12 mx-auto text-xl">
            Our website aims to be a safe space for anyone seeking support
            and resources for their mental health. We hope that through our 
            platform, we can make a positive impact in the lives of individuals
            who are struggling with mental health concerns. Our team is dedicated 
            to ensuring that our resources are up-to-date and reliable, and we
            welcome any feedback or suggestions from our users to continuously
            improve our website. Thank you for considering MINDSPACE as a 
            resource for your mental health journey.
            </p>
            {/* <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div> */}
            <br />
            <br />
            <a href="./Contact">
              <motion.button transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.7 }}
                className="bg-{#6a5}  font-semibold underline text-cyan-500 md:mx-6 mx-auto rounded-full py-3 px-6 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact US
              </motion.button>
            </a>
          </motion.div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <motion.div
            className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg"
            variants={item}
          >
            <motion.img
              src="https://images.pexels.com/photos/2406454/pexels-photo-2406454.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-[73vh] object-cover bg-cyan-600 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

// import React from "react";
// import {motion} from 'framer-motion';
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";



// const About = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-[#6a5ca5]"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
//             AboutUS
//           </h2>
//           <p className="text-white text-lg py-4 max-w-md mb-4">
//           Our website aims to be a safe space for anyone seeking support
//           and resources for their mental health. We hope that through our 
//           platform, we can make a positive impact in the lives of individuals
//           who are struggling with mental health concerns. Our team is dedicated 
//           to ensuring that our resources are up-to-date and reliable, and we
//           welcome any feedback or suggestions from our users to continuously
//           improve our website. Thank you for considering MINDSPACE as a 
//           resource for your mental health journey.
//           </p>

          
//         </div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.7 }}
//           transition={{ duration: 0.7 }}
//           variants={{
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//         <div>
//           <img
//             src={"https://images.pexels.com/photos/2406454/pexels-photo-2406454.jpeg?auto=compress&cs=tinysrgb&w=600"}
//             alt="my profile"
//             className="rounded-2xl mx-12 w-96 md:w-96"
//           />
//         </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;
