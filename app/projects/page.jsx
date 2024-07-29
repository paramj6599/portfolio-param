"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub} from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '1',
        category: "Full Stack, Machine Learning",
        title: "Gradvisor",
        description: "A recommendation system that suggests universities based on user's preferences and academic profile.",
        stack: [{name: "Html5"}, {name: "Css3"}, {name: "React.js"}, {name: "Python"}, {name: "Django"}, {name: "SQLite"}],
        image: '/assets/work/Gradvisor.png',
        github: 'https://mohitsarin-tamu.github.io/Gradvisor/',
    },
    {
        num: '2',
        category: "Full Stack",
        title: "EpicCaptions",
        description: "Web application to generate epic subtitles for all your videos",
        stack: [{name: "React.js"}, {name: "Next.js"}, {name: "TypeScript"}, {name: "Node.js"},{name: "FFmpeg"}],
        image: '/assets/work/subtitle_3.png',
        github: 'https://github.com/ShaunakJoshi1407/epicCaptions',
    },
    {
        num: '3',
        category: "Full Stack",
        title: "Salon Management and Appointment Booking System",
        description: "A web application to manage salon services and appointments",
        stack: [{name: "Html5"}, {name: "Javascript"}, {name: "Java"}, {name: "JSP"}, {name: "MySQL"}, {name: "jQuery"}],
        image: '/assets/work/salon_3.webp',
        github: 'https://github.com/ShaunakJoshi1407/Salon-Management-System',
    },
    {
        num: '4',
        category: "Data Analysis, Machine Learning",
        title: "Startup Funding Analysis",
        description: "A data analysis project to analyze the funding trends of startups",
        stack: [{name: "Python"}, {name: "Visualization"}, {name: "Machine Learning"}, {name: "Exploratory Data Analysis"}],
        image: '/assets/work/startup_2.webp',
        github: 'https://github.com/ShaunakJoshi1407/Startup-Funding-Analysis',
    },
    {
        num: '5',
        category: "Machine Learning, NLP",
        title: "Sentiment Analysis of Yelp Review dataset",
        description: "A machine learning model to predict the sentiment of Yelp reviews",
        stack: [{name: "Python"}, {name: "Visualization"}, {name: "Machine Learning"}],
        image: '/assets/work/yelp.webp',
        github: 'https://github.com/ShaunakJoshi1407/Yelp_Sentiment_Analysis',
    },
    {
        num: '6',
        category: "Machine Learning",
        title: "Blindness Detection using Machine Learning",
        description: "A machine learning model to detect blindness in patients",
        stack: [{name: "Python"}, {name: "OpenCV"}, {name: "PyTorch"}],
        image: '/assets/work/blindness.webp',
        github: 'https://github.com/ShaunakJoshi1407/Blindness-Detection',
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;

        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1 , 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[60px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num*/}
                            <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category*/}
                            <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent 
                            transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project description*/}
                            <p className="text-white/70 text-[18px]">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* github project button */}
                                <Link href={project.github} className="icon-hover">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                            justify-center items-center group">
                                                <BsGithub className="text-white text-xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                        spaceBetween ={30}
                        slidesPerView = {1}
                        className = "xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange} 
                    >
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex 
                                    justify-center items-center bg-pink-50/20">
                                        {/* Overlay */}
                                        <div className="absolute top-0 bottom-0 
                                        w-full h-full bg-black/10 z-10">

                                        </div>
                                        {/* Image */}
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={project.image} 
                                                alt="" 
                                                fill 
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        {/* slider buttons */}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
                        justify-between xl:w-max xl:justify-none" 
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                        w-[33px] h-[33px] flex justify-center items-center transition-all"/>
                    </Swiper>
                </div>
                </div>
            </div>
        </motion.section>

    );
}

export default Work;