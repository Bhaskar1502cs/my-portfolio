import Skills from "./components/Skills";
import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hi, I’m Bhaskar Gowda C S 👋
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Java Developer • Problem Solver • Tech Enthusiast
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">To-Do App (Java)</h3>
            <p className="mt-2 text-gray-600">
              Console-based task manager with add/delete/complete features.
            </p>
            <a href="#" className="mt-3 inline-block text-blue-600">
              GitHub →
            </a>
          </article>
          <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Canteen Pre-order System</h3>
            <p className="mt-2 text-gray-600">
              Pre-book meals; menu browsing, real-time tracking, digital payments.
            </p>
            <a href="#" className="mt-3 inline-block text-blue-600">
              Case Study →
            </a>
          </article>
          <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Any Other Project</h3>
            <p className="mt-2 text-gray-600">
              Brief one-liner about what it does and your role.
            </p>
            <a href="#" className="mt-3 inline-block text-blue-600">
              Demo →
            </a>
          </article>
        </div>
      </section>
      <Skills />


      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700">
          Email: <a className="text-blue-600" href="mailto:bhaskargowdacs@gmail.com">your.email@example.com</a>
        </p>
        <p className="mt-2">
          <a className="text-blue-600" href="https://github.com/Bhaskar1502cs/" target="_blank">GitHub</a> ·{" "}
          <a className="text-blue-600" href="https://www.linkedin.com/in/bhaskargowdacs" target="_blank">LinkedIn</a> ·{" "}
          <a className="text-blue-600" href="/resume.pdf" target="_blank">Resume (PDF)</a>
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        © {new Date().getFullYear()} Bhaskar Gowda C S. All rights reserved.
      </footer>
    </div>
  );
}
