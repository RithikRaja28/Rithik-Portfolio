import React from "react";
/* import logo from "../../assets/kevinRushLogo.png"; */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaHackerrank } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.nav whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="Logo" /> */}
        <i class="bi bi-code-slash">
          <h1 className="mx-2 w-15 text-2xl">RR</h1>
        </i>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2x">
        <a
          href="https://www.linkedin.com/in/rithik-raja-s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/RithikRaja28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://leetcode.com/u/Rithikraja28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandLeetcode size={20} />
        </a>
        <a
          href="https://www.hackerrank.com/profile/rithikraja28_rr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank size={20} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
