import React from "react";
import { ABOUT_TEXT } from "../../constants";
import profilePic from "../../assets/rithikrajaprofilepic.jpg";
import { motion } from "framer-motion";
import Stats from "../Stats/Stats";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        What I <span className="text-neutral-500">Do</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap"
      >
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic} alt="About" />
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            {/* <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p> */}
            <motion.ol
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6 relative border-s border-gray-200 dark:border-gray-700"
            >
              <motion.li
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                class="mb-10 ms-4"
              >
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Craft user-friendly and secure web applications from design to
                  deployment, leveraging both front-end and back-end expertise.
                </h3>
              </motion.li>
              <motion.li
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                class="mb-10 ms-4"
              >
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  I translate ideas into interactive experiences.
                </h3>
              </motion.li>
              <motion.li
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                class="mb-10 ms-4"
              >
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  I bring excellent communication and collaboration skills to
                  every project.
                </h3>
              </motion.li>

              <motion.li
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                class="mb-10 ms-4"
              >
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  I bridge the gap between data and user experience, utilizing
                  full-stack development to build user-centric web application.
                </h3>
              </motion.li>

              <motion.li
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                class="mb-10 ms-4"
              >
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white ">
                  I am proficient in HTML, CSS, JavaScript, React, Node.js,
                  Python, MongoDB, and Express.
                </h3>
              </motion.li>
            </motion.ol>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
