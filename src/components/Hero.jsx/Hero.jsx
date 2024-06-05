import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/rithikrajaprofilepic.jpg";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
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
            
            <button  className="flex items-center gap-2 m-3 ">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </button>
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
