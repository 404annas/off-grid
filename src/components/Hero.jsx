// src/components/Hero.jsx

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the useGSAP plugin
gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef();
    const text = "[SHAHRUKH]KAZIM";

    // A more focused set of characters for a "digital glitch" feel.
    // The block character '█' is repeated to increase its chances of appearing.
    const glitchChars = "█▓▒░/\\_-+=*<>[]";

    useGSAP(() => {
        const letters = gsap.utils.toArray("span", container.current);

        const handleMouseEnter = () => {
            // Don't run animation if it's already running
            if (gsap.isTweening(letters)) {
                return;
            }

            const tl = gsap.timeline();

            letters.forEach((letter) => {
                const originalChar = letter.dataset.char;

                // A dummy object to control the animation's progress.
                const dummy = { frame: 0 };

                // The main tween for each letter's glitch effect.
                const tween = gsap.to(dummy, {
                    duration: 0.4, // Shorter, faster duration for a glitch effect
                    frame: 10, // Number of "glitch frames"
                    ease: "power2.inOut",

                    // onUpdate is the core of the effect
                    onUpdate: () => {
                        // Pick a random character from our glitch set
                        const randomGlitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];

                        // Randomly shift the letter's position (the "glitch")
                        const randomX = gsap.utils.random(-15, 15, 1);
                        const randomY = gsap.utils.random(-15, 15, 1);

                        // Randomly flicker the opacity
                        const randomOpacity = gsap.utils.random(0.4, 1);

                        // Use GSAP's quickSetter for high performance updates
                        gsap.set(letter, {
                            innerText: randomGlitchChar,
                            x: randomX,
                            y: randomY,
                            opacity: randomOpacity,
                        });
                    },

                    // onComplete restores the letter to its original state
                    onComplete: () => {
                        gsap.to(letter, {
                            innerText: originalChar,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 0.1, // Quick snap back to original
                            ease: "power1.in",
                        });
                    },
                });

                // Add each letter's tween to the main timeline with a stagger
                tl.add(tween, "<0.04");
            });
        };

        container.current.addEventListener('mouseenter', handleMouseEnter);

        // Cleanup function
        return () => {
            if (container.current) {
                container.current.removeEventListener('mouseenter', handleMouseEnter);
            }
        };

    }, { scope: container });

    return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center font-mono relative select-none">
            <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center text-sm font-semibold tracking-widest">
                <div>SHAHRUKH KAZIM</div>
                <div>LET'S WORK TOGETHER</div>
            </header>

            <div ref={container} className="text-center">
                <h1 className="text-7xl md:text-[150px] font-thin tracking-[0.2em] cursor-pointer">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            data-char={char}
                            className="inline-block"
                        >
                            {char}
                        </span>
                    ))}
                </h1>
                <p className="mt-8 text-sm tracking-[0.4em]">SCROLL TO EXPLORE</p>
            </div>
        </div>
    );
};

export default Hero;