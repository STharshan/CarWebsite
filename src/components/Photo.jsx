"use client";

import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const images = [
    { src: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg", category: "engine" },
    { src: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg", category: "exterior" },
    { src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg", category: "interior" },
    { src: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg", category: "engine" },
    { src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg", category: "exterior" },
    { src: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg", category: "interior" },
    { src: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg", category: "engine" },
    { src: "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg", category: "exterior" },
    { src: "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg", category: "interior" },
    { src: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg", category: "engine" },
  ];

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      {/* Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 mb-16">
        <div className="inline-block">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Work</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="w-2 h-2 bg-red-600 rotate-45"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
        </div>

        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Precision engineering meets automotive passion. Every project tells a story of excellence.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {["all", "engine", "exterior", "interior"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-8 py-3 uppercase tracking-wider text-sm font-semibold rounded-lg transition-all duration-300
                ${filter === cat 
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }
              `}
            >
              {cat === "all" ? "All Work" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-xl cursor-pointer
                ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
                ${i % 7 === 0 ? "lg:col-span-1 lg:row-span-2" : ""}
              `}
              onClick={() => setSelectedImage(img.src)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-800">
                <img
                  src={img.src}
                  alt={`Workshop ${img.category}`}
                  className={`
                    w-full object-cover transition-all duration-700 group-hover:scale-110
                    ${i % 5 === 0 ? "h-[500px]" : i % 7 === 0 ? "h-[400px]" : "h-[300px]"}
                  `}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Red accent on hover */}
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-red-600/30">
                  <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">
                    {img.category}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-lg uppercase tracking-wide">
                        View Details
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Click to enlarge
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-6xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "15+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-600/50 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}