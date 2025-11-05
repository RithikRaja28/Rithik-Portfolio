import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/Rithik-Profile.jpg";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { Code2, Cpu, Cloud, Rocket } from "lucide-react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-10 lg:mb-32 bg-transparent"
    >
      <div className="flex flex-wrap items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-6xl font-thin tracking-tight lg:mt-20 lg:text-7xl text-white"
            >
              Rithik Raja S
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent font-semibold"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-6 text-neutral-300 max-w-xl font-light leading-relaxed text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Download Button */}
            <motion.button
              variants={container(1.4)}
              initial="hidden"
              animate="visible"
              className="group flex items-center gap-3 border border-purple-500/40 text-purple-400 px-6 py-3 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/file/d/10_bduR0ra0rAZkO2AVhZKMFw2duuE4iv/view?usp=drive_link";
                link.download = "RithikRajaS_Resume.pdf";
                link.click();
              }}
            >
              <FiDownload className="text-purple-400 group-hover:translate-y-1 transition-transform duration-300" />
              Download CV
            </motion.button>
          </div>
        </div>

        {/* Right Section (Profile + Glow + Tech Icons) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative flex flex-col items-center"
          >
            {/* Glowing Circle Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 blur-[100px] opacity-20 rounded-full"></div>

            {/* Profile Picture */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-lg opacity-70 animate-pulse"></div>
              <img
                src={profilePic}
                alt="Rithik Raja"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-neutral-800 shadow-2xl"
              />
            </div>

            {/* Floating Tech Icons */}
            <div className="flex gap-6 mt-10">
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400"
              >
                <Code2 className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400"
              >
                <Cpu className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400"
              >
                <Cloud className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400"
              >
                <Rocket className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
