import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold">Bhaskar Gowda C S</a>
        
        {/* Navigation Links */}
        <div className="hidden sm:flex gap-6 text-sm">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

          {/* Official Links */}
          <a href="mailto:bhaskargowdacs@gmail.com" className="hover:text-blue-600">Email</a>
          <a href="https://github.com/Bhaskar1502cs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://https://www.linkedin.com/in/bhaskargowdacs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Resume</a>
        </div>
      </div>
    </nav>
  );
}
