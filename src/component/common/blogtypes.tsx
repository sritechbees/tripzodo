import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const gallerySections = [
  {
    title: 'Breathtaking Beach Escapes',
    description: 'Explore stunning coastal destinations with crystal-clear waters and golden sands.',
    images: ['/packages/Breathtaking Beach Escapes1.jpg', '/packages/Breathtaking Beach Escapes22.jpg', '/packages/Breathtaking Beach Escapes3.jpg'],
  },
  {
    title: 'Majestic Mountain Adventures',
    description: 'Discover thrilling hikes, scenic views, and peaceful retreats in high-altitude wonderlands.',
    images: ['/packages/Majestic Mountain Adventures1.jpg', '/packages/Majestic Mountain Adventures2.jpg', '/packages/Majestic Mountain Adventures3.jpg'],
  },
  {
    title: 'Cultural Heritage Tours',
    description: 'Dive into rich history, ancient architecture, and vibrant local traditions around the world.',
    images: ['/packages/Cultural Heritage Tours1.jpg', '/packages/Cultural Heritage Tours2.jpg', '/packages/Cultural Heritage Tours3.jpg'],
  },
  {
    title: 'Romantic Getaways & Honeymoons',
    description: 'Perfect packages for couples seeking dreamy destinations and unforgettable moments.',
    images: ['/packages/Romantic Getaways & Honeymoons1.jpg', '/packages/Romantic Getaways & Honeymoons2.jpg', '/packages/Romantic Getaways & Honeymoons3.jpg'],
  },
  {
    title: 'Exotic Wildlife & Nature Safaris',
    description: 'Experience close encounters with nature and wildlife in lush jungles and open savannahs.',
    images: ['/packages/Exotic Wildlife & Nature Safaris1.jpg', '/packages/Exotic Wildlife & Nature Safaris2.jpg', '/packages/Exotic Wildlife & Nature Safaris3.jpg'],
  },
];

const Blogtypes = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-8 bg-white">
      {gallerySections.map((section, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className=""
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl mt-12 font-bold text-gray-800">{section.title}</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">{section.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg group"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <Image
                  src={img}
                  alt={`${section.title} ${i + 1}`}
                  height={200}
                  width={200}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blogtypes;
