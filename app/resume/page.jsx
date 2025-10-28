"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaJava,
  FaAws,
  FaLinux,
  FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiKubernetes,
  SiCplusplus,
  SiGit,
  SiTerraform,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiJenkins,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

// Data setup
const experience = {
  title: "Experience",
  items: [
    {
      company: "Community Dreams Foundation",
      position: "Software Engineer",
      duration: "July 2025 - Present",
      logo: "/assets/logos/logo.png",
    },
    // {
    //   company: "Northeastern University",
    //   position: "Student Software Developer",
    //   duration: "Jan. 2024 - May. 2025",
    //   logo: "/assets/logos/tamu.webp",
    // },
    {
      company: "Enthral.ai",
      position: "Software Engineer",
      duration: "Jul. 2021 - June 2022",
      logo: "/assets/logos/download.jpeg",
    },
    {
      company: "Intelliwsift",
      position: "Software Engineer",
      duration: "July 2022 - August 2023",
      logo: "/assets/logos/download.png",
    },
  ],
};

const education = {
  title: "My education",
  items: [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Computer Science",
      duration: "Aug. 2023 - May 2025",
      logo: "/assets/logos/images.png",
    },
    {
      institution: "Pune Institute of Computer Technology",
      degree: "BE in Computer Engineering",
      duration: "Aug. 2017 - June 2021",
      logo: "/assets/logos/pict.webp",
    },
  ],
};

const skillsCategories = {
  languages: {
    title: "Languages",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5", color: "#E44D26" },
      { icon: <FaCss3 />, name: "CSS3", color: "#264DE4" },
      { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
      { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
      { icon: <FaJava />, name: "Java", color: "#ED8B00" },
    ],
  },
  frameworks: {
    title: "Frameworks and Software tools",
    skills: [
      { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38B2AC" },
      { icon: <SiDjango />, name: "Django", color: "#092E20" },
      { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
      { icon: <SiTerraform />, name: "Terraform", color: "#7B42BC" },
      { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
      { icon: <SiGit />, name: "Git", color: "#F05032" },
      { icon: <SiJenkins />, name: "Jenkins", color: "#D24939" },
    ],
  },
  cloudDatabases: {
    title: "Cloud & databases",
    skills: [
      { icon: <FaAws />, name: "AWS", color: "#FF9900" },
      { icon: <FaCloud />, name: "Azure", color: "#0078D4" },
      { icon: <FaCloud />, name: "GCP", color: "#4285F4" },
      { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
      { icon: <FaLinux />, name: "Linux", color: "#FCC624" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
      { icon: <SiSqlite />, name: "SQLite", color: "#003B57" },
    ],
  },
};

// Main component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="mt-5 h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-white/5 hover:border-accent/20"
                      >
                        <div className="w-[80px] h-[80px] bg-white/5 rounded-xl p-2 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 mb-2">
                          <Image
                            src={item.logo}
                            alt={item.company}
                            width={60}
                            height={60}
                            className="rounded object-contain"
                          />
                        </div>
                        <div className="bg-accent/10 px-4 py-1 rounded-full text-accent font-medium text-sm">
                          {item.duration}
                        </div>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80 font-medium hover:text-accent transition-colors">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="mt-5 h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-white/5 hover:border-accent/20"
                      >
                        <div className="w-[80px] h-[80px] bg-white/5 rounded-xl p-2 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/10 mb-2">
                          <Image
                            src={item.logo}
                            alt={item.institution}
                            width={60}
                            height={60}
                            className="rounded object-contain"
                          />
                        </div>
                        <div className="bg-accent/10 px-4 py-1 rounded-full text-accent font-medium text-sm">
                          {item.duration}
                        </div>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80 font-medium hover:text-accent transition-colors">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-gradient bg-gradient-to-r from-accent to-white">My Skills</h3>
                </div>
                <style jsx global>{`
                  .text-gradient {
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                `}</style>
                {Object.values(skillsCategories).map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-3xl font-bold mt-8 mb-6 px-4 py-2 inline-block rounded-lg bg-accent/10 text-accent">
                      {category.title}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {category.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="flex flex-col items-center justify-center w-full h-[180px] bg-[#232329] rounded-xl duration-300 border border-white/5 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                          style={{
                            background: `linear-gradient(135deg, #232329 0%, #232329 70%, ${skill.color}15 100%)`
                          }}
                        >
                          <div 
                            className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 transform hover:scale-110 transition-all duration-300"
                            style={{ 
                              backgroundColor: `${skill.color}20`,
                              boxShadow: `0 0 15px ${skill.color}30` 
                            }}
                          >
                            <div className="text-5xl" style={{ color: skill.color }}>{skill.icon}</div>
                          </div>
                          <p className="font-medium text-white/90 capitalize">
                            {skill.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;