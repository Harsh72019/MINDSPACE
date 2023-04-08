import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <hr color='gray' /> */}

      <div className="footer-container  shadow-lg  ">
        <section className="footer-subscription">
          <p className="footer-subscription-heading text-[white] mb-10 text-4xl">
            Transforming life through passionate Mental Health Care
          </p>
          <p className="footer-subscription-text text-[white] mb-10 text-xl">
            Join the MINDSPACE newsletter to receive our latest updates
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <button className="btn  bg-[#d14516] ">Subscribe</button>
            </form>
          </div>
        </section>

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                MINDSPACE &nbsp; <i className="fab fa-typo3 text2-gradient" />
              </Link>
            </div>
            <div className="flex  text-white justify-center items-center">
            Mail
            <a href="mailto:mindspace6369@gmail.com" ><CiMail fontSize={32} color="white" /></a>
            </div>
            <div>
            <small className="website-rights">MINDSPACE © 2023</small>
            </div>
          </div>
      
        </section>
      </div>
    </>
  );
};

export default Footer;
