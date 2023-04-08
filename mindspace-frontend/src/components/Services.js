import React from "react";
import {motion} from 'framer-motion'
import { AiFillWechat } from "react-icons/ai"
import { RiQuestionAnswerFill } from "react-icons/ri"
// import { GrResources } from "react-icons/gr"
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs"
import { SiBathasu } from "react-icons/si"


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism5 p-3 m-3 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1 ">
      <h3 className="mt-2 text-white   font-bold text-lg">{title}</h3>
      <p className="mt-1 text-white text-md md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center bg-[#6a5ca5] fontt   border-gray-800">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className=" text-3xl sm:text-7xl py-2 text-[white] font-bold mb-8">
          Services that we
          <br />
          continue to improve
        </h1>
        
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
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
  <div>
    <Link to="/chatbot">
      <ServiceCard
        color="bg-[#2952E3]"
        title="Spiritual Guru"
        icon={<AiFillWechat fontSize={28} className="text-white" />}
        subtitle="We provided a Spiritual Guru that provides you answer to your questions in a Spiritual way!    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;"
      />
    </Link>
  </div>
  </motion.div>
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
    <Link to="/assesment">
      <ServiceCard
        color="bg-[#8945F8]"
        title="Self Assesment"
        icon={<RiQuestionAnswerFill fontSize={28} className="text-white" />}
        subtitle="A mental assesment to help you analyise yourself and help you know about your mental condition  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      />
    </Link>
  </div>
  </motion.div>
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
  <div>
    <Link to="/resource">
      <ServiceCard
        color="bg-[#389c53]"
        title="Resources"
        icon={<SiBathasu fontSize={28} className="text-white " />}
        subtitle="We provide a various number of resources depending upon your mental condition to help you cope-up   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  "
      />
    </Link>
  </div>
  </motion.div>
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
    <Link to="/chat">
      <ServiceCard
        color="bg-[orange]"
        title="Chat Space"
        icon={<BsChatDots fontSize={28} className="text-white " />}
        subtitle="We provided a chat space where people suffering can chat with each other and take advices from GURU's   &nbsp;  &nbsp;"
      />
    </Link>
  </div>
  </motion.div>
</div>

    </div>
  </div>
);

export default Services;