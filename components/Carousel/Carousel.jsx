"use client";

import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image, Card, Text, Group, Button, rem } from "@mantine/core";
import classes from "./Carousel.module.css";
import photoshoot01 from "../../public/assets/images/Photoshoot_01.jpg";
import photoshoot02 from "../../public/assets/images/Photoshoot_02.jpg";
import photoshoot03 from "../../public/assets/images/Photoshoot_03.jpg";
import photoshoot04 from "../../public/assets/images/Photoshoot_04.jpg";

export default function Demo() {
  const images = [photoshoot01, photoshoot02, photoshoot03, photoshoot04];

  const slides = images.map((image) => (
    <React.Fragment key={image}>
      <Carousel.Slide>
        <Image src={image.src} alt="" />
      </Carousel.Slide>
    </React.Fragment>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", md: "69.444444%" }}
      slideGap="sm"
      controlSize={40}
      loop
      withIndicators
      classNames={{
        root: classes.carousel,
        controls: classes.carouselControls,
        indicator: classes.carouselIndicator,
      }}
    >
      {slides}
    </Carousel>
  );
}
