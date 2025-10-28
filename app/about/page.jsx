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
          I'm currently working as a <span className="text-accent">Software Engineer</span> at <span className="text-accent">Community Dreams Foundation</span> in Minneapolis, MN, where I'm driving tangible business outcomes through DevSecOps initiatives. My work on CI pipelines and security automation has directly improved deployment reliability and reduced security vulnerabilities across our product teams. I recently completed my <span className="text-accent">Master's in Computer Science</span> from <span className="text-accent">Northeastern University</span> in May 2025, following a Bachelor's degree in <span className="text-accent">Computer Engineering</span> from <span className="text-accent">Pune Institute of Computer Technology</span>.
        </p>

        <p className="text-xl mt-6 mb-4">
          Throughout my career, I've consistently translated technical expertise into business value. At <span className="text-accent">Intelliswift</span>, my work automating Kubernetes cluster deployments reduced setup time by 70% and eliminated costly configuration errors. At <span className="text-accent">Enthral.ai</span>, I designed APIs and error diagnostic systems that helped our research team meet critical deadlines and improved system uptime. I believe great engineering isn't just about writing code, it's about solving real problems that impact the bottom line.
        </p>

        <p className="text-xl mt-6 mb-4">
          I'm currently seeking roles where I can architect <span className="text-accent">Distributed Systems</span> and implement <span className="text-accent">DevOps</span> practices that drive measurable business results. If your organization values both technical excellence and business impact, I'd love to discuss how my background in scalable infrastructure and automation could benefit your team.
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