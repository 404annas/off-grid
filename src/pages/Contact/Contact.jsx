import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// Animation variants (reusable from other components)
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

// SVG Icon for the button
const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M13 1H4.6M13 1V9.4" stroke="black" strokeWidth="1.5" />
    </svg>
);


const Contact = () => {
    const [selectedService, setSelectedService] = useState('Design');
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const services = ['PR Marketing', 'Media Placements', 'Influencer Marketing'];
    const budgets = ['10K-20K', '20K-30K', '50K+'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullFormData = {
            ...formData,
            service: selectedService,
            budget: selectedBudget,
        };
        // Yahan aap form submission logic (e.g., API call) add kar sakte hain
    };

    return (
        <div className="bg-[#121212] text-[#e0e0e0]  min-h-screen ">

            {/* Header */}
            <header className="w-full text-sm px-3 py-6 lg:p-8 flex justify-between items-center  font-semibold tracking-widest ">
                <Link to={"/"}>IMRAN RAJ</Link>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2'>
                        <a href='/' className='hover:text-purple-500 transition-all duration-300'><Instagram size={22} /></a>
                        <a href='/' className='hover:text-blue-500 transition-all duration-300'><Facebook size={22} /></a>
                        <a href='/' className='hover:text-blue-500 transition-all duration-300'><Linkedin size={22} /></a>
                    </div>
                </div>

            </header>

            <main className="max-w-5xl mx-auto max-md:py-10 px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col ">
                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-normal leading-none">
                            Contact me
                        </motion.h1>
                        <motion.div variants={staggerContainer} className="mt-16">
                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-sm font-medium tracking-widest text-gray-400 mb-3">EMAIL ADDRESS</h3>
                                    <a href="mailto:imranraj@gmail.com" className="text-lg hover:text-white">imranraj@gmail.com</a>
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-sm font-medium tracking-widest text-gray-400 mb-3">PHONE</h3>
                                    <a href="tel:+92 000 0000000" className="text-lg hover:text-white">+92 000 0000000</a>
                                </motion.div>
                            </div>
                            <motion.div variants={fadeInUp}>
                                <h3 className="text-sm font-medium tracking-widest text-gray-400 mb-3">ADDRESS</h3>
                                <p className="text-lg leading-relaxed">
                                    Abc 210<br />
                                    12 XYZ Place<br />
                                    Karachi, Pakistan<br />
                                    3000 Pakistan
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div variants={fadeInUp}>
                        <form onSubmit={handleSubmit}>
                            {/* Service Section */}
                            <div className="mb-12">
                                <label className="block text-sm font-medium tracking-widest text-gray-400 mb-4">SERVICE</label>
                                <div className="flex flex-wrap gap-4">
                                    {services.map(service => (
                                        <button
                                            type="button"
                                            key={service}
                                            onClick={() => setSelectedService(service)}
                                            className={`rounded-full border px-6 py-1.5 text-sm transition-colors duration-300 ${selectedService === service
                                                ? 'bg-white text-black border-white'
                                                : 'border-gray-600 hover:border-white'
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Budget Section */}
                            {/* <div className="mb-6">
                                <label className="block text-sm font-medium tracking-widest text-gray-400 mb-4">BUDGET</label>
                                <div className="flex flex-wrap gap-4">
                                    {budgets.map(budget => (
                                        <button
                                            type="button"
                                            key={budget}
                                            onClick={() => setSelectedBudget(budget)}
                                            className={`rounded-full border px-6 py-1.5 text-sm transition-colors duration-300 ${selectedBudget === budget
                                                ? 'bg-white text-black border-white'
                                                : 'border-gray-600 hover:border-white'
                                                }`}
                                        >
                                            {budget}
                                        </button>
                                    ))}
                                </div>
                            </div> */}

                            {/* Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <label className="block text-sm font-medium tracking-widest text-gray-400 mb-2">NAME</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium tracking-widest text-gray-400 mb-2">E-MAIL</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your e-mail" className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none" />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium tracking-widest text-gray-400 mb-2">MESSAGE</label>
                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." rows="1" className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none resize-none"></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center group gap-3">
                                <button type="submit" className="bg-white text-black font-medium tracking-widest rounded-lg py-4 pl-8 pr-12 text-sm relative z-10 cursor-pointer">
                                    LET'S CONNECT
                                </button>
                                <div className="bg-white text-black rounded-full w-13 h-13 flex items-center justify-center group-hover:-translate-x-10 z-10 group-hover:rounded-lg transition-transform duration-300 ">
                                    <div className={"group-hover:rotate-45 transition-transform duration-300"}>

                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>

                        </form>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
};

export default Contact;