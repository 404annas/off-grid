// Step 1: Sabhi images ko import karein
import grid1 from "../assets/images/grid-1.jpg";
import grid2 from "../assets/images/grid-2.jpg";
import grid3 from "../assets/images/grid-3.jpg";
import grid4 from "../assets/images/grid-4.jpg";
import grid5 from "../assets/images/grid-5.jpg";
import grid6 from "../assets/images/grid-6.jpg";
import grid7 from "../assets/images/grid-7.jpg";
import grid8 from "../assets/images/grid-8.jpg";
import grid9 from "../assets/images/grid-9.jpg";
import grid10 from "../assets/images/grid-10.jpg";
import grid11 from "../assets/images/grid-11.jpg";
import grid12 from "../assets/images/grid-12.jpg";
import grid13 from "../assets/images/grid-13.jpg";
import grid14 from "../assets/images/grid-14.jpg";
import grid15 from "../assets/images/grid-15.jpg";
import grid16 from "../assets/images/grid-16.jpg";
import grid17 from "../assets/images/grid-17.jpg";
import grid18 from "../assets/images/grid-18.jpg";

import gridImage1 from "../assets/gridImages/grid1.jpeg"
import gridImage2 from "../assets/gridImages/grid2.jpg"
import gridImage3 from "../assets/gridImages/grid3.jfif"
import gridImage4 from "../assets/gridImages/grid4.jpg"
import gridImage5 from "../assets/gridImages/grid5.jpg"
import gridImage6 from "../assets/gridImages/grid6.webp"
import gridImage7 from "../assets/gridImages/grid7.webp"
import gridImage8 from "../assets/gridImages/gird8.webp"
import gridImage9 from "../assets/gridImages/grid9.jpg"
import gridImage10 from "../assets/gridImages/grid10.webp"
import gridImage11 from "../assets/gridImages/grid11.webp"
import gridImage12 from "../assets/gridImages/grid12.jpg"
import gridImage13 from "../assets/gridImages/grid13.webp"
import gridImage14 from "../assets/gridImages/grid14.jpg"
import gridImage15 from "../assets/gridImages/grid15.webp"
import gridImage16 from "../assets/gridImages/grid16.jpg"
import gridImage17 from "../assets/gridImages/grid17.jpg"
import gridImage18 from "../assets/gridImages/grid18.jpg"
import gridImage19 from "../assets/gridImages/grid19.webp"
import gridImage20 from "../assets/gridImages/grid20.jpg"
import gridImage21 from "../assets/gridImages/grid21.webp"
import gridImage22 from "../assets/gridImages/grid22.jpg"
import gridImage23 from "../assets/gridImages/grid23.jpg"
import gridImage24 from "../assets/gridImages/grid24.webp"
import gridImage25 from "../assets/gridImages/grid25.webp"
import gridImage26 from "../assets/gridImages/grid26.webp"
import gridImage27 from "../assets/gridImages/grid27.webp"
import gridImage28 from "../assets/gridImages/grid28.jpg"
import gridImage29 from "../assets/gridImages/grid29.jpg"
import gridImage30 from "../assets/gridImages/grid30.jfif"
import gridImage31 from "../assets/gridImages/grid31.jpg"
import gridImage32 from "../assets/gridImages/grid32.jfif"
import gridImage33 from "../assets/gridImages/grid33.jpg"
import gridImage34 from "../assets/gridImages/grid34.jfif"
import gridImage35 from "../assets/gridImages/grid35.jfif"
import gridImage36 from "../assets/gridImages/grid36.jfif"

// Common description jo har project mein use hoga
const commonDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Tortor consequat id porta nibh venenatis cras. Sem et tortor consequat id porta interdum varius. Et ligula ullamcorper malesuada proin libero nunc consequat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Non arcu risus quis varius. Commodo odio aenean sed. Tortor dignissim convallis aenean et tortor at risus. Urna nunc id cursus metus aliquam eleifend mi in nulla."
];

