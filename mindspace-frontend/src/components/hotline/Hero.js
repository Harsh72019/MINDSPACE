import React from "react";
import {motion} from 'framer-motion'
// import HeroImage from "../../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import chart from "../../assets/chart.png"
// import chart2 from "../../assets/chart2.jpeg"
import chart3 from "../../assets/chart3.jpg"


const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#6a5ca5]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Check out Crisis Hotline
          </h2>
          <p className="text-white text-lg py-4 max-w-md mb-4">
            Mental health is an essential aspect of overall well-being, and
            mental health crises can have a significant impact on individuals
            and their loved ones. At our crisis support page, we provide various
            resources and services to support those experiencing mental health
            crises.
          </p>

          <div>
            <Link
              to="helpline"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#d14516] cursor-pointer"
            >
              Helplines 
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div>
          <img
            src={chart3}
            alt="my profile"
            className="rounded-2xl mx-11 w-2/3 md:w-full"
          />
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
