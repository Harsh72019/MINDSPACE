import React from "react";
import {motion} from 'framer-motion'
import Service1 from "../../assets/Helpline/Service1.png";
import Service2 from "../../assets/Helpline/Service2.png";
import Service3 from "../../assets/Helpline/Service3.png";
import Service4 from "../../assets/Helpline/Service4.png";
import Service5 from "../../assets/Helpline/Service5.png";
import Service6 from "../../assets/Helpline/Service6.png";
const Helpline = () => {
  const portfolios = [
    {
      id: 1,
      src: Service1,
      number: "1800-599-0019",
      link: "https://www.google.com/search?q=1-800-273-8255&rlz=1C1YTUH_enIN1023IN1023&sxsrf=APwXEddLS59xErilu5pMiEePDF1elRVKpw%3A1680415777686&ei=IRwpZIbDKd2u5NoP1-q26AI&ved=0ahUKEwjG14PMxIr-AhVdF1kFHVe1DS0Q4dUDCBA&uact=5&oq=1-800-273-8255&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAFAAWABgAGgAcAB4AIABAIgBAJIBAJgBAA&sclient=gws-wiz-serp",
    },
    {
      id: 2,
      src: Service2,
      number: "1860-266-2345",
      link: "https://www.vandrevalafoundation.com/",
    },
    {
      id: 3,
      src: Service3,
      number: "+91-8376804102",
      link: "https://www.fortishealthcare.com/",
    },
    {
      id: 4,
      src: Service4,
      number: "+91-9449840463",
      link: "https://www.sanjivinisociety.org/",
    },
    {
      id: 5,
      src: Service5,
      number: "78930-78930",
      link: "https://www.1life.org.in/",
    },
    {
      id: 6,
      src: Service6,
      number: "+91-44-24640050",
      link: "https://www.snehafoundation.in/",
    },
  ];

  return (
    <div
      name="helpline"
      className="bg-gradient-to-b from-[#6a5ca5] to-[#9472A2] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline   ">
          Indian Government Mental Health Services and Helplines
          </p>
          {/* <p className="py-6">Check out some of these resources</p> */}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,number,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link}><img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              </a>
              <div className="flex items-center justify-center">
                <button className="w-5/6 px-6 py-3 m-4 duration-200 hover:scale-105 text-xl font-bold">
                  {number} 
                </button>
                {/*<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
          </button>*/}
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Helpline;
