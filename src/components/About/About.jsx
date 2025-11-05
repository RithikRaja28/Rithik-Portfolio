import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Users, Database, Layers, Cloud } from "lucide-react"; // Lucide icons
import profilePic from "../../assets/Rithik-Profile.jpg";

const timelineData = [
  {
    icon: <Code2 className="text-purple-400 w-8 h-8" />,
    title: "Full-Stack Development",
    text: "Design and develop secure, scalable, and user-friendly web applications using modern front-end and back-end technologies.",
  },
  {
    icon: <Cpu className="text-purple-400 w-8 h-8" />,
    title: "Performance & Usability",
    text: "Transform ideas into smooth, high-performing, and interactive digital experiences focusing on responsiveness and UX.",
  },
  {
    icon: <Users className="text-purple-400 w-8 h-8" />,
    title: "Team Collaboration",
    text: "Work efficiently with cross-functional teams, ensuring clear communication and streamlined development workflows.",
  },
  {
    icon: <Database className="text-purple-400 w-8 h-8" />,
    title: "Data & UX Integration",
    text: "Bridge the gap between data and design by building full-stack applications that translate complex information into intuitive interfaces.",
  },
  {
    icon: <Layers className="text-purple-400 w-8 h-8" />,
    title: "Tech Stack Expertise",
    text: "Proficient in React, Node.js, Express, MongoDB, and Python — building modern, scalable, and maintainable solutions.",
  },
  {
    icon: <Cloud className="text-purple-400 w-8 h-8" />,
    title: "Cloud & Continuous Learning",
    text: "Exploring cloud technologies such as AWS practices — continuously adapting to emerging tools and frameworks to stay ahead in modern development.",
  },
];

const About = () => {
  return (
    <section className="relative min-h-screen px-6 sm:px-12 py-16 border-b border-neutral-800 bg-transparent">
      {/* Heading */}
      {/* <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-bold text-white mb-12"
      >
       
      </motion.h1> */}
      <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="my-20 text-center text-4xl"
            >
              <span className="text-neutral-500">What</span> I Do
            </motion.h1>
      {/* Profile */}
      <div className="flex justify-center mb-14">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 blur-xl opacity-25 rounded-full"></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full ring-4 ring-purple-500 shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      {/* Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-6xl mx-auto">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative p-8 border border-neutral-700 rounded-2xl bg-transparent backdrop-blur-md hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-600/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
