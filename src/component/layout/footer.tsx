'use client';
import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Footer = () => {
  return (
    <footer className="relative bg-[#111] text-white py-16 overflow-hidden">
      {/* Animated Blobs */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 0.15 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-[#fed42a] rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 0.15 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-[#fed42a] rounded-full blur-2xl z-0"
      />

      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-8 relative z-10">
        {/* Logo */}
       <motion.div
  className="w-full sm:w-[48%] lg:w-[23%]"
  custom={1}
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="relative w-40 h-24 mb-4">
    {/* Blurred glowing shadow background */}
   
    {/* Logo image */}
    <Image
      src="/home/logo.png"
      height={200}
      width={200}
      alt="Logo"
      className="relative z-10 mt-10 ml-10 rounded  hover:scale-105 transition duration-300"
    />
  </div>
</motion.div>

        {/* Pages */}
        <motion.div
  className="w-full sm:w-[48%] lg:w-[23%]"
  custom={2}
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-xl font-semibold mb-4 text-[#fed42a]">Pages</h2>
  <ul className="text-sm text-gray-400 space-y-2">
    {[
      { name: 'Home', path: '/' },
      { name: 'About us', path: '/about/about_us' },
      { name: 'Contact us', path: '/contact' }
    ].map((page, i) => (
      <li key={i}>
        <Link href={page.path} className="hover:text-[#fed42a] transition duration-300">
          {page.name}
        </Link>
      </li>
    ))}
  </ul>
</motion.div>

        {/* GoWilds Description */}
        <motion.div
          className="w-full sm:w-[48%] lg:w-[23%]"
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-[#fed42a] font-bold mb-4">GoWilds</h2>
          <p className="text-sm text-gray-400 mb-4">
            To take trivial example which us ever undertakes laborious physical exercise except obsome.
          </p>
          <div className="flex space-x-3">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gray-800 hover:text-[#fed42a] p-2 rounded-full hover:bg-gray-700 transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="w-full sm:w-[48%] lg:w-[23%]"
          custom={4}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4 text-[#fed42a]">Contact</h2>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#fed42a] mr-3" />
              +91 9019412772 
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#fed42a] mr-3" />
             travel@tripzodo.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#fed42a] text-2xl mr-3" />
             178/4A ID, Panduranga Elite Enclave, Kundarappalli, Krishnagiri. Tamil Nadu 635-115
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 hover:text-white mt-12 border-t border-[#fed42a] pt-4 px-4 relative z-10">
        © 2025 Copyrights by GoWilds. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
