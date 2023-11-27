"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMoodSmileBeam, IconMountain, IconMotorbike, IconConfetti, IconBuildingSkyscraper, IconDrone, IconMoodKid } from '@tabler/icons-react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import DropzoneButton from "@components/DropzoneButton/DropzoneButton";

const Gallery = () => {
  const { data: session } = useSession();

  const iconStyle = { width: rem(12), height: rem(12) };

  const [imagesData, setImagesData] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        const response = await fetch("api/gallery");
        const data = await response.json();
        setImagesData(data);
      } catch (error) {
        console.error("Failed to fetch images: ", error)
      }
    }
    
    fetchImagesData();
  }, []);

  useEffect(() => {
    const images = imagesData.map((image) => {
      return (
        <Image
          key={image.name}
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      );
    });
  
    setDisplayedImages(images);
  }, [imagesData]);

  return (
    <div className="homepage-container">
      <Tabs variant="pills" radius="xs" value={activeTab} onChange={setActiveTab}>
        <Tabs.List className="mb-6">
          <Tabs.Tab value="all" leftSection={<IconPhoto style={iconStyle} />}>
            All
          </Tabs.Tab>
          <Tabs.Tab value="portrait" leftSection={<IconMoodSmileBeam style={iconStyle} />}>
            Portrait
          </Tabs.Tab>
          <Tabs.Tab value="landscape" leftSection={<IconMountain style={iconStyle} />}>
            Landscape
          </Tabs.Tab>
          <Tabs.Tab value="street" leftSection={<IconMotorbike style={iconStyle} />}>
            Street
          </Tabs.Tab>
          <Tabs.Tab value="pre-wedding" leftSection={<IconConfetti style={iconStyle} />}>
            Pre-Wedding
          </Tabs.Tab>
          <Tabs.Tab value="architecture" leftSection={<IconBuildingSkyscraper style={iconStyle} />}>
            Architecture
          </Tabs.Tab>
          <Tabs.Tab value="drone" leftSection={<IconDrone style={iconStyle} />}>
            Drone
          </Tabs.Tab>
          <Tabs.Tab value="preschool" leftSection={<IconMoodKid style={iconStyle} />}>
            Preschool
          </Tabs.Tab>
        </Tabs.List>

        {session?.user.isAdmin && (
          <div className="pb-8">
            <DropzoneButton/>
          </div>
        )}

        <TabsPanel genre="all" imagesData={imagesData}/>
        <TabsPanel genre="portrait" imagesData={imagesData}/>
        <TabsPanel genre="landscape" imagesData={imagesData}/>
        <TabsPanel genre="street" imagesData={imagesData}/>
        <TabsPanel genre="pre-wedding" imagesData={imagesData}/>
        <TabsPanel genre="architecture" imagesData={imagesData}/>
        <TabsPanel genre="drone" imagesData={imagesData}/>
        <TabsPanel genre="preschool" imagesData={imagesData}/>
      </Tabs>

    </div>
  )
};

const TabsPanel = ({ genre, imagesData }) => {
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    400: 1
  };

  const [displayedImages, setDisplayedImages] = useState([]);
  
  useEffect(() => {
    let images;
    
    if (genre === "all") {
      images = imagesData
        .map((image) => {
          return (
            <Image
              key={image.name}
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          );
        });
    } else {
      images = imagesData
        .filter((image) => JSON.parse(image.genre).includes(genre))
        .map((image) => {
          return (
            <Image
              key={image.name}
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          );
        });
    }
    
    setDisplayedImages(images);
  }, [genre, imagesData]);

  return (
    <Tabs.Panel value={genre}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {displayedImages}
      </Masonry>
    </Tabs.Panel>
  )
}

export default Gallery;
