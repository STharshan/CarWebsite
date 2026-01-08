import React from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white font-['Oswald']">

      {/* ================= TOP BRAND STRIP ================= */}
      <div className="border-b border-gray-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Wrench className="text-red-600 animate-pulse" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
              Auto<span className="text-red-600">Tech</span> Pro
            </h2>
          </div>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base tracking-wide">
            Premium Performance Tuning & Professional ECU Services
          </p>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* SERVICES */}
        <div className="group">
          <h3 className="uppercase tracking-wider text-lg mb-6 text-gray-300 font-semibold border-b-2 border-red-600 pb-2 inline-block">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Performance Remapping",
              "Engine Diagnostics",
              "Emissions Solutions",
              "Transmission Tuning",
              "ECU Programming",
              "Vehicle Optimization",
            ].map((service, i) => (
              <li key={i} className="transform transition-all duration-300 hover:translate-x-2">
                <a
                  href="#services"
                  className="text-gray-400 hover:text-red-600 transition flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="uppercase tracking-wider text-lg mb-6 text-gray-300 font-semibold border-b-2 border-red-600 pb-2 inline-block">
            Get In Touch
          </h3>

          <div className="space-y-5 text-sm text-gray-400">

            <div className="flex gap-3 items-start group hover:text-gray-300 transition-colors">
              <MapPin size={18} className="text-red-600 mt-1 flex-shrink-0" />
              <p>
                123 Performance Drive<br />
                Automotive District<br />
                Tech City, TC 12345
              </p>
            </div>

            <div className="flex gap-3 items-center group hover:text-gray-300 transition-colors">
              <Phone size={18} className="text-red-600 flex-shrink-0" />
              <a href="tel:+1234567890" className="hover:text-red-600 transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex gap-3 items-center group hover:text-gray-300 transition-colors">
              <Mail size={18} className="text-red-600 flex-shrink-0" />
              <a href="mailto:info@autotechpro.com" className="hover:text-red-600 transition-colors">
                info@autotechpro.com
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL & HOURS */}
        <div>
          <h3 className="uppercase tracking-wider text-lg mb-6 text-gray-300 font-semibold border-b-2 border-red-600 pb-2 inline-block">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11 rounded-lg
                border border-gray-800
                flex items-center justify-center
                text-gray-400
                hover:text-white hover:border-red-600 hover:bg-red-600/10
                transition-all duration-300
                transform hover:scale-110 hover:rotate-6
              "
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11 rounded-lg
                border border-gray-800
                flex items-center justify-center
                text-gray-400
                hover:text-white hover:border-red-600 hover:bg-red-600/10
                transition-all duration-300
                transform hover:scale-110 hover:rotate-6
              "
            >
              <Instagram size={20} />
            </a>
          </div>

          
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800 bg-black/50 py-6">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-3 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a href="#terms" className="hover:text-red-600 transition-colors">
              Terms & Conditions
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a href="#about" className="hover:text-red-600 transition-colors">
              About Us
            </a>
          </div>

          <p className="text-center text-sm text-gray-500">
            &copy; 2025 AutoTech Pro. All rights reserved.
          </p>

          <p className="text-center mt-2 text-xs text-gray-600">
            Professional automotive services with cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  );
}