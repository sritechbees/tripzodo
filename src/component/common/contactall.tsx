import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP,
} from "react-icons/fa";
import Image from 'next/image';
import Head from 'next/head';

const Contactall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) {
      setError("Name must contain only alphabets.");
      return;
    }

    if (!nameRegex.test(formData.subject)) {
      setError("Subject must contain only alphabets.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setError("Phone number must be exactly 10 digits without special characters.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Email must be valid and contain '@'.");
      return;
    }

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMsg("📩 Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch {
      setError('Failed to send message. Please try again later.');
    }
  };
  const contactDetails = [
    {
      title: 'Office Location',
      content: ' 178/4A ID, Panduranga Elite Enclave, Kundarappalli, Krishnagiri. Tamil Nadu 635-115',
      image: '/contact/locationn.png',
    },
    {
      title: 'Email Address',
      content: 'Travel@tripzodo.com',
      image: '/contact/emaill.png',
    },
    {
      title: 'Hotline',
      content: '+91 9500093383',
      image: '/contact/hotlinee.png',
    },
  ];

  return (
    // <App_layout>
    <>
      <Head>
        <title>Tripzodo | Contact</title>
      </Head>
      <div className="bg-white  text-gray-800">
        {/* Hero Section */}
        {/* <div
          className="relative h-[60vh] bg-center bg-cover mt-16"
          style={{ backgroundImage: "url('/contact/contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[#fed42a] text-4xl md:text-6xl font-extrabold drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)]"
            >
              Contact
            </motion.h1>
          </div>
        </div> */}

        {/* Success/Error Messages */}
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-md z-50"
          >
            {successMsg}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-md z-50"
          >
            ❌ {error}
          </motion.div>
        )}

        {/* Contact Info */}
        <section className="max-w-6xl mx-auto px-4 py-2 mt-12">
          <div className="flex justify-center mb-8">
            <span className="bg-yellow-100 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-300">
              Contact us
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 + index * 0.2 }}
              >
                <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">

                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#fed42a] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

                  {/* Card Content */}
                  <div className="relative z-10 p-6 flex flex-col items-center text-center h-full bg-white/80 backdrop-blur-md rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={200}
                      width={200}
                      className="object-cover rounded mb-4 transition-all duration-500 group-hover:scale-105"
                    />
                    <h3 className="text-xl font-semibold text-gray-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Contact Form */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-yellow-100 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-md transition duration-300">
                Contact with us
              </span>
              <h3 className="text-4xl font-bold mt-5 text-gray-800 mb-4">
                Have <span className='text-[#fed42a]'>questions</span>? Feel free to write us
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Reach out to us anytime. We are here to help you with any queries regarding our services, availability, or anything else.
              </p>
              <div className="flex space-x-3 mt-5 text-xl text-gray-700">
                {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-900">
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (10 digits)"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#fed42a] hover:bg-yellow-400 text-black font-semibold mb-2 py-2 px-6 rounded-md transition duration-300"
                >
                  Send a Message
                </button>
              </div>

            </motion.form>
          </div>
        </section>
      </div>
      {/* <GetUpdates /> */}
    {/* </App_layout> */}
    </>
  );
};

export default Contactall;
