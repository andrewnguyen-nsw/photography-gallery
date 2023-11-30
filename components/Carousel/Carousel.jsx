"use client"

import { Carousel } from '@mantine/carousel';
import { Image, Card, Text, Group, Button, rem } from '@mantine/core';
import classes from './Carousel.module.css';

export default function Demo() {
  const images = [
    'https://storage.googleapis.com/andrew-gallery-photos/Photoshoot/IMG_2542-copy.jpg',
    'https://storage.googleapis.com/andrew-gallery-photos/Photoshoot/Vy-2.jpg',
    'https://storage.googleapis.com/andrew-gallery-photos/Photoshoot/IMG_3100-copy.jpg',
    'https://storage.googleapis.com/andrew-gallery-photos/Photoshoot/CoupleOperaHouse-2.jpg',
  ];

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} alt=""/>
    </Carousel.Slide>
  ));
  
  return (
    <Carousel slideSize={{base: '100%', md: '69.444444%'}} slideGap="sm" controlSize={40} loop withIndicators classNames={{
      root: classes.carousel,
      controls: classes.carouselControls,
      indicator: classes.carouselIndicator,
    }}>
      {slides}
    </Carousel>
  );
}