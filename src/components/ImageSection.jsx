import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// [Urdu/English Comment] Form ke icons import kiye (Imported icons for the form)
import { User, Mail, MessageSquare, Search, PenTool, BarChart3, Rocket, Sparkles, UserRound, Users2, CalendarCheck2, Send } from "lucide-react";
import { SiGooglegemini } from "react-icons/si";
import solutionImag1 from "../assets/images/solution1.avif"
import solutionImag2 from "../assets/images/solution2.avif"
import solutionImag3 from "../assets/images/solution3.webp"
import solutionImag4 from "../assets/images/solution4.avif"

import { ChartNoAxesCombined, Monitor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "PR Marketing",
    description:
      "We build strong brand narratives through strategic PR campaigns that enhance credibility, visibility, and audience trust across digital and traditional platforms.",
    image: solutionImag4,
    icon: <ChartNoAxesCombined size={30} />,
    points: [
      "Brand positioning & messaging",
      "Campaign planning & execution",
      "Reputation management",
    ],
  },
  {
    id: 2,
    title: "Media Placements",
    description:
      "We secure high-impact media placements across trusted platforms to ensure your brand reaches the right audience with maximum authority.",
    image: solutionImag1,
    icon: <Monitor size={30} />,
    points: [
      "News & digital publications",
      "TV & online media coverage",
      "Press release distribution",
    ],
  },
  {
    id: 3,
    title: "Influencer Marketing",
    description:
      "We connect brands with relevant influencers to create authentic campaigns that drive engagement, awareness, and real audience impact.",
    image: solutionImag3,
    icon: <Users2 size={30} />,
    points: [
      "Influencer collaborations",
      "Content-driven promotions",
      "Audience engagement growth",
    ],
  },
];

// [Urdu/English Comment] Glassy Form Modal component (Glassy Form Modal component)
const GlassyFormModal = ({ isOpen, onClose, serviceTitle }) => {
  if (!isOpen) return null;

  return (
    // [Urdu/English Comment] Modal background aur overlay (Modal background and overlay)
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center backdrop-blur-xs">
      {/* Modal content area */}
      <div className="bg-white/10 py-8 px-6 rounded-xl backdrop-blur-lg border border-white/20 shadow-2xl max-w-2xl w-full mx-4 relative text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl cursor-pointer text-white hover:text-gray-300 transition"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-2">Book: {serviceTitle}</h3>
        <p className="mb-6 text-white/80 text-sm">Fill out the details, and we will contact you shortly.</p>

        <form className="space-y-5">
          {/* Name Field */}
          <div className="relative flex items-center border border-white/30 rounded-lg overflow-hidden bg-white/5 focus-within:border-white transition-all">
            <UserRound size={20} className="text-white/60 ml-3 shrink-0" />
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-transparent outline-none placeholder-white/50 text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative flex items-center border border-white/30 rounded-lg overflow-hidden bg-white/5 focus-within:border-white transition-all">
            <Mail size={20} className="text-white/60 ml-3 shrink-0" />
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full p-3 bg-transparent outline-none placeholder-white/50 text-white"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative flex items-start border border-white/30 rounded-lg overflow-hidden bg-white/5 focus-within:border-white transition-all">
            <MessageSquare size={20} className="text-white/60 ml-3 mt-4 shrink-0" />
            <textarea
              placeholder="Your Message/Inquiry"
              rows="4"
              className="w-full p-3 bg-transparent outline-none placeholder-white/50 text-white resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2 justify-center"
          >
            Submit Inquiry <Send size={20}/>
          </button>
        </form>

      </div>
    </div>
  );
};


