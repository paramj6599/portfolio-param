"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import React, { useState, useEffect } from 'react';

import { TypeAnimation } from "react-type-animation";

const titles = ["Software Engineer", "Full Stack Engineer", "App Developer"];

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const resumeLink = "https://drive.google.com/file/d/1WC-JIx7kj5gXRrXZv3atzckDWbRGTcQp/view?usp=drive_link";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((current) => (current + 1) % titles.length);
    }, 12000); // Change title every 12 seconds

    return () => clearInterval(intervalId);
  }, []);

  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/*text*/}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h2 className="h2 mb-6">
            <span className="text-accent">Shaunak Joshi</span>
          </h2>
          <div className="mb-6 text-[16px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a</span>
              <TypeAnimation 
                sequence={[
                  "Full Stack Engineer",
                  2000,
                  "Cloud Engineer",
                  2000,
                  "App Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
          </div>
          <p className="max-w-[500px] mb-15 text-white/90 mt-10">
            Software Developer who wants to create amazing user-centred digital products!
          <br/>
          </p>
          {/* button and socials */}
          <br/>
          <br/>
          <br/>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex uppercase items-center gap-2"
              >
                <span>Resume</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Social 
              containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent 
              hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
  </section>
};

export default Home;