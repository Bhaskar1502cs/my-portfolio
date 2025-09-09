import React from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold">Bhaskar Gowda C S</a>
        
        {/* Navigation Links */}
        <div className="hidden sm:flex gap-6 text-sm items-center">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

          {/* Official Links with Actual Text */}
          <a 
            href="mailto:bhaskargowdacs@gmail.com" 
            className="hover:text-blue-600 flex items-center gap-1"
          >
            <Mail size={18} /> bhaskargowdacs@gmail.com
          </a>

          <a 
            href="https://github.com/Bhaskar1502cs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 flex items-center gap-1"
          >
            <Github size={18} /> github.com/Bhaskar1502cs
          </a>

          <a 
            href="https://www.linkedin.com/in/bhaskargowdacs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 flex items-center gap-1"
          >
            <Linkedin size={18} /> linkedin.com/in/bhaskargowdacs
          </a>

          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 flex items-center gap-1"
          >
            <FileText size={18} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
