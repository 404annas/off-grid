import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '../../components/ImageGallery';
import { Link, useParams } from 'react-router';
import projectsData from '../../data/projectsData';

// Animation variants for Framer Motion
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
            staggerChildren: 0.1
        }
    }
};

const galleryItem = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
}

// Data for the page (aap isko API se bhi la sakte hain)


// const projectData = {
//     client: "AppX",
//     date: "June 2025",
//     category: "Design",
//     website: "Live Project",
//     description: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         "Tortor consequat id porta nibh venenatis cras. Sem et tortor consequat id porta interdum varius. Et ligula ullamcorper malesuada proin libero nunc consequat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Non arcu risus quis varius. Commodo odio aenean sed. Tortor dignissim convallis aenean et tortor at risus. Urna nunc id cursus metus aliquam eleifend mi in nulla."
//     ],
//     images: [
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d2419a4352b53beca9391_Rectangle%20902.webp', span: 2 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241aa69841f2378ad3a6_Rectangle%20903.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241a3d0016e1a1795b11_Rectangle%20904.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241951f24d27c622a59f_Rectangle%20905.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241a87e50a41d7d0a797_Rectangle%20906.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241a4a259c1647892248_Rectangle%20907.webp', span: 2 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241b10a232f059c1e7a0_Rectangle%20908.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241b4e5a95f085570ea1_Rectangle%20909.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241a2e6e301980004940_Rectangle%20910.webp', span: 1 },
//         { src: 'https://assets-global.website-files.com/65427757656910760415d865/654d241a13a802521dbe6c14_Rectangle%20911.webp', span: 1 },
//     ]
// };

const AnimatedText = ({ children, className }) => (
    <motion.div variants={fadeInUp} className={className}>
        {children}
    </motion.div>
);

const ProjectPage = () => {
    const { id } = useParams()
    const project = projectsData?.filter((item) => item.id === Number(id))[0]

    return (
        <div className="">

            {/* Header */}
            <header className="w-full  p-3 lg:p-8 flex justify-between items-center  font-semibold tracking-widest ">
                <Link to={"/"}>OFFGRID</Link>
                <Link to={"/contact"}>LET'S WORK TOGETHER</Link>
            </header>

            <main className="max-w-7xl mx-auto px-3  ">
                {/* Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className=" py-16 "
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl max-w-5xl font-normal leading-tight md:leading-tight"
                    >
                        Turning bold ideas into visuals that actually vibe and work.
                    </motion.h1>
                    <AnimatedText className={"flex w-full items-center mt-7"}>
                        <span className="text-sm font-medium tracking-widest mr-3">SELECTED WORK</span>
                        <span className='w-full border border-gray-400 flex-1'></span>
                    </AnimatedText>
                </motion.section>

                {/* Featured Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={galleryItem}
                    className="mb-20"
                >
                    <img
                        src={project.imgSrc}
                        alt={project.id}
                        className="w-full h-[90vh] object-cover object-top "
                    />
                </motion.div>

                {/* Project Details */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="min-h-screen flex justify-center items-center  " // Use py for vertical padding
                >
                    {/* Wrapper to center the content */}
                    <div className="max-w-xl m-auto px-6">

                        {/* Details Grid - now centered */}
                        <div className="flex flex-wrap justify-between items-center place-items-stretch gap-8 mb-16 ">
                            <AnimatedText>
                                <h3 className="text-lg font-semibold  mb-2">CLIENT</h3>
                                <p className=" text-sm">{project.client}</p>
                            </AnimatedText>
                            <AnimatedText>
                                <h3 className="text-lg font-semibold  mb-2">DATE</h3>
                                <p className=" text-sm">{project.date}</p>
                            </AnimatedText>
                            <AnimatedText>
                                <h3 className="text-lg font-semibold  mb-2">CATEGORIE</h3>
                                <p className=" text-sm">{project.category}</p>
                            </AnimatedText>
                            <AnimatedText>
                                <h3 className="text-lg font-semibold  mb-2">WEBSITE</h3>
                                <a href="#" className=" text-sm hover:text-white transition-colors">{project.website}</a>
                            </AnimatedText>
                        </div>

                        {/* Description Section - also centered */}
                        <motion.div
                            className="w-full text-base  leading-relaxed space-y-3" // Increased space-y for better readability
                            variants={fadeInUp}
                        >
                            {project.description.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Image Gallery */}
                <ImageGallery />
            </main>

            {/* Footer CTA */}
            <motion.footer
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="text-center py-24 relative h-screen flex-col flex justify-center items-center "
            >
                <motion.h2 variants={fadeInUp} className="max-w-xl mx-auto text-5xl md:text-7xl  mb-8">Let's Work Together</motion.h2>
                <motion.a
                    href="#"
                    variants={fadeInUp}
                    className="inline-block font-medium tracking-widest  rounded-full px-8 py-4 "
                >
                    BOOK A 15-MIN CALL
                </motion.a>
                <motion.div variants={fadeInUp} className="mt-24 w-full text-center text-gray-500 absolute bottom-0 ">
                    <p>Buy template © Developed by Lucas Gusso Powered by Webflow</p>
                </motion.div>
            </motion.footer>

        </div>
    );
};

export default ProjectPage;