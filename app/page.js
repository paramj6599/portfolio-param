"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import React, { useState, useEffect } from 'react';
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  // Keep this for direct download if needed
  const resumeDownloadLink = "https://drive.google.com/file/d/1XeN9r6JTYStMCZNG8dAd6zdRWYr66MQ9/view?usp=drive_link"
  return <section className="h-full py-6 md:py-0">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/*text*/}
        <div className="text-center xl:text-left order-2 xl:order-none">
          {/* Personal tagline/mission statement */}
          <p className="text-xl font-light italic text-white/80 mb-10">
            I build <span className="text-accent">microservices</span> and manage <span className="text-accent">cloud infrastructure</span> that actually work at scale. Focused on creating reliable distributed systems that stand the test of time and deliver real business value.
          </p>
          
          {/* Create more vertical space before buttons on mobile */}
          <div className="h-6 md:h-10"></div>
          
          {/* button and socials - with improved spacing */}
          <div className="flex flex-col xl:flex-row items-center gap-10 mt-8 mb-4">
            <Link href="/resume-view" className="button-hover w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex uppercase items-center justify-center gap-2 w-full sm:w-auto px-8"
              >
                <span>Resume</span>
                <FiDownload className="text-xl" />
              </Button>
            </Link>
            <div className="mt-8 mb-10 xl:mb-0 xl:mt-0">
              <Social 
              containerStyles="flex gap-6" 
              iconStyles="w-11 h-11 border border-accent rounded-full flex 
              justify-center items-center text-accent text-lg hover:bg-accent 
              hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-12 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
  </section>
};

export default Home;