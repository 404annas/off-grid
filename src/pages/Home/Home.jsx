import React from 'react'
import HeroAnimation from '../../components/HeroAnimation'
import ImageGrid from '../../components/ImageGrid'
import Hero from '../../components/Hero'
import ImageSection from '../../components/ImageSection'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div className='bg-[#0F0F0F] text-[#EFEEEC]'>
            {/* <AnimationHero /> */}
            <HeroAnimation />
            <ImageSection />
            <ImageGrid />
            <Footer />
            {/* <Hero /> */}
        </div>
    )
}
