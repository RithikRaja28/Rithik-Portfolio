import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Project = () => {
  return (
    <section className="relative border-b border-neutral-800 py-24 px-6 md:px-12 lg:px-20 bg-transparent">
      {/* Heading */}
      <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl"
                  >
                    <span className="text-neutral-500">Featured</span> Projects
                  </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-3xl border border-neutral-700/50 bg-transparent hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all duration-500 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 font-medium text-sm hover:underline"
                >
                  Visit Project <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-between p-6 flex-grow">
              {/* Title and Description */}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 bg-purple-500/10 backdrop-blur-sm hover:bg-purple-600/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gradient Glow Hover */}
             
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
