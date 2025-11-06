import React from "react";

import './App.css';

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001d3d] via-[#003566] to-[#001d3d] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">Nimantha Madushan</h1>
        <div className="space-x-6 text-lg">
          <a href="#about" className="hover:text-[#ffd60a] transition">About</a>
          <a href="#projects" className="hover:text-[#ffd60a] transition">Projects</a>
          <a href="#contact" className="hover:text-[#ffd60a] transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Software Engineer | Full Stack Developer
        </h2>
        <p className="text-gray-300 max-w-2xl mb-8">
          Passionate about building scalable web applications and crafting
          elegant user experiences with React, Spring Boot, and MySQL.
        </p>
        <a
          href="#projects"
          className="bg-[#ffd60a] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          I’m Nimantha — a passionate Software Engineering undergraduate from the
          University of Colombo School of Computing. I specialize in full-stack
          web development using React and Spring Boot, and I love solving
          real-world problems through technology.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-[#002855]">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* ArtAura */}
          <div className="bg-[#001d3d] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h4 className="text-2xl font-semibold mb-2">🎨 ArtAura</h4>
            <p className="text-gray-300 mb-4">
              A creative platform for artists built using React, Spring Boot, and
              MySQL.
            </p>
            <a
              href="#"
              className="text-[#ffd60a] font-semibold hover:underline"
            >
              View Details
            </a>
          </div>

          {/* EduFlex */}
          <div className="bg-[#001d3d] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h4 className="text-2xl font-semibold mb-2">📘 EduFlex</h4>
            <p className="text-gray-300 mb-4">
              A teacher-student platform for attendance and marks management using
              PHP MVC.
            </p>
            <a
              href="#"
              className="text-[#ffd60a] font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <div className="flex justify-center space-x-8 text-3xl">
          <a href="mailto:nimantham.lk@gmail.com" className="hover:text-[#ffd60a]">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/nimantham" className="hover:text-[#ffd60a]">
            <FaLinkedin />
          </a>
          <a href="https://github.com/NimanthaM" className="hover:text-[#ffd60a]">
            <FaGithub />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        © 2025 Nimantha Madushan | Built with ❤️ using React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
