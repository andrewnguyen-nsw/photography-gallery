"use client";

import { Group, Button, Grid, SimpleGrid } from "@mantine/core";
import GenresCard from "@components/GenresCard/GenresCard";
import Image from "next/image";
import Link from "next/link";
import heroSectionBackgroundLarge from "/public/assets/images/HeroSection-2.jpg";
import heroSectionBackgroundMobile from "/public/assets/images/HeroSection.jpg";
import aboutMe from "/public/assets/images/Avatar_Veu.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* // HERO SECTION ----------------------------------------------------------------------- */}
      <section className="flex-center flex-col">
        <motion.h1
          className="h1_text text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <span className="highlight-hover">Capturing</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-600 from-gray-800">
            {" "}
            Moments
          </span>
          <br /> Through the Lens of Life
        </motion.h1>
        <motion.p
          className="desc w-11/12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          Welcome to my gallery, where I showcase the beauty of the world
          through my lens. Explore my work and get inspired.
        </motion.p>
        <Group gap="lg" className="mt-5">
          <motion.div
            className="relative inline-flex group"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#57534E] via-[#38B2AC] to-[#34D399] rounded-xl blur-lg group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Button component={Link} href="/gallery" variant="filled">
              Explore
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <Button component={Link} href="#about-me" variant="outline">
              About me
            </Button>
          </motion.div>
        </Group>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <Image
            src={heroSectionBackgroundLarge}
            alt="Hero Section Background"
            quality={100}
            placeholder="blur"
            className="mt-10 w-full max-w-7xl h-auto hidden rounded-sm sm:flex"
          />
          <Image
            src={heroSectionBackgroundMobile}
            alt="Hero Section Background"
            quality={100}
            placeholder="blur"
            className="mt-10 w-full max-w-7xl h-auto flex rounded-sm sm:hidden"
          />
        </motion.div>
      </section>

      {/* // GENRES SECTION ----------------------------------------------------------------------- */}
      <section className="homepage-container mt-16 md:mt-28 max-w-7xl">
        <Grid gutter="60">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <h2 className="h2_text">
              Explore the <span className="highlight-hover">Diverse World</span>{" "}
              of Photography
            </h2>
            <p className="desc">
              Dive into my world of photography where each picture shows my own
              style and creativity. From beautiful landscapes to eye-catching
              portraits, my gallery takes you on a unique and visually stunning
              journey.
            </p>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
              <GenresCard
                title="Portrait"
                description="Capturing the essence of individuals through close-ups, showcasing their expressions and personalities."
                image="/assets/images/Vy.jpg"
              />
              <GenresCard
                title="Landscape"
                description="Exploring the beauty of nature and the world around us. Capturing breathtaking scenes from serene countryside to urban skylines."
                image="/assets/images/OperaHouse.jpg"
              />
              <GenresCard
                title="Street"
                description="Unveiling the dynamic energy and stories of the streets. Candid shots that reveal the rhythm and mood of urban life."
                image="/assets/images/BehindAManQVB.jpg"
              />
              <GenresCard
                title="And more..."
                description=""
                image="/assets/images/CoupleViewFromMrsMacquarieChair.jpg"
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
            style={{ objectFit: "contain" }}
            className="w-11/12 md:w-5/12 mb-6 md:mb-0"
          />
          <div className="w-full md:w-1/2">
            <h2 className="h2_text">
              <span className="highlight-hover">Who am I?</span>
            </h2>
            <p className="desc">
              Hello! I&apos;m Andrew (also known as Thai Minh Nguyen), a
              photographer based in Sydney, Australia. My journey in photography
              began around early 2021. Despite being relatively new to this art,
              my spirit is constantly on the move, brimming with eagerness to
              learn and grow. Alongside studying for my Bachelor of ICT,
              photography has blossomed into both a cherished hobby and a side
              hustle for me. Additionally, I also work as a private tour guide,
              which allows me to explore and share the diverse and captivating
              sights around me. I am thrilled to present my work here and hope
              you find as much joy in it as I do in creating it.
            </p>
            <Group gap="lg" className="mt-5">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#57534E] via-[#38B2AC] to-[#34D399] rounded-xl blur-lg group-hover:opacity-75 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Button component={Link} href="/gallery" variant="filled">
                  See my work
                </Button>
              </div>
              <Button
                component={Link}
                href="https://www.instagram.com/eke.minh/"
                rel="noopener noreferrer"
                target="_blank"
                variant="outline"
              >
                Follow me on Instagram
              </Button>
            </Group>
          </div>
        </Group>
      </section>
    </>
  );
}
