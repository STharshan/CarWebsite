import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill in all required fields");
      return;
    }

    const number = "1234567890"; // Replace with actual number
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AVehicle: ${form.vehicle}%0AMessage: ${form.message}`;

    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-['Oswald'] py-24 px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">

        {/* LEFT — CONTACT INFO */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-widest leading-tight">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Connect</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
              <div className="w-3 h-3 bg-red-600 rotate-45"></div>
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Experience premium automotive services with direct, personalized communication. 
            No automated responses — just expert guidance when you need it.
          </p>

          {/* INFO BLOCKS with hover effects */}
          <div className="space-y-6 pt-4">

            <div className="group flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-red-600/20">
              <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-all">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-gray-300 leading-relaxed">
                  123 Auto Service Drive<br />
                  Downtown District, Your City
                </p>
              </div>
            </div>

            <div className="group flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-red-600/20">
              <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-all">
                <FaPhoneAlt className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <a
                  href="tel:1234567890"
                  className="text-gray-300 hover:text-red-500 transition text-lg"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>

            <div className="group flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-red-600/20">
              <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600/20 transition-all">
                <FaClock className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Hours</p>
                <ul className="text-gray-400 space-y-1.5">
                  <li className="flex justify-between gap-8">
                    <span>Monday – Friday</span>
                    <span className="text-gray-500">8:00 AM – 8:00 PM</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span>Saturday</span>
                    <span className="text-gray-500">9:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span className="text-gray-500">9:00 AM – 2:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SOCIAL with improved styling */}
          <div className="pt-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Follow Us</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/5 p-4 rounded-lg hover:bg-red-600 transition-all duration-300 border border-white/10 hover:border-red-600 group"
              >
                <FaFacebookF className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="bg-white/5 p-4 rounded-lg hover:bg-red-600 transition-all duration-300 border border-white/10 hover:border-red-600 group"
              >
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — WHATSAPP FORM */}
        <div className="relative">
          {/* Glow effect behind form */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl rounded-2xl"></div>
          
          <div className="relative border border-white/10 bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl shadow-2xl backdrop-blur-sm">

            <div className="mb-8">
              <h3 className="text-3xl font-bold uppercase mb-2 flex items-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Quick</span> 
                Enquiry
              </h3>
              <p className="text-gray-500">
                Get in touch instantly via WhatsApp
              </p>
            </div>

            <div className="space-y-5">

              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all group-hover:border-gray-600"
                />
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all group-hover:border-gray-600"
                />
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Vehicle Make & Model (Optional)"
                  value={form.vehicle}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all group-hover:border-gray-600"
                />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your service needs..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-700 px-5 py-4 text-sm rounded-lg focus:border-red-600 focus:outline-none transition-all resize-none group-hover:border-gray-600"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="
                  relative w-full py-4 overflow-hidden
                  bg-gradient-to-r from-red-600 to-red-700
                  hover:from-red-700 hover:to-red-800
                  transition-all duration-300
                  uppercase tracking-wider font-semibold
                  rounded-lg
                  group
                  shadow-lg shadow-red-600/30 hover:shadow-red-600/50
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send via WhatsApp
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <p className="text-xs text-gray-600 text-center leading-relaxed pt-2">
                 Your information is secure and used only to respond to your enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}