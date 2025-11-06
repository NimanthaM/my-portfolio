import React from "react";

function App() {
  return (
    <div className="bg-[#001d3d] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-[#000814] shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-400">Nimantha Madushan</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-semibold mb-4">Software Engineer | Full Stack Developer</h2>
        <p className="max-w-2xl text-gray-300 mb-6">
          Passionate about building scalable web applications and crafting elegant user experiences.
        </p>
        <a
          href="#projects"
          className="bg-yellow-400 text-[#001d3d] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-16 bg-[#001233]">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="max-w-3xl text-gray-300 leading-relaxed">
          Hi, I'm Nimantha — a passionate Software Engineering undergraduate from the University of Colombo
          School of Computing. I specialize in React, Spring Boot, and MySQL. I enjoy solving problems,
          building full-stack apps, and continuously learning new technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-16">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#001233] p-6 rounded-2xl shadow-lg hover:shadow-yellow-400 transition">
            <h4 className="text-xl font-semibold mb-3">🎨 ArtAura</h4>
            <p className="text-gray-300 mb-4">
              A creative platform for artists built using React, Spring Boot, and MySQL.
            </p>
            <a href="#" className="text-yellow-400 hover:underline">View Details</a>
          </div>

          <div className="bg-[#001233] p-6 rounded-2xl shadow-lg hover:shadow-yellow-400 transition">
            <h4 className="text-xl font-semibold mb-3">📚 EduFlex</h4>
            <p className="text-gray-300 mb-4">
              A teacher-student platform for attendance and marks management using PHP MVC.
            </p>
            <a href="#" className="text-yellow-400 hover:underline">View Details</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-16 bg-[#000814]">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="text-gray-300 mb-4">📧 Email: nimantham.lk@gmail.com</p>
        <p className="text-gray-300 mb-4">🔗 LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-yellow-400 hover:underline">linkedin.com/in/yourprofile</a></p>
        <p className="text-gray-300">💻 GitHub: <a href="https://github.com/yourgithub" className="text-yellow-400 hover:underline">github.com/yourgithub</a></p>
      </section>

      <footer className="text-center py-6 text-gray-400 bg-[#000814]">
        © {new Date().getFullYear()} Nimantha Madushan | Built with ❤️ using React
      </footer>
    </div>
  );
}

export default App;

