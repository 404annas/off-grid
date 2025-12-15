import React from 'react'
import { motion } from 'framer-motion';

import gallery1 from "../assets/galleryImages/gallery1.jpeg"
import gallery2 from "../assets/galleryImages/gallery2.jpeg"
import gallery3 from "../assets/galleryImages/gallery3.jpeg"
import gallery4 from "../assets/galleryImages/gallery4.jpeg"
import gallery5 from "../assets/galleryImages/gallery5.jpeg"
import gallery6 from "../assets/galleryImages/gallery6.jpeg"
import gallery7 from "../assets/galleryImages/gallery7.jpeg"
import gallery8 from "../assets/galleryImages/gallery8.jpeg"
import gallery9 from "../assets/galleryImages/gallery9.jpeg"
import gallery10 from "../assets/galleryImages/gallery10.jpeg"

export default function ImageGallery() {

    const images = [
        { src: gallery1, span: 2 },
        { src: gallery2, span: 1 },
        { src: gallery3, span: 1 },
        { src: gallery4, span: 1 },
        { src: gallery5, span: 1 },
        { src: gallery6, span: 2 },
        { src: gallery7, span: 1 },
        { src: gallery8, span: 1 },
        { src: gallery9, span: 1 },
        { src: gallery10, span: 1 },
    ]
    const galleryItem = {
        hidden: { opacity: 0, y: "100px" },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        },
    }
    return (
        <section className="pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={image.span === 2 ? 'md:col-span-2' : ''}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={galleryItem}
                    >
                        <img
                            src={image.src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
