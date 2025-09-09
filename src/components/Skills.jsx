import React from "react";

export default function Skills() {
  const skills = [
    "Java",
    "Data Structure And Alogrithms",
    "Python",
    "C",
    "Artificial Intelligence",
    "Database Management System(DBMS)",
    "Spring Boot",
    "REST APIs",
    "SQL (MySQL/Postgres)",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
