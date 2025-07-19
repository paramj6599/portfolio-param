"use client";

import {motion} from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    return (
        <div className='w-full h-full relative flex justify-center items-center'>
            <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity: 1,
                    transition:{delay: 1, duration: 0.4, ease: "easeIn"},
                }}
                className='relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] xl:w-[480px] xl:h-[480px]'
            >
                <Image 
                    src="/assets/President_2.JPG" 
                    priority 
                    quality={100} 
                    fill
                    alt="Shaunak Joshi" 
                    className='object-contain'
                />
            </motion.div>
        </div>
    );
};

export default Photo;