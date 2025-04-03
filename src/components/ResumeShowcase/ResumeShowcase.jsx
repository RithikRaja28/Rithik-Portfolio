import React from "react";

const ResumeShowcase = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Side: Resume Overview */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            My <span className="text-purple-400">Resume</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            A detailed insight into my expertise, experience, and education. My
            journey in software development spans across multiple technologies,
            building full-stack applications, AI-powered solutions.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-white">
            Key Highlights
          </h3>
          <ul className="mt-4 space-y-3 text-gray-400 text-base md:text-lg">
            <li>🚀 Full-Stack & MERN Development</li>
            <li>📱 React Native & Mobile App Development</li>
            <li>🤖 AI-Powered Solutions & Automation</li>
            <li>🛠️ Cloud & DevOps (AWS, Docker)</li>
          </ul>
        </div>

        {/* Right Side: Resume Preview */}
        <div className="relative w-full">
          <iframe
            src="https://drive.google.com/file/d/10_bduR0ra0rAZkO2AVhZKMFw2duuE4iv/preview"
            className="w-full h-[100vh] sm:h-[100vh] lg:h-[100vh] rounded-lg shadow-lg border border-gray-300"
            style={{
              minHeight: "450px", // Ensures minimum height on smaller screens
              height: "55vh", // Default height
              maxHeight: "100vh", // Prevents overflow on large screens
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ResumeShowcase;
