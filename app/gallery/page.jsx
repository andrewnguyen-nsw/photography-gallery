"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button, Tabs, Loader, rem } from "@mantine/core";
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
  IconUpload
} from "@tabler/icons-react";
import classes from "./Tab.module.css";
import Masonry from "react-masonry-css";
import DropzoneButton from "@components/DropzoneButton/DropzoneButton";
import { CldImage, CldUploadButton, CldUploadWidget } from 'next-cloudinary';


// Styles for the icons used in the tabs
const iconStyle = { width: rem(12), height: rem(12) };

// Configuration for Masonry grid breakpoints
const breakpointColumnsObj = {
  default: 3,
  768: 2,
  480: 1,
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
  useEffect(() => {
    const fetchAllImagesData = async () => {
      try {
        const response = await fetch("api/gallery");
        const data = await response.json();
        console.log(data);
        setImagesData(data);
      } catch (error) {
        console.error("Failed to fetch images: ", error);
      }
    };

    fetchAllImagesData();
  }, []);

  const { data: session } = useSession(); // Use session hook to manage user sessions
  const [imagesData, setImagesData] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  // Effect hook to fetch gallery images on component mount


  // Function to render each tab item
  const renderTab = (item) => (
    <Tabs.Tab
      key={item.value}
      className={`${classes.tab} backdrop-filter backdrop-blur-lg bg-opacity-80`}
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
    {/* <CldUploadButton uploadPreset="upload_from_website" className="w-[100px] px-6 py-2 border-solid border border-gray-700 rounded-full"/> */}
    <CldUploadWidget uploadPreset="upload_from_website">
      {({ open }) => {
        return (
          <Button variant="outline" leftSection={<IconUpload size={16}/>} onClick={() => open()}>
            Upload new photos
          </Button>
        );
      }}
    </CldUploadWidget>
  </div>
);

// Component to render the tab panel with images
const TabsPanel = ({ genre, imagesData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayImages, setDisplayImages] = useState([]);

  
  // Effect hook to update images on genre change
  useEffect(() => {
    // Filter images based on genre
    const filteredImages = 
      genre === "all" 
        ? imagesData
        : imagesData.filter((image) => image.tags.includes(genre));

    const displayImages = filteredImages.map((image) => {
      return (
        <CldImage
          key={image.publicId}
          src={image.publicId}
          width={image.width}
          height={image.height}
          // sizes="(max-width: 480px) 200vw, (max-width: 768px) 100vw, 67vw"
          alt=""
        />
      );
    })

    setDisplayImages(displayImages);
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {displayImages}
      </Masonry>
    </Tabs.Panel>
  );
};

export default Gallery;
