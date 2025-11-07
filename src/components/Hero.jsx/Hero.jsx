import React from "react";
import { HERO_CONTENT } from "../../constants";
import profilePic from "../../assets/Rithik-Profile.jpg";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { Code2, Cpu, Cloud, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative border-b border-neutral-900 py-22 px-5 md:px-12 lg:px-5 bg-transparent">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative z-10">
        {/* === LEFT: INTRO CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 animate-gradient">
              Rithik Raja S
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-neutral-300 mb-6"
          >
            Full Stack Developer 💻
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-lg text-neutral-400 font-light leading-relaxed mb-10"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-5 justify-center lg:justify-start"
          >
            {/* Download CV */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/file/d/10_bduR0ra0rAZkO2AVhZKMFw2duuE4iv/view?usp=drive_link";
                link.download = "RithikRajaS_Resume.pdf";
                link.click();
              }}
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/50 text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300"
            >
              <FiDownload className="group-hover:translate-y-1 transition-transform duration-300" />
              Download CV
            </button>

            {/* Contact Button */}
            <button
              onClick={() =>
                (window.location.href = "mailto:rithikrajadev@gmail.com")
              }
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:text-purple-400 hover:border-purple-500 transition-all duration-300 font-medium"
            >
              <FiMail />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* === RIGHT: PROFILE IMAGE + ICONS === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center"
        >
          {/* Profile Image with Subtle Glow */}
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 blur-2xl opacity-40"
            />
            <img
              src={profilePic}
              alt="Rithik Raja"
              className="relative w-72 h-72 rounded-full object-cover border-4 border-neutral-800 shadow-[0_0_35px_rgba(168,85,247,0.3)]"
            />
          </div>

          {/* Floating Tech Icons */}
          <div className="flex gap-6 mt-8">
            {[Code2, Cpu, Cloud, Rocket].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, 6, -6, 0],
                }}
                className="p-3 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all"
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
