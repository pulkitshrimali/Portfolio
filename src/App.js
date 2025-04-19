import React from 'react';
import { motion } from 'framer-motion';
import profilePic from "./assets/profile.jpeg";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeIn = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } }
};
const riseUp = delay => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: easing } }
});

const skills = [
  "💻 Web Development: HTML, CSS, JavaScript", 
  "🎮 Game Development: Python, Java",
  "🤖 Machine Learning: PyTorch, CNN, KNN",
  "🛠️ Tools: Git, Gradle, GitHub Pages",
  "🤝 Soft Skills: Communication, Teamwork, Time Management"
];

const projects = [
  {
    title: "ImageDenoising‑CNN",
    desc: "Denoised grayscale images (PSNR 31.15 dB Gaussian, 33.03 dB Speckle).",
    url: "https://github.com/pulkitshrimali/ImageDenoising-CNN"
  },
  {
    title: "Pneumonia Detection",
    desc: "Chest X‑ray KNN vs CNN classifier.",
    url: "https://github.com/pulkitshrimali/ML_XRay_Pneumonia_Detection"
  },
  {
    title: "Java Pacman",
    desc: "Strategy/State/Decorator patterns in a Pacman game.",
    url: "https://github.com/pulkitshrimali/Java-Pacman-Game"
  },
  {
    title: "Tower Defense Game",
    desc: "Processing + “BOMB” extension feature.",
    url: "https://github.com/pulkitshrimali/TowerDefense-Game-Java"
  }
];

export default function App() {
  return (
    <div className="w-screen h-screen overflow-x-scroll snap-x snap-mandatory flex">
      {/* Intro */}
      <section className="snap-center w-screen h-screen flex flex-col justify-center items-center px-6">
      +       {/* your profile image */}
+       <motion.img
         src={profilePic}
         alt="Pulkit Shrimali"
         className="w-80 h-120 md:w-80 md:h-80 sqaure-full mb-4 shadow-lg"
         variants={fadeIn}
         animate="visible"
       />
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-green-400 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Pulkit Shrimali
        </motion.h1>
        <motion.p
          className="mt-4 text-center text-gray-300 max-w-lg"
          variants={riseUp(0.3)}
          initial="hidden"
          animate="visible"
        >
          I'm a software engineer passionate about Machine Learning, Game Development, and Web Technologies. Pursuing Bachelor's Of Software Engineering(Honours) at University of Sydney.
        </motion.p>
      </section>

      {/* Skills */}
      <section className="snap-center w-screen h-screen flex items-center justify-center px-6">
        <div className="max-w-xl w-full">
          <motion.h2
            className="text-4xl font-bold text-green-400 mb-6"
            variants={riseUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map((s, i) => {
        // split on the first ":" to separate label & details
        const [label, ...rest] = s.split(':');
        const details = rest.join(':').trim(); 
        return (
          <motion.div
            key={i}
            className="p-4 bg-gray-800 rounded-lg transform transition hover:scale-105"
            variants={riseUp(0.4 + i * 0.1)}
            initial="hidden"
            animate="visible"
          >
            {/* label in green */}
            <span className="text-green-400 font-semibold block">
              {label.trim()}
            </span>
            {/* details in white */}
            <span className="text-white block mt-1">
              {details}
            </span>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>

      {/* Projects */}
      <section className="snap-center w-screen h-screen flex items-center justify-center px-6">
        <div className="max-w-xl w-full">
          <motion.h2
            className="text-4xl font-bold text-green-400 mb-6"
            variants={riseUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            Projects
          </motion.h2>
          <div className="space-y-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="card"
                variants={riseUp(0.4 + i * 0.1)}
                initial="hidden"
                animate="visible"
              >
                <div className="font-semibold text-green-300">{p.title}</div>
                <div className="mt-1 text-gray-200">
                  {p.desc}{" "}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="snap-center w-screen h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <motion.h2
            className="text-4xl font-bold text-green-400 mb-6"
            variants={riseUp(0.2)}
            initial="hidden"
            animate="visible"
          >
            Contact
          </motion.h2>
          <div className="space-y-2 text-gray-200">
            {[
              "✉️ pulkitshrimali05@gmail.com",
              "📍 Pyrmont, NSW 2009",
              "📞 0401 570 796"
            ].map((line, i) => (
              <motion.div
                key={i}
                className="transform transition hover:scale-105"
                variants={riseUp(0.4 + i * 0.1)}
                initial="hidden"
                animate="visible"
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
