"use client";

import { Group, Button, Grid, SimpleGrid } from "@mantine/core";
import GenresCard from "@components/GenresCard/GenresCard";
import Image from "next/image";
import Link from "next/link";
import heroSectionBackgroundLarge from "/public/assets/images/HeroSection-2.jpg";
import heroSectionBackgroundMobile from "/public/assets/images/HeroSection.jpg";
import aboutMe from "/public/assets/images/Avatar_Veu.png";

export default function Home() {
  return (
    <>
      {/* // HERO SECTION ----------------------------------------------------------------------- */}
      <section className="flex-center flex-col ">
        <h1 className="h1_text text-center">
          <span className="highlight-hover">Capturing</span> {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-600 from-gray-800">
            {" "}
            Moments
          </span>
          <br /> Through the Lens of Life
        </h1>
        <p className="desc w-11/12 text-center">
          Welcome to my gallery, where I showcase the beauty of the world
          through my lens. Explore my work and get inspired.
        </p>
        <Group gap="lg" className="mt-5">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#57534E] via-[#38B2AC] to-[#34D399] rounded-xl blur-lg group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Button component={Link} href="/gallery" variant="filled">Explore</Button>
          </div>
          
          <Button component={Link} href="#about-me" variant="outline">About me</Button>
        </Group>


        <Image
          src={heroSectionBackgroundLarge}
          alt="Hero Section Background"
          quality={100}
          className="mt-10 w-full max-w-6xl h-auto hidden rounded-sm sm:flex"
        />
        <Image
          src={heroSectionBackgroundMobile}
          alt="Hero Section Background"
          quality={100}
          className="mt-10 w-full max-w-6xl h-auto flex rounded-sm sm:hidden"
        />
      </section>

      {/* // GENRES SECTION ----------------------------------------------------------------------- */}
      <section className="homepage-container mt-16 md:mt-28">
        <Grid gutter="60">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <h2 className="h2_text">
              Explore the <span className="highlight-hover">Diverse World</span> of Photography
            </h2>
            <p className="desc">
              Discover a wide range of photography genres, each showcasing the
              unique vision and talent of our photographer. From stunning
              landscapes to captivating portraits, my gallery offers a visual
              journey like no other.
            </p>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
              <GenresCard
                title="Portrait"
                description="Capturing the essence of individuals through close-ups, showcasing their expressions and personalities."
                image="https://storage.googleapis.com/andrew-gallery-photos/Homepage/Vy.JPG"
              />
              <GenresCard
                title="Landscape"
                description="Capturing the essence of individuals through close-ups, showcasing their expressions and personalities."
                image="https://storage.googleapis.com/andrew-gallery-photos/Homepage/OperaHouse.jpg"
              />
              <GenresCard
                title="Street"
                description="Capturing the essence of individuals through close-ups, showcasing their expressions and personalities."
                image="https://storage.googleapis.com/andrew-gallery-photos/Homepage/BehindAManQVB.jpg"
              />
              <GenresCard
                title="And more..."
                description=""
                image="https://storage.googleapis.com/andrew-gallery-photos/Homepage/CoupleViewFromMrsMacquarieChair.jpg"
              />
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </section>

      {/* // ABOUT ME SECTION ----------------------------------------------------------------------- */}
      <section id="about-me" className="homepage-container my-10 md:my-20">
        <Group justify="space-between">
          <Image
            src={aboutMe}
            alt="About Me"
            quality={100}
            style={{objectFit: "contain"}}
            className="w-11/12 md:w-5/12 mb-6 md:mb-0"
          />
          <div className="w-full md:w-1/2">
            <h2 className="h2_text">
              <span className="highlight-hover">Who am I?</span>
            </h2>
            <p className="desc">
            Hello! I&apos;m Andrew (also known as Thai Minh Nguyen), a photographer based in Sydney, Australia. My journey in photography began around early 2021. Despite being relatively new to this art, my spirit is constantly on the move, brimming with eagerness to learn and grow. Alongside studying for my Bachelor of ICT, photography has blossomed into both a cherished hobby and a side hustle for me. Additionally, I also work as a private tour guide, which allows me to explore and share the diverse and captivating sights around me. I am thrilled to present my work here and hope you find as much joy in it as I do in creating it.
            </p>
            <Group gap="lg" className="mt-5">
              <div className="relative inline-flex group">
                <div class="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#57534E] via-[#38B2AC] to-[#34D399] rounded-xl blur-lg group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Button component={Link} href="/gallery" variant="filled">See my work</Button>
              </div>
              <Button component={Link} href="https://www.instagram.com/eke.minh/" rel="noopener noreferrer" target="_blank" variant="outline">Follow me on Instagram</Button>
            </Group>
          </div>
        </Group>
      </section>
    </>
  );
}
