// FloatingCTA.js

import React from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Assuming you have react-icons installed

const FloatingCTA = () => {
    // [Urdu/English Comment] WhatsApp number jise wa.me link mein use kiya jayega. (+92 333 8805362)
    const phoneNumber = "+92 000 0000000";

    return (
        <div
            // Fixed positioning for bottom right corner (Har page aur scroll par dikhega)
            className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
            style={{ pointerEvents: "auto" }}
        >
            {/* MAIL BUTTON (Email button) */}
            <a
                href="mailto:imranraj@gmail.com"
                className="w-12 h-12 bg-[#23396C] hover:bg-[#1c2e58] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Email"
            >
                <Mail size={22} />
            </a>

            {/* WHATSAPP BUTTON (WhatsApp button) */}
            <a
                // [Urdu/English Comment] wa.me link banaya gaya (wa.me link constructed)
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
        </div>
    );
};

export default FloatingCTA;