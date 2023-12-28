"use client";

import { CldImage } from "next-cloudinary"

import { Group, Button } from '@mantine/core';
import HorizontalScrollCarousel from '@components/HorizontalScrollCarousel/HorizontalScrollCarousel';
import AboutTheTour from '@components/AboutTheTour/AboutTheTour';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(
  () => import('@components/ContactForm/ContactForm'),
  { ssr: false }
);

const PrivateTour = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex-center flex-col ">
        <h1 className="h1_text text-center">
          Explore <span className="highlight-hover">Sydney</span> {" "} <br /> with a Personal Touch
        </h1>
        <p className="desc w-11/12 text-center">
          Discover the hidden gems of Sydney and its surroundings with affordable private tours, guided by a local photographer. Experience the city like never before and capture unforgettable moments.
        </p>
        <Group gap="lg" className="mt-5">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#57534E] via-[#38B2AC] to-[#34D399] rounded-xl blur-lg group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Button component='a' href="#contact" variant="filled">Book your Adventure</Button>
          </div>
          
          <Button component='a' href="#about" variant="outline">Learn more</Button>
        </Group>
      </section>

      {/* Carousel */}
      <section>
        <HorizontalScrollCarousel />
      </section>

      {/* About the Tour */}
      <section id="about" className="homepage-container mt-6 md:mt-8">
        <h2 className='h2_text text-center mb-8 md:mb-10'>About the Tour</h2>
        <AboutTheTour />
      </section>

      {/* Contact Us */}
      <section id="contact">
        <ContactForm/>
      </section>
    </>
  )
}

export default PrivateTour