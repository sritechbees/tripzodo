'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: 'Santhosh Mathew ',
    role: 'Founder & Director',
    image: '/company/santhosh1.jpeg',
  },
  {
    name: 'Sudha Nandini GK',
    role: 'Co Founder & Director ',
    image: '/company/sudha1.jpeg',
  },
  {
    name: 'Ravi Shankar ',
    role: 'Travel Consultant',
    image: '/company/Ravi Shankar.jpeg',
  },
  {
    name: 'Rakesh',
    role: 'Operations Head',
    image: '/company/rakesh.jpeg',
  },
  {
    name: 'Sandeep Mathew',
    role: 'Finance ',
    image: '/company/Sandeep Mathew.jpeg',
  },
  {
    name: 'Mario Wilson ',
    role: 'Content Creator',
    image: '/company/Mario Wilson.jpeg',
  },
];

const MeetTheTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative bg-white text-center py-12 px-6 overflow-hidden">
      {/* Top Header */}
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-[#fed42a]">Meet Our</span> Team
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Behind The Creative Process Of Building Your Brand
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto z-10 relative">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="w-32 h-32 rounded-full border-8 border-[#fed42a] overflow-hidden shadow-lg mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Background Shape */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-tr from-[#fed42a] to-white rotate-[-3deg] origin-bottom z-0"></div>
    </section>
  );
};

export default MeetTheTeam;
