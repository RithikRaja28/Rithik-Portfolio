import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../../assets/rithikrajaprofilepic.jpg";

const timelineData = [
  {
    text: "Design and develop secure, scalable, and user-friendly web applications, leveraging expertise in both front-end and back-end technologies.",
  },
  {
    text: "Transform ideas into seamless, interactive digital experiences with a focus on performance and usability.",
  },
  {
    text: "Collaborate effectively with teams, ensuring clear communication and streamlined development processes.",
  },
  {
    text: "Bridge the gap between data and user experience by building intuitive, full-stack applications tailored to user needs.",
  },
  {
    text: "Proficient in: HTML, CSS, JavaScript, React, Node.js, Python, MongoDB, and Express, with a strong foundation in modern web development.",
  },
];

// Developer-themed emojis
const floatingEmojis = [
  "💻",
  "🖥️",
  "📱",
  "⚙️",
  "📝",
  "📱",
  "⚙️",
  "💡",
  "🤖",
  "🤖",
  "🧑‍💻",
  "👨‍💻",
  " 👩‍💻",
  "📱",
  "🔌",
  "💻",
  "🖥️",
  "💾",
  "🔍",
];

const FloatingEmoji = ({ emoji }) => {
  // Random initial position
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  // Re-randomize position on resize
  useEffect(() => {
    const handleResize = () => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      className="absolute text-5xl opacity-30"
      style={{ left: position.x, top: position.y }}
      animate={{
        x: [position.x, Math.random() * window.innerWidth],
        y: [position.y, Math.random() * window.innerHeight],
        rotate: [0, 360],
      }}
      transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
    >
      {emoji}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative overflow-hidden border-b border-neutral-900 pb-12 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Floating Emojis Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, index) => (
          <FloatingEmoji key={index} emoji={emoji} />
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="relative my-10 md:my-16 text-center text-3xl md:text-4xl font-bold text-white"
      >
        What I <span className="text-purple-400">Do</span>
      </motion.h1>

      {/* Profile Image */}
      <div className="relative flex justify-center mb-8">
        <img
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 shadow-lg ring-4 ring-purple-500 hover:scale-105 transition-transform duration-300"
          src={profilePic}
          alt="Profile"
        />
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-4xl">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-gray-700 h-full"></div>

        {timelineData.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className={`relative flex flex-col md:flex-row w-full my-8 items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Dots */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:-translate-x-0 md:left-auto w-5 h-5 md:w-6 md:h-6 bg-purple-500 rounded-full border-2 border-white shadow-md animate-bounce transition-all duration-300 hover:scale-110"></div>

            {/* Timeline Card */}
            <div
              className={`relative w-full md:w-5/12 p-6 backdrop-blur-md bg-white/10 border border-gray-500 shadow-xl rounded-lg text-white transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "md:text-left md:ml-10"
                  : "md:text-right md:mr-10"
              }`}
            >
              <h3 className="text-base md:text-lg font-semibold leading-relaxed">
                {item.text}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
