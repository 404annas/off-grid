import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router';
import ImageGrid from '../../components/ImageGrid';
import Portfolio from '../../components/Portfolio';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
// Register the useGSAP plugin
gsap.registerPlugin(useGSAP);

const About = () => {
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
        <>
            <div ref={container} className="container mx-auto  min-h-screen flex flex-col justify-center items-center  bg-repeat  relative select-none overflow-hidden pt-10"

            >
                <header className=" fade-in absolute top-0 left-0 right-0 p-3 lg:py-8 px-0 flex justify-between items-center text-sm font-semibold tracking-widest ">
                    <Link to={"/"}>IMRAN RAJ</Link>
                    <div className='flex items-center gap-2'>
                        <Link className='pr-4' to={"/contact"}>LET'S WORK</Link>
                        <a href='/' className='hover:text-purple-500 transition-all duration-300'><Instagram size={22} /></a>
                        <a href='/' className='hover:text-blue-500 transition-all duration-300'><Facebook size={22} /></a>
                        <a href='/' className='hover:text-blue-500 transition-all duration-300'><Linkedin size={22} /></a>
                    </div>
                </header>

                {/* The main container for the text elements */}
                <div className="text-center  ">
                    <h1 className="text-6xl sm:text-7xl md:text-[130px]   flex items-center  justify-center">
                        {/* We wrap each part in a span with a specific class for easy targeting */}
                        <span className="  ">[</span>

                        {/* We need an inner container for "OFF" to hide the overflow */}
                        <div className="inline-flex overflow-hidden letter-off items-center font-normal">
                            ABOUT
                        </div>

                        <span className="  ">]</span>

                        {/* We need another inner container for "GRID" */}
                        <div className="inline-flex overflow-hidden word-grid">
                            <span className="font-normal inline-block">ME</span>
                        </div>
                    </h1>

                    <p className='text-base max-w-5xl py-10 fade-in'>Journalist, influencer, and digital creator dedicated to showcasing the best of Pakistan’s fashion, culture, and lifestyle. Passionate about media, PR, travel, and food, I create content that inspires, informs, and connects people with the vibrant stories of our country. Always exploring new trends, flavors, and experiences to share with my audience.</p>

                    <Link to={"/contact"} className=" fade-in mt-8 text-sm  opacity-80 ">GET IN TOUCH</Link>
                </div>
            </div>
            <Portfolio />
            <ImageGrid />
        </>
    );
};

export default About;