// Step 2: Array of objects banayein (unique IDs ke saath)
const projectsData = [
    {
        id: 1,
        imgSrc: gridImage1,
        client: "Innovate Inc.",
        date: "January 2024",
        category: "Branding",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 2,
        imgSrc: gridImage2,
        client: "QuantumLeap",
        date: "February 2024",
        category: "UX/UI Design",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 3,
        imgSrc: gridImage3,
        client: "Artisan Goods",
        date: "March 2024",
        category: "E-commerce",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 4,
        imgSrc: gridImage4,
        client: "HealthFirst",
        date: "April 2024",
        category: "Web Development",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 5,
        imgSrc: gridImage5,
        client: "EcoSolutions",
        date: "May 2024",
        category: "Branding",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 6,
        imgSrc: gridImage6,
        client: "NextGen Gaming",
        date: "June 2024",
        category: "Motion Graphics",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 7,
        imgSrc: gridImage7,
        client: "FoodieFinds",
        date: "July 2024",
        category: "Mobile App",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 8,
        imgSrc: gridImage8,
        client: "Starlight Studios",
        date: "August 2024",
        category: "Web Design",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 9,
        imgSrc: gridImage9,
        client: "TravelWise",
        date: "September 2024",
        category: "UX/UI Design",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 10,
        imgSrc: gridImage10,
        client: "CodeCrafters",
        date: "October 2024",
        category: "Branding",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 11,
        imgSrc: gridImage11,
        client: "Zenith Fitness",
        date: "November 2024",
        category: "E-commerce",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 12,
        imgSrc: gridImage12,
        client: "Future Homes",
        date: "December 2024",
        category: "Web Development",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 13,
        imgSrc: gridImage13,
        client: "PixelPerfect",
        date: "January 2025",
        category: "Photography",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 14,
        imgSrc: gridImage14,
        client: "SoundWave",
        date: "February 2025",
        category: "Mobile App",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 15,
        imgSrc: gridImage15,
        client: "UrbanBloom",
        date: "March 2025",
        category: "Branding",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 16,
        imgSrc: gridImage16,
        client: "DataDriven",
        date: "April 2025",
        category: "Dashboard UI",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 17,
        imgSrc: gridImage17,
        client: "Mindful Moments",
        date: "May 2025",
        category: "Web Design",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 18,
        imgSrc: gridImage18,
        client: "The Daily Brew",
        date: "June 2025",
        category: "E-commerce",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 19,
        imgSrc: gridImage19, // Images are repeated as per your original array structure
        client: "Innovate Inc. II",
        date: "July 2025",
        category: "Branding",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 20,
        imgSrc: gridImage20,
        client: "QuantumLeap II",
        date: "August 2025",
        category: "UX/UI Design",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 21,
        imgSrc: gridImage21,
        client: "Artisan Goods II",
        date: "September 2025",
        category: "E-commerce",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 22,
        imgSrc: gridImage22,
        client: "HealthFirst II",
        date: "October 2025",
        category: "Web Development",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 23,
        imgSrc: gridImage23,
        client: "EcoSolutions II",
        date: "November 2025",
        category: "Branding",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 24,
        imgSrc: gridImage24,
        client: "NextGen Gaming II",
        date: "December 2025",
        category: "Motion Graphics",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 25,
        imgSrc: gridImage25,
        client: "FoodieFinds II",
        date: "January 2026",
        category: "Mobile App",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 26,
        imgSrc: gridImage26,
        client: "Starlight Studios II",
        date: "February 2026",
        category: "Web Design",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 27,
        imgSrc: gridImage27,
        client: "TravelWise II",
        date: "March 2026",
        category: "UX/UI Design",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 28,
        imgSrc: gridImage28,
        client: "CodeCrafters II",
        date: "April 2026",
        category: "Branding",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 29,
        imgSrc: gridImage29,
        client: "Zenith Fitness II",
        date: "May 2026",
        category: "E-commerce",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 31,
        imgSrc: gridImage31,
        client: "PixelPerfect II",
        date: "July 2026",
        category: "Photography",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 30,
        imgSrc: gridImage30,
        client: "Future Homes II",
        date: "June 2026",
        category: "Web Development",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 32,
        imgSrc: gridImage32,
        client: "SoundWave II",
        date: "August 2026",
        category: "Mobile App",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 33,
        imgSrc: gridImage33,
        client: "UrbanBloom II",
        date: "September 2026",
        category: "Branding",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 34,
        imgSrc: gridImage34,
        client: "DataDriven II",
        date: "October 2026",
        category: "Dashboard UI",
        website: "Case Study",
        description: commonDescription
    },
    {
        id: 35,
        imgSrc: gridImage35,
        client: "Mindful Moments II",
        date: "November 2026",
        category: "Web Design",
        website: "Live Project",
        description: commonDescription
    },
    {
        id: 36,
        imgSrc: gridImage36,
        client: "The Daily Brew II",
        date: "December 2026",
        category: "E-commerce",
        website: "Live Project",
        description: commonDescription
    }
];

// Step 3: Data ko export karein
export default projectsData;