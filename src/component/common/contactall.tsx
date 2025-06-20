import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Image from 'next/image';

const Contactall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (name && email && phone && subject && message) {
      setMessageSent(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setMessageSent(false);
      }, 4000);
    }
  };

  const contactDetails = [
    {
      title: 'Office Location',
      content: '178/4A ID, Panduranga Elite Enclave, Kundarappalli, Krishnagiri. Tamil Nadu 635-115',
      image: '/contact/locationn.png',
    },
    {
      title: 'Email Address',
      content: 'travel@tripzodo.com',
      image: '/contact/emaill.png',
    },
    {
      title: 'Hotline',
      content: '+91 9019412772',
      image: '/contact/hotlinee.png',
    },
  ];

  return (
    <div className="bg-white mt-16 text-gray-800">
      {/* ✅ Success Message - Top Right */}
      {messageSent && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-96 right-5 bg-green-600 text-white px-6 py-3 rounded-md shadow-md z-50"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}

      <section className="max-w-6xl mx-auto px-4">
        {/* Contact Cards */}
        <div className="flex justify-center mb-8 py-5">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fed42a] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />
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
            <h3 className="text-5xl font-bold mt-5 text-gray-800 mb-4">
              Have <span className="text-[#fed42a]">questions?</span> Feel free to write us
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              Reach out to us anytime. We are here to help you with any queries
              regarding our services, availability, or anything else.
            </p>

            <div className="flex space-x-3 mt-5 text-xl text-gray-700">
              {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP].map(
                (Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-full hover:bg-[#fed42a] hover:text-gray-900">
                    <Icon />
                  </a>
                )
              )}
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
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md w-full"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-md w-full"
                required
              />
              <input
                name="subject"
                type="text"
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
                className="bg-[#fed42a] hover:bg-yellow-400 text-black font-semibold py-2 mb-4 px-6 rounded-md transition duration-300"
              >
                Send a Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contactall;
