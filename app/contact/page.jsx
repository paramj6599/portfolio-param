"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: "+1 979-344-3680",
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: "shaunakjoshi@tamu.edu",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: "Bryan, Texas, 77801",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1 , 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row-reverse gap-[60px] xl:gap-[120px]'>
                    {/* info */}
                    <div className="flex-1 flex flex-col items-start order-1 xl:order-none mb-8 xl:mb-0 mt-10" >
                        <h1 className="text-3xl font-bold text-accent">Open for opportunities.</h1>
                        <p className="mb-4">Let's connect and build something awesome together!</p>
                        <ul className='mt-5 flex flex-col gap-10'>
                            {info.map((item,index) => {
                                return (
                                    <li key={index} className='flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] /
                                        text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[28px]'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{item.title}</p>
                                            <h3 className='text-xl'>{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* form */}
                    <div className="xl:w-[45%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            {/* input */}
                            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6"> 
                                <Input type="text" name="firstname" placeholder="First Name"/>
                                <Input type="text" name="lastname" placeholder="Last Name"/>
                                <Input type="email" name="email" placeholder="Email"/>
                                <Input type="text" name="phone" placeholder="Phone No."/>
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Full Stack Development</SelectItem>
                                        <SelectItem value="cst">Backend Development</SelectItem>
                                        <SelectItem value="mst">Cloud Engineering</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your message here"
                            />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;