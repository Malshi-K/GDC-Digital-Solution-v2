"use client";
import React from "react";
import Image from "next/image";

const GallerySection = ({ data }) => {
  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10">
          SUCCESS STORY <span className="text-customGray">OVERVIEW</span>
        </h2>

        {/* Masonry Grid for Images */}
        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {data.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg break-inside-avoid"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;