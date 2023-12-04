"use client";

import { useState } from "react";
import Image from 'next/image';
import { Text, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';

const imagesUrl = [
  "https://storage.googleapis.com/andrew-gallery-photos/Preset/26-min.jpg",
  "https://storage.googleapis.com/andrew-gallery-photos/Preset/6-min.jpg",
  "https://storage.googleapis.com/andrew-gallery-photos/Preset/11-min.jpg",
  "https://storage.googleapis.com/andrew-gallery-photos/Preset/12-min.jpg",
]

const faqs = [
  {
    value: 'What are presets?',
    description:
      'Presets are collections of saved editing configurations, like exposure and color settings, which can be applied to any photograph.',
  },
  {
    value: 'Why do people buy presets?',
    description:
      'People often buy presets to emulate the style of their favorite photographers, to learn from others\' editing techniques through reverse engineering, or simply to support the photographers they admire.',
  },
  {
    value: 'What is included in this bundle?',
    description:
      'This bundle contains all the styles necessary for enhancing your photos: Anime, Aqua (5 Presets), Beach (2 Presets), Black (5 Presets), Bushes, Cinematic (5 Presets), Coconut (5 Presets), Coffee (5 Presets), Cyan Moody, Cyan Selfie, Desert, Farm, Field, Forest, Furniture, Indoor (4 Presets), Leaves, Love (5 Presets), Loyal, Moody (7 Presets), Mountain (5 Presets), Natural Pearl, Nature (3 Presets), Newborn, Old Film (5 Presets), Orange Urban, Portrait (10 Presets), Retro Moody, Snow, Sunny Days, Travel (5 Presets), Urban Classic, Warm, Wedding (10 Presets) and Yoga.',
  },
  {
    value: 'What file types are these presets for?',
    description:
      'These presets are suitable for all types of RAW files. They are compatible with Lightroom on both desktop and mobile platforms and work on both Windows and Mac systems.',
  },
  {
    value: 'Will these work with JPEG files?',
    description:
      'While they will work with JPEG files, these presets are primarily designed for RAW formats.',
  },
  {
    value: 'Are these one click edits?',
    description:
      'In most cases, around 95%, presets require additional basic adjustments like exposure and color balance, as each image varies. However, in about 5% of cases, the presets can be applied directly without further modifications.',
  },
  {
    value: 'Can I modify these and turn them into my own?',
    description:
      'Yes! In fact I encourage everyone to modify them and play around. Use these to help you get your own style.',
  },
];

const items = faqs.map((item) => (
  <Accordion.Item key={item.value} value={item.value}>
    <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
    <Accordion.Panel>{item.description}</Accordion.Panel>
  </Accordion.Item>
));

const Presets = () => {
  const [activeImage, setActiveImage] = useState("https://storage.googleapis.com/andrew-gallery-photos/Preset/26-min.jpg");
  return (
    <div className="homepage-container mt-8">
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Left Section */}
        <div className="md:flex-1 px-4 w-50">
          <div className="sticky top-9">
            {imagesUrl.map(
              (img) =>
                activeImage === img && (
                  <div
                    key={img}
                    className="rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  >
                    <Image 
                      src={img}
                      width={1500}
                      height={1000}
                      alt=""
                      style={{objectFit: "cover", borderRadius: "3px"}}
                    />
                  </div>
                )
            )}

            <div className="flex -mx-2 mb-4">
              {imagesUrl.map((img) => (
                <div key={img} className="flex-1 px-2">
                  <button
                    onClick={() => setActiveImage(img)}
                    className={`focus:outline-none w-full rounded-lg bg-gray-100 flex items-center justify-center ${
                      activeImage === img ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}
                  >
                    <Image 
                      src={img}
                      width={150}
                      height={100}
                      alt=""
                      style={{objectFit: "cover", borderRadius: "2px"}}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight font-bold text-gray-800 text-2xl md:text-3xl">
            101 All in One Lightroom Presets
          </h2>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <span className="text-gray-700 mr-1 mt-1">$</span>
              <span className="font-bold text-gray-700 text-4xl">1</span>
            </div>
            <div className="flex-1">
              <p className="text-teal-600 text-xl font-semibold line-through">$10</p>
              <p className="text-teal-600 text-sm">Save 90%</p>
            </div>
          </div>

          <p className="text-gray-500 text-base">
          This 101 Lightroom preset bundle, inspired by Crella, offers a wide range of unique tones for all your photography needs. Thoroughly tested and quality-assured, these popular presets are user-approved and require minimal tweaking, fitting a variety of photos seamlessly. This comprehensive collection eliminates the need for additional presets.
          </p>

          <Button 
            fullWidth 
            className="my-4"
            rightSection={<IconArrowRight size={14} className="arrow-rotate" />} 
          >
            Proceed to Payment
          </Button>

          <Accordion className="mt-8">
            {items}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Presets;