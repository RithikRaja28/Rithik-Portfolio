import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFlutter, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const floatAnimation = (duration) => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
});

const Technology = () => {
  
const techs = [
  {
    icon: <RiReactjsLine className="text-cyan-400" />,
    name: "React.js",
  },
  {
    icon: <SiExpress className="text-gray-300" />,
    name: "Express.js",
  },
  {
    icon: <FaNodeJs className="text-green-500" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-green-400" />,
    name: "MongoDB",
  },
  {
    icon: <SiMysql className="text-sky-400" />,
    name: "SQL",
  },
  {
    icon: <SiFlutter className="text-blue-400" />,
    name: "Flutter",
  },
];

  return (
    <section className="relative border-b border-neutral-800 py-24 px-6 bg-transparent overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent blur-3xl pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1.5 }}
                          className="my-20 text-center text-4xl"
                        >
                          <span className="text-neutral-500">Technical</span> Stack
                        </motion.h1>

      {/* Icon Grid */}
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 relative z-10">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(index * 0.2)}
            initial="hidden"
            whileInView="visible"
            {...floatAnimation(3 + index * 0.4)}
            whileHover={{
              scale: 1.15,
              rotate: [0, 8, -8, 0],
              transition: { duration: 0.6 },
            }}
            className="relative flex flex-col items-center group p-6 rounded-3xl border border-neutral-700/60 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-xl bg-white/5 transition-all duration-500"
          >
            {/* Glowing Circle Behind Icon */}
            <div className="absolute -inset-5 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

            <div className="text-7xl mb-3">{tech.icon}</div>
            <p className="text-sm md:text-base text-neutral-300 group-hover:text-purple-400 transition-colors font-medium">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Light Effect */}
      <motion.div
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-pink-400/10 to-transparent rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
};

export default Technology;
