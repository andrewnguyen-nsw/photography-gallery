"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Tabs, Loader, rem } from "@mantine/core";
import Image from "next/image";
import {
  IconPhoto,
  IconMoodSmileBeam,
  IconMountain,
  IconMotorbike,
  IconComet,
  IconConfetti,
  IconBuildingSkyscraper,
  IconDrone,
  IconMoodKid,
} from "@tabler/icons-react";
import classes from "./Tab.module.css";
import Masonry from "react-masonry-css";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import DropzoneButton from "@components/DropzoneButton/DropzoneButton";

// Styles for the icons used in the tabs
const iconStyle = { width: rem(12), height: rem(12) };

// Configuration for Masonry grid breakpoints
const breakpointColumnsObj = {
  default: 3,
  768: 2,
  400: 1,
};

// Tab items configuration, each item contains value, icon and label
const tabItems = [
  { value: "all", icon: IconPhoto, label: "All" },
  { value: "portrait", icon: IconMoodSmileBeam, label: "Portrait" },
  { value: "landscape", icon: IconMountain, label: "Landscape" },
  { value: "street", icon: IconMotorbike, label: "Street" },
  { value: "long-exposure", icon: IconComet, label: "Long Exposure" },
  { value: "pre-wedding", icon: IconConfetti, label: "Pre-Wedding" },
  {
    value: "architecture",
    icon: IconBuildingSkyscraper,
    label: "Architecture",
  },
  { value: "drone", icon: IconDrone, label: "Drone" },
  { value: "preschool", icon: IconMoodKid, label: "Preschool" },
];

const Gallery = () => {
  const { data: session } = useSession(); // Use session hook to manage user sessions
  const [imagesData, setImagesData] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  // Effect hook to fetch gallery images on component mount
  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        const response = await fetch("api/gallery");
        const data = await response.json();
        setImagesData(data);
      } catch (error) {
        console.error("Failed to fetch images: ", error);
      }
    };

    fetchImagesData();
  }, []);

  // Function to render each tab item
  const renderTab = (item) => (
    <Tabs.Tab
      className={classes.tab}
      value={item.value}
      leftSection={<item.icon style={iconStyle} />}
    >
      {item.label}
    </Tabs.Tab>
  );

  // Main component render
  return (
    <div className="homepage-container">
      {/* Tabs for image categories */}
      <Tabs
        variant="pills"
        radius="xs"
        value={activeTab}
        onChange={setActiveTab}
      >
        <Tabs.List className="mb-6">{tabItems.map(renderTab)}</Tabs.List>

        {/* Dropzone button for admin users */}
        {session?.user.isAdmin && <DropzoneButtonWrapper />}

        {/* Rendering images for each category */}
        {tabItems.map((item) => (
          <TabsPanel
            key={item.value}
            genre={item.value}
            imagesData={imagesData}
          />
        ))}
      </Tabs>
    </div>
  );
};

// Dropzone button component wrapped for conditional rendering
const DropzoneButtonWrapper = () => (
  <div className="pb-8">
    <DropzoneButton />
  </div>
);

// Component to render the tab panel with images
const TabsPanel = ({ genre, imagesData }) => {
  const [photoAlbumImages, setPhotoAlbumImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Effect hook to update images on genre change
  useEffect(() => {
    // setIsLoading(true);

    // Filtering and mapping images based on the selected genre
    const filteredImages =
      genre === "all"
        ? imagesData
        : imagesData.filter((image) => JSON.parse(image.genre).includes(genre));

    const transformedImages = filteredImages.map((image) => ({
      src: image.url,
      width: image.width,
      height: image.height,
      alt: image.alt,
      // Add other properties as needed
    }));

    setPhotoAlbumImages(transformedImages);
    setIsLoading(false);
  }, [genre, imagesData]);

  {if (isLoading) {
    return (
      <div className="flex-center h-[60vh]">
        <Loader />
      </div>
    )
  }}

  // Render layout for images
  return (
    <Tabs.Panel value={genre} className="min-h-[50vh]">
      <PhotoAlbum
        photos={photoAlbumImages}
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        // sizes={{
        //   size: "calc(100vw - 40px)",
        //   sizes: [
        //     { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
        //     { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
        //     { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        //   ],
        // }}
      />
    </Tabs.Panel>
  );
};

export default Gallery;
