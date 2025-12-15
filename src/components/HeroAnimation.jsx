import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImage from '../assets/images/bg-image.svg'
import { Link } from 'react-router';
import Navbar from './Navbar';
import { ContactRound, Facebook, Instagram, Linkedin, Phone, Twitter } from 'lucide-react';
import Marquee from "react-fast-marquee";
// Register the useGSAP plugin
gsap.registerPlugin(useGSAP);

import newsLogo92 from "../assets/images/92News.png"
import asiaLifestyleLogo from "../assets/images/asiaLifestyle.jfif"
import azerbaijanLogo from "../assets/images/azerbaijan.png"
import dinNewsLogo from "../assets/images/dinNews.webp";
import fashionLogo from "../assets/images/fashion.png"
import osafLogo from "../assets/images/osafDaily.svg"
import starAsiaLogo from "../assets/images/starAsia.png"

const HeroAnimation = () => {
    const container = useRef(null);

    // useGSAP hook runs the animation when the component mounts
    useGSAP(() => {
        // Select the elements we want to animate
        // Using classes makes targeting clean and specific
        const offLetters = gsap.utils.toArray(".letter-off", container.current);
        const gridWord = container.current.querySelector(".word-grid");
        const fadeIn = gsap.utils.toArray(".fade-in", container.current);

        // Hide "OFF" letters by moving them down and setting opacity to 0
        gsap.set(fadeIn, { opacity: 0 });
        gsap.set(offLetters, { width: "0px" });
        // Hide "GRID" word by moving it to the right and setting opacity to 0
        gsap.set(gridWord, { width: '0%' });
        // === Animation Timeline ===
        const tl2 = gsap.timeline({
            delay: 0.4
        })
        // 1. Animate "OFF" letters into view

        tl2.to(offLetters, {
            width: "auto",
            duration: 1,
            // stagger: 0.1, // Animate each letter 0.1s after the previous one
            ease: 'power4.inOut',
        });

        // 2. Animate "GRID" word into view
        tl2.to(gridWord, {
            width: "auto",
            duration: 1.4,
            delay: 0.5,
            ease: 'power4.inOut',
        });
        gsap.to(fadeIn, {
            opacity: 1,
            duration: 1.4,
            delay: 2.1,
            ease: 'power4.inOut',
        });

    }, { scope: container }); // Scope GSAP selectors to this component

    return (

        <div ref={container} className="w-full min-h-screen flex flex-col justify-center items-center  bg-repeat  relative select-none overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <header className=" fade-in absolute top-0 left-0 right-0 p-3 lg:px-8 lg:py-6 flex justify-between items-center text-sm font-semibold tracking-widest ">
                <Link to={"/"}>IMRAN RAJ</Link>
                <div className='flex items-center gap-6'>
                    {/* <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/contact"}>LET'S WORK</Link> */}
                    <div className='flex items-center gap-2'>
                        <a href='/' className='hover:text-purple-500 transition-all duration-300'><Instagram size={22} /></a>
                        <a href='/' className='hover:text-blue-500 transition-all duration-300'><Facebook size={22} /></a>
                        <a href='/' className='hover:text-blue-500 transition-all duration-300'><Linkedin size={22} /></a>
                        <Link to={"/contact"}>
                            <button
                                className="bg-white/5 hover:bg-white/10 px-3 py-3 font-semibold cursor-pointer rounded-full transition-all duration-300 ml-4 flex items-center gap-2 border border-gray-600"
                            >
                                <ContactRound size={20}/>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* The main container for the text elements */}
            <div className="text-center">
                <h1 className="text-6xl sm:text-6xl md:text-[130px]   flex items-center  justify-center">
                    {/* We wrap each part in a span with a specific class for easy targeting */}
                    <span className="  ">[</span>

                    {/* We need an inner container for "OFF" to hide the overflow */}
                    <div className="inline-flex overflow-hidden letter-off items-center font-normal">
                        IMRAN
                    </div>

                    <span className="  ">]</span>

                    {/* We need another inner container for "GRID" */}
                    <div className="inline-flex overflow-hidden word-grid">
                        <span className=" inline-block font-normal">RAJ</span>
                    </div>
                </h1>
                <p className='fade-in max-w-4xl mx-auto pt-10'>Imran Raj is a journalist, influencer, and digital creator showcasing Pakistan’s fashion, culture, and lifestyle while offering expert PR marketing, media placements, and impactful promotional services that help brands stand out.</p>
            </div>

            {/* <div className="w-full mt-32 fade-in opacity-0 bg-white/20">
                <Marquee
                    direction="right" // right → left movement
                    speed={80}
                    gradient={false}
                    pauseOnHover={false}
                    delay={2.3} // GSAP animation ke baad hi start hoga
                >
                    <img className="w-40 mx-10" src={newsLogo92} alt="92News Logo" />
                    <img className="w-32 mx-10" src={asiaLifestyleLogo} alt="AsiaLifestyle Logo" />
                    <img className="w-44 mx-10" src={azerbaijanLogo} alt="azerbaijan Logo" />
                    <img className="w-40 mx-10" src={dinNewsLogo} alt="dinNews Logo" />
                    <img className="w-32 mx-10" src={fashionLogo} alt="fashion Logo" />
                    <img className="w-36 mx-10" src={osafLogo} alt="osaf Logo" />
                    <img className="w-60 mx-10" src={starAsiaLogo} alt="starAsia Logo" />
                </Marquee>
            </div> */}
        </div>
    );
};

export default HeroAnimation;