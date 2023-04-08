import React, { useContext, useState } from "react";
// import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useLoginUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AppContext } from "../context/appContext";
import { motion } from "framer-motion";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { socket } = useContext(AppContext);
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    function handleLogin(e) {
        e.preventDefault();
        // login logic
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                // socket work
                socket.emit("new-user");
                // navigate to the chat
                navigate("/chat");
            }
        });
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
        <div className="white-glassmorphism2 text-xl  fontt">
            {/* <div className="login__bg"  ></div> */}
            <div className="flex  items-center text-center justify-center  flex-col ">
                <form style={{ maxWidth: 500, height: "90vh" }} className="mt-20  mx-auto" onSubmit={handleLogin}>
            <h1 className="text-5xl    font-bold text-white  mb-20">Login to your account</h1>
                    <div className="mb-4">
                        {error && <p className="bg-red-600 text-white  rounded-md py-3 mt-4">{error.data}</p>}
                        <label className="block text-white">Email address</label>
                        <input type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} value={email} required className="block text-base h-10 w-full mt-1 m rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50" />
                        {/* <p className="text-sm text-white mb-4">We'll never share your email with anyone else.</p> */}
                    </div>

                    <div className="mb-4">
                        <label className="block text-white">Password</label>
                        <input type="password" className="block w-full h-10 mt-1 rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 mb-3 focus:ring-opacity-50 text-base" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required  />
                    </div>

                    <button type="submit" className=" bg-[#d14516] ]  text-white font-semibold px-4 py-2 w-full rounded-md shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-8 transition-colors duration-300">
                        {isLoading ? <div className="animate-spin text-lg" > <i class='fab fa-typo3 text2-gradient' /> </div> : "Login"}
                    </button>

                    <div className="py-4">
                        <p className="text-center text-white">Don't have an account ? <Link to="/signup" className="text-[#e58a52] text-lg  underline font-bold">Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </motion.div>
    );
}

export default Login;
