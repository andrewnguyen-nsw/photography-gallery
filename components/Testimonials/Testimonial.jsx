import React from 'react';
import Image from 'next/image';

const Testimonial = ({ saying, name, city, imgSrc }) => {
  return (
    <section className="pt-6 bg-white sm:pt-8 lg:pt-10">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-6">
          {/* Testimonial Item 1 */}
          <div className="flex flex-col bg-gray-50 rounded-sm -ml-3">
            <div className="flex flex-col justify-between flex-1 p-8">
              <div className="flex-1">
                <blockquote>
                  <p className="text-base text-neutral-800">“{saying}”</p>
                </blockquote>
              </div>

            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <Image width={45} height={45} className="flex-shrink-0 object-cover rounded-full" src={imgSrc} alt="A woman" />
              <div className="ml-3">
                <p className="text-base font-semibold text-neutral-800 truncate">{name}</p>
                <p className="text-base text-neutral-500 truncate">{city}</p>
              </div>
            </div>
          </div>

          {/* Additional testimonial items should follow the same structure */}
          {/* ... */}

      </div>
    </section>
  );
}

export default Testimonial;