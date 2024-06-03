import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/rithikrajaprofilepic.jpg";
import { motion } from "framer-motion";
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
              whileHover={{ scale: 1.05, backgroundColor: 'transparent'}}
              className="bg-transparent hover:border-gradient border-2 border-transpar text-white-900 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download CV</span>
            </motion.button>
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
