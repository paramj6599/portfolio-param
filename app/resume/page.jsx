"use client";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython, FaDocker, FaJava, FaAws, FaLinux
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDjango, SiMysql, SiKubernetes, SiCplusplus, SiGit, SiTerraform} from "react-icons/si";

//experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    description: "lorem",
    items: [
        {
            company: "Texas A&M University",
            position: "Graduate Student Assistant",
            duration: "Jan. 2024 - Present",
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
const skills = {
    title: "My skills",
    description: "lorem",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon: <FaCss3 />,
            name: "css3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        { 
            icon: <SiTerraform />, 
            name: "Terraform"
        },
        { 
            icon: <SiCplusplus />, 
            name: "C++" 
        },
        { 
            icon: <SiGit />, 
            name: "Git" 
        },
        {
            icon: <FaAws />,
            name: "AWS",
        },
        {
            icon: <FaLinux />,
            name: "linux",
        },
        {
            icon: <FaDocker />,
            name: "docker",
        },
        {
            icon: <SiDjango />,
            name: "django",
        },
        {
            icon: <SiMysql />,
            name: "mysql",
        },
        {
            icon: <SiKubernetes />,
            name: "kubernetes",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
                        <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => (
                                <li key={index} className="flex flex-col items-center justify-center w-full h-[180px] bg-[#232329] hover:text-accent rounded-xl duration-300">
                                <div className="text-6xl">{skill.icon}</div>
                                <p className="mt-2 text-white capitalize">{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </TabsContent>
            </div>
            </Tabs>
        </div>
      </motion.div>
    );
};

export default Resume;