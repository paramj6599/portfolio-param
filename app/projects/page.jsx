"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "../../projectData";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "ML", "Full-Stack", "Cloud"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="min-h-screen px-6 py-12 pt-32 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-accent text-white font-medium"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="bg-[#111] rounded-lg shadow-lg overflow-hidden border border-white/10 hover:border-accent transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-accent/90 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 px-2 py-1 rounded text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={project.page}
                    className="text-sm font-semibold bg-white text-black px-4 py-2 rounded hover:bg-accent hover:text-white transition"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-white/60">No {activeCategory} projects found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;