const ImageSection = () => {
  const containerRef = useRef(null);
  const squareRef = useRef(null);
  // [Urdu/English Comment] Counter aur Button dono ke liye references (References for both Counter and Button)
  const counterRef = useRef(null);
  const buttonRef = useRef(null);

  const [activeStep, setActiveStep] = useState(1);
  // [Urdu/English Comment] Modal open/close state (State for modal open/close)
  const [isFormOpen, setIsFormOpen] = useState(false);
  // [Urdu/English Comment] Konsi service select hui, woh store karega (Stores which service was selected)
  const [selectedService, setSelectedService] = useState("");
  // [Urdu/English Comment] Circle par hover track karne ke liye state (State to track hover on the circle)
  const [isCircleHovered, setIsCircleHovered] = useState(false);


  // [Urdu/English Comment] Button click par form open karne ka function (Function to open form on button click)
  const handleBookService = (serviceTitle) => {
    // [Urdu/English Comment] Agar serviceTitle pass na ho toh activeStep use karein (If serviceTitle is not passed, use activeStep)
    const currentServiceTitle = steps.find(step => step.id === activeStep)?.title || "Service";
    setSelectedService(serviceTitle || currentServiceTitle);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedService("");
  };


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logic to update the number when scrolling
      const cards = gsap.utils.toArray(".solution-card");

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center", // Update when card hits center
          end: "bottom center",
          onEnter: () =>
            setActiveStep(Math.min(index + 1, steps.length)),
          onEnterBack: () =>
            setActiveStep(Math.min(index + 1, steps.length)),
        });
      });

      // [Urdu/English Comment] Square ko hamesha clockwise rotate karne ke liye animation (Animation to rotate the square infinitely clockwise)
      gsap.to(squareRef.current, {
        rotation: 360,
        duration: 10, // Slow rotation
        ease: "none",
        repeat: -1, // Infinite repeat
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  // [Urdu/English Comment] Hover par Counter aur Button ke beech smooth transition (Smooth transition between Counter and Button on hover)
  useEffect(() => {
    if (counterRef.current && buttonRef.current) {
      if (isCircleHovered) {
        // [Urdu/English Comment] Counter ko fade out aur upar move karein (Fade out and move counter up)
        gsap.to(counterRef.current, {
          opacity: 0,
          y: -10,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.inOut",
          pointerEvents: "none",
        });
        // [Urdu/English Comment] Button ko fade in aur center mein move karein (Fade in and move button to center)
        gsap.to(buttonRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.1, // Thora delay takay counter pehle move kare
          pointerEvents: "auto",
        });
      } else {
        // [Urdu/English Comment] Button ko fade out aur neeche move karein (Fade out and move button down)
        gsap.to(buttonRef.current, {
          opacity: 0,
          y: 10,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.inOut",
          pointerEvents: "none",
        });
        // [Urdu/English Comment] Counter ko fade in aur original position par wapas layein (Fade in and return counter to original position)
        gsap.to(counterRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.1, // Thora delay takay button pehle move kare
          pointerEvents: "auto",
        });
      }
    }
  }, [isCircleHovered]);


  return (
    <section
      ref={containerRef}
      className="bg-[#0F0F0F] text-white w-full font-sans relative pb-10 sm:pb-20"
    >
      <div className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto">

        {/* =========================================
            LEFT COLUMN (Sticky Info & Counter)
           ========================================= */}
        <div className="w-full md:w-1/2 relative z-20 ">
          <div className="sticky top-0 sm:h-screen flex flex-col justify-between px-4 lg:px-10 sm:border-r border-white/20">

            {/* Top: Process Label & Title */}
            <div className="pt-10 sm:block hidden">
              <div className="flex items-center gap-3 mb-6">
              </div>
              <h2 className="text-4xl lg:text-5xl uppercase  font-bold leading-none tracking-tight">
                SERVICES
              </h2>
            </div>

            {/* Bottom: The White Circle Counter */}
            <div className="pb-10 sm:pb-20">

              {/*                    THE CIRCLE CONTAINER - ADDING HOVER HANDLERS */}
              <div
                className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full bg-white flex flex-col items-center justify-center relative shadow-2xl mx-auto cursor-pointer group"
                onMouseEnter={() => setIsCircleHovered(true)} // [Urdu/English Comment] Hover par state true (Set state true on hover)
                onMouseLeave={() => setIsCircleHovered(false)} // [Urdu/English Comment] Mouse hatne par state false (Set state false when mouse leaves)
              >

                {/* The Inner Black Ring */}
                <div className="absolute inset-2 sm:inset-2.5 rounded-full border-[6px] border-black"></div>

                {/* The Content Container (for counter and button overlap) */}
                <div className="relative z-10 flex flex-col items-center justify-center text-black h-full w-full">

                  {/* The Counter Text */}
                  <div ref={counterRef} className="flex flex-col items-center">
                    <span className="text-xl font-bold tracking-normal uppercase mb-1">SERVICE</span>
                    <span className="text-4xl font-bold tracking-tighter">
                      {activeStep} <span className="text-4xl font-bold text-black">/ 3</span>
                    </span>
                  </div>

                  {/* [Urdu/English Comment] Animated Book Service Now Button - Absolute position center mein (Absolute position in the center) */}
                  <button
                    ref={buttonRef} // GSAP reference
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents clicking the circle container accidentally
                      handleBookService(steps.find(step => step.id === activeStep)?.title);
                    }}
                    // Initial state for GSAP: hidden and slightly scaled down, centered position
                    className="absolute bg-black text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-black/90 cursor-pointer flex items-center gap-2"
                    style={{ opacity: 0, transform: 'scale(0.9) translateY(10px)', pointerEvents: 'none' }}
                  >
                    Book Service Now <CalendarCheck2 size={20}/>
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN (Intro & Stacking Cards)
           ========================================= */}
        <div className="w-full md:w-1/2 relative">

          {/* TOP INTRO SECTION */}
          <div className="relative border-l-0.5 border-white/20 sm:pt-10 md:pt-16 flex items-center px-6">
            <p className="font-semibold text-[#E9E9E9] leading-relaxed">
              Helping brands build visibility and credibility through strategic PR marketing, trusted media placements, and impactful influencer collaborations.
            </p>
          </div>

          {/* STACKING CARDS LOOP */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              // Removed border-b and updated color to border-yellow-400
              className="solution-card sticky top-0 py-12 w-full flex flex-col justify-center bg-[#0F0F0F] border-l-0.5 border-white/20"
              style={{ zIndex: index + 1 }}
            >
              <div className="px-10 max-w-2xl">

                {/* Icon Circle */}
                {/* <img className="h-20 w-20 border border-[#454545] p-3 rounded-full" src={step.image} alt="Image" /> */}

                <p className="border border-[#454545] p-3 rounded-full w-20 h-20 flex items-center justify-center">{step.icon}</p>

                {/* Title */}
                <h3 className="text-3xl uppercase pt-6 pb-2 font-bold tracking-tight leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#DAE9DA] font-medium text-base max-w-xl leading-relaxed mb-10 pb-0">
                  {step.description}
                </p>

                {/* List Items with Sparkle Icon */}
                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-4 text-white">
                      <SiGooglegemini size={20} className="text-white shrink-0 fill-white" />
                      <span className="tracking-wide text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* [Urdu/English Comment] Button par click handler lagaya (Added click handler to the button) */}
                <button
                  onClick={() => handleBookService(step.title)}
                  className="mt-6 bg-white/5 hover:bg-white/10 px-4 py-2 font-semibold cursor-pointer rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  Book Service <CalendarCheck2 size={20}/>
                </button>

                {/* Short Yellow Bottom Border */}
                {/* [Urdu/English Comment] Card ke neeche chhota (short) yellow border (Short yellow border at the bottom of the card) */}
                {index !== steps.length - 1 && (
                  <div className="mt-12 -mb-12 -ml-10 w-[114%] h-0.5 bg-white"></div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* [Urdu/English Comment] Glassy Form Modal ko render kiya (Rendered the Glassy Form Modal) */}
      <GlassyFormModal
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        serviceTitle={selectedService}
      />
    </section>
  );
};

export default ImageSection;