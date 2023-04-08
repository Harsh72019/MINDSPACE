import React, { useState } from "react";
import {motion} from 'framer-motion'
import Footer from "./Footer";
import Services from "./Services"
import SideNavbar from "./SideNavbar";
// import AboutUsPage from "./AbousUs";

import { Link } from "react-router-dom";


const Welcome = () => {
  const [show, setShow] = useState(true);

  return (
<>

<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          
    <div className="  h-[100vh] flex justify-center w-full ">
      
      <div className=" flex mf:flex-row  flex-col  md:p-20 py-12 ">
        <div className=" md:relative inset-0 flex flex-1 justify-center items-center flex-col mf:mr-10">
          <h1 className="text-5xl mt-12 fontt text-center sm:text-8xl font-bold text-white  py-0 ">
            {/* <i class='fab fa-typo3 text2-gradient ' />  */}
            Empower your Mental Wellness
          </h1>
          <p className=" fontt text-center  mt-12  font-italic text-white font-bold text-3xl md:w-9/12 w-11/12 ">
            Discover a Healthier and Happier you
          </p>
        </div>
        <div className="h-[100vh] flex sm:flex-row flex-col flex-1 fontt items-center justify-center w-full mf:mt-0 mt-12">
          <button onClick={() => setShow(!show)} className=" px-3 py-8 m-2 rounded-lg hover:drop-shadow-xl flex justify-center items-center flex-col h-10 sm:w-60 w-72 my-5 btnn2">
            <Link to="/assesment" className="flex flex-row justify-center  text-base sm:text-xl items-center font-bold ">
              Get Started</Link>
          </button>
          <button onClick={() => setShow(!show)} className=" px-2 py-8 btnn  m-2 rounded-lg hover:drop-shadow-xl flex justify-center items-center flex-col  h-10 sm:w-60 w-72 my-5 white-glassmorphism4 ">
            <Link to='/player' className="flex flex-row justify-center text-base sm:text-xl items-center font-bold">
              WATCH TRAILER &nbsp; <i className='far fa-play-circle' />
              {/* <FaRegPlayCircle fontSize={20}  className="btnn" />  */}
            </Link>
          </button>




        </div>
      </div>
    </div>
    </motion.div>
    {/* <AboutUsPage/> */}
    <Services/>
    <Footer/>
</>
  );
};

export default Welcome;