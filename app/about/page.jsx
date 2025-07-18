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
          I’m currently working as a <span className="text-accent">Software Engineer</span> at <span className="text-accent">Hewlett Packard Enterprise</span> in Minneapolis, MN, where I am working with the DevSecOps team and mostly contributing to CI and Security projects. I recently completed my <span className="text-accent">Master’s in Computer Science</span> from <span className="text-accent">Texas A&M University</span> in May 2025, following a Bachelor’s degree in <span className="text-accent">Information Technology</span> from <span className="text-accent">Savitribai Phule Pune University</span>.
        </p>

        <p className="text-xl mt-6 mb-4">
          My previous roles include working as a Student Assistant at <span className="text-accent">Texas A&M</span> and an Associate Member of Technical Staff at <span className="text-accent">Platform9 Systems</span>. Across these experiences, I’ve designed robust APIs, automated Kubernetes cluster deployment, enhanced error diagnostics in cloud-native systems, and contributed to open-source CLI tooling.
        </p>

        <p className="text-xl mt-6 mb-4">
          I’m currently exploring new opportunities in <span className="text-accent">Distributed Systems</span> and <span className="text-accent">DevOps</span> roles. If you’re working on something exciting or hiring in these areas, I’d love to connect!
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