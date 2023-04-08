import React from "react";
// import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineUser } from "react-icons/ai"
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbarr() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  const [imgDropdown, setImgDropdown] = React.useState(false);

  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
    // alert("Successfully logged out")
  }
  return (
    <nav className="sticky blue-glassmorphism2 top-0 w-full flex md:justify-center justify-between items-center p-1  " >
      <Link href="" to="/" className="md:flex-[0.5] flex-row  w:32 sm:w-20 flex-initial justify-center items-center font-bold text-3xl text-white cursor-pointer py-4">
        MINDSPACE &nbsp;
        <i class='fab fa-typo3 text2-gradient' />
      </Link>
      <ul className="text-white md:flex hidden list-none  flex-row justify-between items-center flex-initial">
        {/* {["Home", "About Us", "Contact Us"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))} */}
        <li><Link to="/" className="mx-4 nav-links fontt hover:white-glassmorphism text-xl cursor-pointer"> Home</Link></li>
        <li><Link to="/hotline" className="mx-4 nav-links fontt text-xl cursor-pointer">Crisis Hotline</Link></li>
        
        <li className="relative"><button className="mx-4 nav-links fontt text-xl cursor-pointer" onClick={() => setDropdown(!dropdown)} >Services <AiFillCaretDown color="white" /></button>
          {
            dropdown ? (
              <div className="lg:absolute transition-transform blue-glassmorphism3    z-50 right-0 rounded-md p-2"
              >
                <ul className="space-y-2">
                  <li>
                    <Link to="/chatbot" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setDropdown(!dropdown)}>Chat Bot</Link>
                  </li>
                  <li>
                    <Link to="/assesment" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setDropdown(!dropdown)}> Self Assesment</Link>
                  </li>
                  <li>
                    <Link to="/chat" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setDropdown(!dropdown)}> Chat Space</Link>
                  </li>
                  <li>
                    <Link to="/resource" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setDropdown(!dropdown)}> Resources</Link>
                  </li>
                </ul>
              </div>
            )
              : (
                null
              )
          }
          <div className="lg:absolute hidden bg-[#a2888e] z-50 right-0 rounded-md p-2">
            <ul className="space-y-2">
              <li>
                <Link to="/chatbot" className="flex p-2 hover:bg-[#a2888e] rounded-md">Chat Bot</Link>
              </li>
              <li>
                <Link to="/Questionnaire" className="flex p-2 hover:bg-[#a2888e] rounded-md"> Self Assesment</Link>
              </li>
              <li>
                <Link to="/chat" className="flex p-2 hover:bg-[#a2888e] rounded-md"> Chat Space</Link>
              </li>
            </ul>
          </div>

        </li>
        <li><Link to="/About" className="mx-4 nav-links fontt text-xl cursor-pointer">About Us</Link></li>
        <li><Link to="/contact" className="mx-4 nav-links fontt text-xl cursor-pointer"> Contact Us</Link></li>

        {user ? (
        <div className="relative  flex flex-row  cursor-pointer justify-center items-end " onClick={() => setImgDropdown(!imgDropdown)}>
            <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} className="relative flex-row" /> <AiFillCaretDown fontSize={20} />
            {user.name}
            {
              imgDropdown ? (
                <div className="lg:absolute top-12 transition-transform blue-glassmorphism3   z-50 right-0 rounded-md p-2">
                <ul className="space-y-2">
                  <li>
                    <button className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={handleLogout}>Logout</button>
                 </li>
                </ul>
              </div>
                
              )
                : (
                  null
                )
            }
          </div>
        ) :
          (
            <Link to="/Login" className="mx-4 nav-links fontt text-xl cursor-pointer"> Login <AiOutlineUser fontSize={20} />
            </Link>
          )
        }

      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer hover:text-[gray]" onClick={() => setToggleMenu(true)} />
        )}
        {/* {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer hover:text-[gray]" onClick={() => setToggleMenu(false)} />
          )} */}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-0 p-3 w-full h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-center   rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose fontSize={32} onClick={() => setToggleMenu(false)} className="cursor-pointer hover:text-[gray]" />
            </li>
            <li><Link to="/" className="mx-4 nav-links fontt text-xl cursor-pointer" onClick={() => setToggleMenu(false)}> Home</Link></li>
            <li><Link to="/AboutUs" className="mx-4 nav-links fontt text-xl cursor-pointer" onClick={() => setToggleMenu(false)}>About Us</Link></li>
            <li><Link to="/contact" className="mx-4 nav-links fontt text-xl cursor-pointer" onClick={() => setToggleMenu(false)}> Contact Us</Link></li>
            <li><Link to="/hotline" className="mx-4 nav-links fontt text-xl cursor-pointer" onClick={() => setToggleMenu(false)}>Crisis Hotline</Link></li>
            <li><button onClick={() => setDropdown(!dropdown)} className="mx-8 nav-links fontt text-xl cursor-pointer">Services <AiFillCaretDown color="white" /></button>
            </li>
            {
              dropdown ? (
                <div className="lg:absolute transition-transform blue-glassmorphism z-10 right-0 rounded-md p-2"
                >
                  <ul className="space-y-2">
                    <li>
                      <Link to="/chatbot" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setToggleMenu(false)}>Chat Bot</Link>
                    </li>
                    <li>
                      <Link to="/assesment" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setToggleMenu(false)}> Self Assesment</Link>
                    </li>
                    <li>
                      <Link to="/chat" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setToggleMenu(false)}> Chat Space</Link>
                    </li>
                    <li>
                      <Link to="/resource" className="flex p-2 hover:bg-[#a2888e] rounded-md" onClick={() => setToggleMenu(false)}>Resources</Link>
                    </li>

                  </ul>
                </div>
              )
                : (
                  null
                )
            }



            {user ? (
              <div className="relative  flex flex-row cursor-pointer justify-center items-center " onClick={() => setImgDropdown(!imgDropdown)}>
                <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} className="relative flex-row" /> <AiFillCaretDown fontSize={20} />
                {user.name}
                {
                  imgDropdown ? (
                    <div className="lg:absolute transition-transform blue-glassmorphism z-10 right-0 rounded-md p-2 mt-10"
                    >
                      <ul className="space-y-2">
                        <button className="flex p-2 hover:bg-[#a2888e] rounded-md " onClick={handleLogout}    >
                          Logout
                        </button>

                      </ul>
                    </div>
                  )
                    : (
                      null
                    )
                }
              </div>
            ) :
              (
                <Link to="/Login" className="mx-4 h-12 nav-links fontt text-xl cursor-pointer" onClick={() => setToggleMenu(false)}> Login <AiOutlineUser fontSize={20} />

                </Link>
              )
            }
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbarr;
