// src/components/AnimationHero.jsx

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the useGSAP plugin
gsap.registerPlugin(useGSAP);

const AnimationHero = () => {
    const container = useRef();
    const text = "[SHAHRUKH]KAZIM";

    // A set of characters to scramble through
    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/\\!@#$%^&*()[]{}";

    // useGSAP() is the modern, recommended way to use GSAP in React.
    // It automatically handles cleanup, preventing memory leaks.
    useGSAP(() => {
        // GSAP Selector function to easily select descendants
        const q = gsap.utils.selector(container.current);
        const letters = q("span");

        // The entire animation is handled within this one event handler
        const handleMouseEnter = () => {
            // Don't run animation if it's already running
            if (gsap.isTweening(letters)) {
                return;
            }

            const tl = gsap.timeline();

            letters.forEach((letter) => {
                // Get the original character from a data attribute
                const originalChar = letter.dataset.char;

                // A dummy object to animate a 'frame' property.
                // We use its onUpdate callback to change the letter's text.
                const dummy = { frame: 0 };

                tl.to(
                    dummy,
                    {
                        // Animate for 0.5 seconds for each letter
                        duration: 0.5,
                        // Scramble through 10 "frames" or character changes
                        frame: 10,
                        ease: "none",
                        // onUpdate is called on every tick of the animation
                        onUpdate: () => {
                            const randomIndex = Math.floor(Math.random() * scrambleChars.length);
                            letter.innerText = scrambleChars[randomIndex];
                        },
                        // onComplete is called when this specific tween finishes
                        onComplete: () => {
                            letter.innerText = originalChar;
                        },
                    },
                    // Position parameter: creates a beautiful, staggered, overlapping effect.
                    // Each letter's animation starts 0.03 seconds after the previous one began.
                    "<0.03"
                );
            });
        };

        container.current.addEventListener('mouseenter', handleMouseEnter);

        // Cleanup function to remove event listener
        return () => {
            if (container.current) {
                container.current.removeEventListener('mouseenter', handleMouseEnter);
            }
        };

    }, { scope: container }); // Scope the GSAP context to our component

    return (
        // Main container for the hero section
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center font-mono relative select-none">

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center text-sm font-semibold tracking-widest">
                <div>SHAHRUKH KAZIM</div>
                <div>LET'S WORK</div>
            </header>

            {/* The Animated Text */}
            <div ref={container} className="text-center">
                <h1 className="text-7xl md:text-[150px] font-thin tracking-[0.2em] cursor-pointer">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            data-char={char} // Store original character for restoring it later
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

export default AnimationHero;