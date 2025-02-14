import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="my-20 text-center text-4xl"
            >
              Projects
            </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {PROJECTS.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="relative bg-opacity-10 backdrop-blur-lg bg-white/10 p-6 rounded-3xl shadow-lg border border-white/20 hover:border-purple-500 transition-all duration-300 w-full h-[450px] flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4 shadow-lg"
            />
            <h6 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h6>
            <p className="text-neutral-400 text-sm mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-purple-400 font-medium hover:underline"
            >
              Visit Project →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
