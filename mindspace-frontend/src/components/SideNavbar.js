import React from "react";
// import { GrServices } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs"
import { SiBathasu } from "react-icons/si"
import { AiFillWechat } from "react-icons/ai"
import { RiQuestionAnswerFill } from "react-icons/ri"


const SideNavbar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Assesment <RiQuestionAnswerFill size={30} />
        </>
      ),
      href: "/Assesment",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Resources <SiBathasu size={30} />
        </>
      ),
      href: "/Resource",
    },
    {
      id: 3,
      child: (
        <>
          ChatBot <AiFillWechat size={30} />
        </>
      ),
      href: "/ChatBot",
    },
    {
        id: 4,
        child: (
          <>
            ChatSpace <BsChatDots size={30} />
          </>
        ),
        href: "/Chat",
      },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[45%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 blue-glassmorphism2" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
