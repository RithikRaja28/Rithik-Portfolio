import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/rithikrajaprofilepic.jpg";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "./Hero.css";
const container = (delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  },
})
const Hero = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Rithik Raja S
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 mx-2-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* to be changed */}

            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              class="download-button"
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/file/d/107M3yZe95U-Y0K6LE5JJV2Ab5xJEAJh_/view?usp=sharing";
                link.download = "RithikRajaS.resume.pdf";
                link.click();
              }}
            >
              <div class="docs mb-2">
                <svg
                  class="css-i6dzq1 mb-2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line y2="13" x2="8" y1="13" x1="16"></line>
                  <line y2="17" x2="8" y1="17" x1="16"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                Download CV
              </div>
              <div class="download">
                <svg
                  class="css-i6dzq1"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line y2="3" x2="12" y1="15" x1="12"></line>
                </svg>
              </div>
            </motion.button>
            <br />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Rithik Raja S's Profile"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
