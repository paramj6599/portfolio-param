"use client";

import Social from "@/components/Social";

const AboutMe = () => {
  return (
    <section className="min-h-screen text-white p-12 pt-3">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-white/60">About Me</span>
        </h1>
            <p className="text-xl">
              I'm currently working as a <span className="text-accent">Software Developer</span> at <span className="text-accent">Community Dreams Foundation</span>, where I build scalable backend systems and data-driven applications. My work focuses on developing robust APIs, automating data pipelines, and improving system efficiency, which has helped streamline operations and reduce manual reporting efforts. I recently completed my <span className="text-accent">Master’s in Computer Science</span> from <span className="text-accent">Northeastern University</span>, following my Bachelor’s in <span className="text-accent">Computer Engineering</span> from <span className="text-accent">Pune Institute of Computer Technology</span>.
            </p>

            <p className="text-xl mt-6 mb-4">
              Throughout my experience, I’ve focused on building reliable and scalable backend systems. At <span className="text-accent">Intelliswift</span>, I contributed to financial transaction services by developing high-performance APIs, optimizing database queries, and improving system scalability using containerized microservices. At <span className="text-accent">Enthralltech</span>, I worked on a large-scale Learning Management System where I designed modular backend services, implemented efficient database schemas, and improved system performance and maintainability. I enjoy solving complex engineering problems that directly improve system reliability and user experience.
            </p>

            <p className="text-xl mt-6 mb-4">
              I’m currently seeking opportunities where I can design and build <span className="text-accent">scalable distributed systems</span>, work on <span className="text-accent">backend infrastructure</span>, and contribute to data-intensive applications. I’m particularly interested in roles that involve system design, performance optimization, and cloud-native technologies, where I can continue to grow as a backend engineer and deliver meaningful impact.
            </p>

            <br />

        <div className="mb-8 xl:mb-0">
          <Social
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent 
              hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;