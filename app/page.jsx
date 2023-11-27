"use client";

import Image from "next/image";
import heroSectionBackgroundLarge from "/public/assets/images/HeroSection-2.jpg";
import heroSectionBackgroundMobile from "/public/assets/images/HeroSection.jpg";
import aboutMe from "/public/assets/images/Avatar_Veu.png";
import { Group, Button, Grid, SimpleGrid } from "@mantine/core";
import GenresCard from "@components/GenresCard/GenresCard";

export default function Home() {
  return (
    <>
      {/* // HERO SECTION ----------------------------------------------------------------------- */}
      <section className="flex-center flex-col ">
        <h1 className="h1_text text-center">
          Capturing{" "}
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
        <Group className="mt-5">
          <Button variant="filled">Explore</Button>
          <Button variant="outline">About me</Button>
        </Group>
        <Image
          src={heroSectionBackgroundLarge}
          alt="Hero Section Background"
          quality={100}
          className="mt-10 w-full max-w-6xl hidden sm:flex"
        />
        <Image
          src={heroSectionBackgroundMobile}
          alt="Hero Section Background"
          quality={100}
          className="mt-10 w-full max-w-6xl flex sm:hidden"
        />
      </section>

      {/* // GENRES SECTION ----------------------------------------------------------------------- */}
      <section className="homepage-container mt-28">
        <Grid gutter="60">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <h2 className="h2_text">
              Explore the Diverse World of Photography
            </h2>
            <p className="desc">
              Discover a wide range of photography genres, each showcasing the
              unique vision and talent of our photographer. From stunning
              landscapes to captivating portraits, my gallery offers a visual
              journey like no other.
            </p>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={2}>
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
      <section className="homepage-container mt-28">
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
              Who am I?
            </h2>
            <p className="desc">
              Hi there, I am Andrew (aka Thai Minh Nguyen), a photographer based in Ho Chi Minh City, Vietnam. I have been passionate about photography since I was a kid. I love capturing the beauty of the world through my lens and sharing it with others. I hope you enjoy my work as much as I enjoy creating it.
            </p>
            <Group className="mt-5">
              <Button variant="filled">See my work</Button>
              <Button variant="outline">Follow me on Instagram</Button>
            </Group>
          </div>
        </Group>
      </section>
    </>
  );
}
