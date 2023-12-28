'use client'

import React from "react";
import {
  IconBrandSafari,
  IconUsers,
  IconSteeringWheel,
  IconBeach,
  IconSunset2,
} from "@tabler/icons-react";

const Feature = ({ icon, title, description }) => (
  <div className="rounded hover:bg-neutral-50 duration-100 ease-in-out p-6">
    <div className="relative flex items-center justify-center mx-auto">
      {icon}
    </div>
    <h3 className="mt-8 text-lg font-semibold text-black">{title}</h3>
    <p className="mt-4 text-base text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
      <Feature
        icon={icon1}
        title="Explore As You Wish"
        description="Dive into the vibrant heart of Sydney CBD, exploring iconic landmarks like the Opera House, Harbour Bridge, Tower Eye, Queen Victoria Building, and more. Or, embark on an adventure to cities and suburbs around Sydney, within a 1-3 hour drive. The choice of destination is entirely up to you."
      />
      <Feature
        icon={icon2}
        title="Intimate Group Experience"
        description="Enjoy a personalized journey in small groups of 2 to 7 people. Travel comfortably in a 4-seater or 7-seater vehicle, with prices starting at just $100 per person."
      />
      <Feature
        icon={icon3}
        title="Personal Guide and Driver"
        description="I'll be your personal driver and guide, ensuring a smooth and insightful experience throughout your journey."
      />
      <Feature
        icon={icon4}
        title="Tailored Itineraries"
        description="Each tour is uniquely crafted based on your preferences. From iconic landmarks to local hidden gems, mountains to beaches, tell me what you love, and I'll design your perfect itinerary."
      />
      <Feature
        icon={icon5}
        title="Full-Day Adventure"
        description="Our tours typically run for 9-10 hours, starting around 8-9 AM and concluding by 5-6 PM. A day full of exploration, photography, and unforgettable memories."
      />
    </div>
  </div>
);

export default FeaturesSection;

const icon1 = (
  <>
    <svg
      className="text-blue-100"
      width="72"
      height="68"
      viewBox="0 0 72 74"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
    </svg>
    <IconBrandSafari className="absolute text-blue-600 w-7 h-7" />
  </>
);

const icon2 = (
  <>
    <svg
      className="text-orange-100"
      width="62"
      height="67"
      viewBox="0 0 62 67"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
    </svg>
    <IconUsers className="absolute text-orange-600 w-7 h-7" />
  </>
);

const icon3 = (
  <>
    <svg
      className="text-green-100"
      width="66"
      height="68"
      viewBox="0 0 66 68"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
    </svg>
    <IconSteeringWheel className="absolute text-green-600 w-7 h-7" />
  </>
);

const icon4 = (
  <>
    <svg
      className="text-purple-100"
      width="66"
      height="68"
      viewBox="0 0 66 68"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
    </svg>
    <IconBeach className="absolute text-purple-600 w-7 h-7" />
  </>
);

const icon5 = (
  <>
    <svg
      className="text-gray-100"
      width="65"
      height="70"
      viewBox="0 0 65 70"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
    </svg>
    <IconSunset2 className="absolute text-gray-600 w-7 h-7" />
  </>
);
