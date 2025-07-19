"use client";

import { Button } from '@/components/ui/button';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: "+1 979-344-3680",
        link: "tel:+19793443680"
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: "shaunakjoshi1407@gmail.com",
        link: "mailto:shaunakjoshi1407@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: "Minneapolis, MN",
        link: "https://maps.google.com/?q=Minneapolis,Minnesota"
    },
    {
        icon: <FaLinkedin />,
        title: 'LinkedIn',
        description: "Shaunak Joshi",
        link: "https://linkedin.com/in/shaunakjoshi"
    },
    {
        icon: <FaGithub />,
        title: 'GitHub',
        description: "ShaunakJoshi1407",
        link: "https://github.com/ShaunakJoshi1407"
    },
];

// Helper function to format email for different screen sizes
const formatEmail = (email) => {
    // Create a more readable version for small screens by adding a line break
    const [username, domain] = email.split('@');
    
    return (
        <>
            <span className="hidden sm:inline">{email}</span>
            <span className="inline sm:hidden">
                {username}<wbr />@<wbr />{domain}
            </span>
        </>
    );
};

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1 , 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className='py-8 sm:py-10 md:py-12'
        >
            <div className="container mx-auto">
                <div className='flex flex-col items-center justify-center max-w-4xl mx-auto'>
                    {/* Header */}
                    <div className="text-center mb-10 sm:mb-16 px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                            <span className="text-accent">Get in Touch</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
                        </p>
                    </div>
                    
                    {/* Contact info cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full px-4 sm:px-0">
                        {info.map((item, index) => (
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                key={index}
                                className={`group w-full ${item.title === 'Email' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <motion.div 
                                    className={`flex flex-col items-center ${item.title === 'Email' ? 'p-3 sm:p-5 md:p-6' : 'p-4 sm:p-6 md:p-8'} bg-[#27272c] rounded-xl border border-white/5 group-hover:border-accent/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/5 h-full`}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.98 }} // Add feedback on tap for mobile
                                >
                                    <div className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] bg-[#1c1c22] text-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent group-hover:text-[#1c1c22] transition-all duration-300'>
                                        <div className='text-2xl sm:text-3xl'>{item.icon}</div>
                                    </div>
                                    <p className='text-white/60 font-medium text-sm sm:text-base'>{item.title}</p>
                                    {item.title === 'Email' ? (
                                        <h3 className="text-xs sm:text-sm md:text-base text-center mt-1 sm:mt-2 group-hover:text-accent transition-all break-all overflow-hidden">
                                            {formatEmail(item.description)}
                                        </h3>
                                    ) : (
                                        <h3 className="text-base sm:text-lg md:text-xl text-center mt-1 sm:mt-2 group-hover:text-accent transition-all break-words">
                                            {item.description}
                                        </h3>
                                    )}
                                </motion.div>
                            </a>
                        ))}
                    </div>
                    
                    {/* Resume button */}
                    <div className="mt-12 sm:mt-16 w-full px-4 sm:px-0">
                        <Link href="/resume-view" className="w-full sm:w-auto block">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                            >
                                <FaDownload /> View My Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;