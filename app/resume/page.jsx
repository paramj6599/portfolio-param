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
    FaCloud 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDjango, SiMysql, SiKubernetes, SiCplusplus, SiGit, SiTerraform, SiMongodb, SiPostgresql, SiSqlite} from "react-icons/si";

//experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    description: "lorem",
    items: [
        {
            company: "Texas A&M University",
            position: "Graduate Student Assistant",
            duration: "Jan. 2024 - July 2024",
        },
        {
            company: "Platform9 Systems",
            position: "Associate Member of Technical Staff",
            duration: "Jul. 2021 - June 2023",
        },
        {
            company: "Platform9 Systems",
            position: "Software Engineering Intern",
            duration: "Feb. 2021 - May 2021",
        },
    ],
};

//education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "lorem",
    items: [
        {
            institution: "Texas A&M University",
            degree: "Master of Science in Computer Science",
            duration: "Aug. 2023 - Present",
        },
        {
            institution: "University of Pune",
            degree: "BE in Information Technology",
            duration: "Aug. 2017 - June 2021",
        },
    ],
};

//skills data
const skillsCategories = {
    languages: {
        title: "Languages",
        skills: [
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3 />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaPython />, name: "Python" },
            { icon: <SiCplusplus />, name: "C++" },
            { icon: <FaJava />, name: "Java" }
        ],
    },
    frameworks: {
        title: "Frameworks and Software tools",
        skills: [
            { icon: <FaReact />, name: "React.js" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiDjango />, name: "Django" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <SiTerraform />, name: "Terraform" },
            { icon: <SiKubernetes />, name: "Kubernetes" },
            { icon: <SiGit />, name: "Git" }
        ],
    },
    cloudDatabases: {
        title: "Cloud & databases",
        skills: [
            { icon: <FaAws />, name: "AWS" },
            { icon: <FaCloud />, name: "Azure" },
            { icon: <FaCloud />, name: "GCP" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <FaLinux />, name: "Linux" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiSqlite />, name: "SQLite" }
        ],
    },
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
            <Tabs 
                defaultValue="experience" 
                className="flex flex-col xl:flex-row gap-[60px]"
            >
            <TabsList className="flex felx-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            {/*content*/}
            <div className="min-h-[70vh] w-full">
                {/*experience*/}
                <TabsContent value="experience" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <ScrollArea className="mt-5 h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                                        >
                                            <span className="text-accent/70">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.position}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                {/*education*/}
                <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <ScrollArea className="mt-5 h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item, index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                                        >
                                            <span className="text-accent/70">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.degree}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                {/*skills*/}
                <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">My Skills</h3>
                    </div>
                    {Object.values(skillsCategories).map((category, idx) => (
                        <div key={idx}>
                            <h4 className="text-3xl font-bold mt-6 mb-4">{category.title}</h4>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {category.skills.map((skill, index) => (
                                    <li key={index} className="flex flex-col items-center justify-center w-full h-[180px] bg-[#232329] hover:text-accent rounded-xl duration-300">
                                        <div className="text-6xl">{skill.icon}</div>
                                        <p className="mt-2 text-white capitalize">{skill.name}</p>
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