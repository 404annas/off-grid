import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import all grid images
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
import { Link } from "react-router";
import projectsData from "../data/projectsData";

import gridImage1 from "../assets/gridImages/grid1.jpeg"

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
    const containerRef = useRef();
    const itemsRef = useRef([])

    const images = [
        grid1, grid2, grid3, grid4,
        grid5, grid6, grid7, grid8,
        grid9, grid10, grid11, grid12,
        grid13, grid15, grid16,
        grid17, grid18, grid14,
        grid1, grid2, grid3, grid4,
        grid5, grid6, grid7, grid8,
        grid9, grid10, grid11, grid12,
        grid13, grid15, grid16,
        grid17, grid18, grid14,
    ];

    // Calculate distance from center for each item in 4x3 grid
    const getDistanceFromCenter = (index) => {
        const cols = 9;
        const rows = 4;
        const col = index % cols;
        const row = Math.floor(index / cols);

        const centerCol = (cols - 1) / 2; // 1.5
        const centerRow = (rows - 1) / 2; // 1

        const deltaCol = Math.abs(col - centerCol);
        const deltaRow = Math.abs(row - centerRow);

        return Math.sqrt(deltaCol * deltaCol + deltaRow * deltaRow);
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // Set initial state - all items hidden
        itemsRef.current.forEach((item) => {
            if (item) {
                gsap.set(item, {
                    width: "30%",
                    opacity: 0,
                    height: "60%",
                    transformOrigin: "center"
                });
            }
        });

        // Group items by distance from center
        const itemsByDistance = {};

        images.forEach((_, index) => {
            const distance = getDistanceFromCenter(index);
            const key = distance.toFixed(2);
            if (!itemsByDistance[key]) {
                itemsByDistance[key] = [];
            }
            itemsByDistance[key].push(index);
        });

        // Sort distances to animate from center outward
        const sortedDistances = Object.keys(itemsByDistance)
            .map(Number)
            .sort((a, b) => a - b);

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                once: false
            }
        });

        // Animate each distance group
        sortedDistances.forEach((distance, groupIndex) => {
            const indices = itemsByDistance[distance.toFixed(2)];
            const items = indices.map(i => itemsRef.current[i]).filter(Boolean);

            if (items.length > 0) {
                tl.to(
                    items,
                    {
                        opacity: 1,
                        width: "100%",
                        height: "100%",
                        duration: 0.6,
                        ease: "power1",
                        stagger: 0.1
                    },
                    groupIndex * 0.2 // Delay between distance groups
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div
                ref={containerRef}
                className="grid grid-cols-3  lg:aspect-[16/9] sm:grid-cols-6 lg:grid-cols-9 gap-1  w-full place-items-center"
            // style={{ aspectRatio: "16/9" }}
            >
                {projectsData.map((item, index) => (
                    <Link
                        // to={`/project-page/${item.id}`}
                        key={index}
                        ref={el => itemsRef.current[index] = el}
                        className="relative overflow-hidden "
                    >
                        <img
                            src={item.imgSrc}
                            alt={`Grid item ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;