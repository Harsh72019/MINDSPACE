import React, { useState } from "react";
import { useSignupUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
// import botImg from "../assets/bot.jpeg";
import user from "../assets/user.png"
import { motion } from "framer-motion";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signupUser, { isLoading, error }] = useSignupUserMutation();
    const navigate = useNavigate();
    //image upload states
    const [image, setImage] = useState(null);
    const [upladingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            return alert("Max file size is 1mb");
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    async function uploadImage() {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "mvw37hr8");
        try {
            setUploadingImg(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/dfpmkus1i/image/upload", {
                method: "post",
                body: data,
            });
            const urlData = await res.json();
            setUploadingImg(false);
            return urlData.url;
        } catch (error) {
            setUploadingImg(false);
            console.log(error);
        }
    }

    async function handleSignup(e) {
        e.preventDefault();
        if (!image) return alert("Please upload your profile picture");
        const url = await uploadImage(image);
        console.log(url);
        // signup the user
        signupUser({ name, email, password, picture: url }).then(({ data }) => {
            if (data) {
                console.log(data);
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
        <div className="text-white text-xl fontt white-glassmorphism2 -z-0">
            <div>
                <div className="flex  items-center text-center justify-center flex-col space-y-5">
                    <form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
                        <h1 className="text-center text-5xl m-5">Create account</h1>
                        <div className="signup-profile-pic__container m-4">
                            <img src={imagePreview || user} className="signup-profile-pic" />
                            <label htmlFor="image-upload" className="image-upload-label">
                                <i className="fas fa-plus-circle add-picture-icon"></i>
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
                        </div>
                        {error && <p className="alert alert-danger">{error.data}</p>}
                        <div class="m-4">
                            <label class="block text-white mb-2" for="name-input">Name</label>
                            <input id="name-input" type="text" class="form-input text-black text-base h-10 rounded-md shadow-sm w-full" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div class="m-4">
                            <label class="block text-white mb-2" for="email-input">Email address</label>
                            <input id="email-input" type="email" class="form-input text-black text-base h-10 rounded-md shadow-sm w-full" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            {/* <p class="text-muted text-xs mt-1">We'll never share your email with anyone else.</p> */}
                        </div>

                        <div class="m-4">
                            <label class="block text-white mb-2" for="password-input">Password</label>
                            <input id="password-input" type="password" class="form-input text-black h-10 text-base rounded-md shadow-sm w-full" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>

                        <button class=" bg-[#d14516] ]  text-white font-semibold px-4 py-2 w-full rounded-md shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-8 transition-colors duration-300" type="submit">
                            {upladingImg || isLoading ? "Signing you up..." : "Signup"}
                        </button>
                        <div className="py-4 ">
                            <p className="text-center">
                                Already have an account ? <Link to="/login" className="text-[#e58a52] text-lg  underline font-bold">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
                {/* <Col md={5} className="signup__bg"></Col> */}
            </div>
        </div>
        </motion.div>
    );
}

export default Signup;
