import React from "react";
/* import logo from "../../assets/kevinRushLogo.png"; */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="Logo" /> */}
        <i class="bi bi-code-slash">
          <h1 className="mx-2 w-15 text-2xl">Rithik Raja S</h1>
        </i>
      </div>
      <div className="m-8 flex items-center justifiy-center gap-4 text-2x">
        <FaLinkedin onClick={()=> window.open("www.google.com")} />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
