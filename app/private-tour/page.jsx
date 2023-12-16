import { Group, Text, Button, Container } from '@mantine/core';
import Link from 'next/link';
import classes from './HeroText.module.css';

const PrivateTour = () => {
  return (

    <section className="flex-center flex-col ">
      <h1 className="h1_text text-center">
        Explore <span className="highlight-hover">Sydney</span> {" "} <br /> with a Personal Touch
      </h1>
      <p className="desc w-11/12 text-center">
        Discover the hidden gems of Sydney and its surroundings with affordable private tours, guided by a local photographer. Experience the city like never before and capture unforgettable moments.
      </p>
      <Group gap="lg" className="mt-5">
        <div className="relative inline-flex group">
          <div class="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#57534E] via-[#38B2AC] to-[#34D399] rounded-xl blur-lg group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <Button component={Link} href="/gallery" variant="filled">Book your Adventure</Button>
        </div>
        
        <Button component={Link} href="#about-me" variant="outline">Learn more</Button>
      </Group>
    </section>
  )
}

export default PrivateTour