import React, { useEffect } from "react";
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaTools, 
  FaAward,
  FaUserFriends,
  FaShieldAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const stats = [
    { number: "500+", label: "Happy Customers", icon: FaUserFriends },
    { number: "5+", label: "Years Experience", icon: FaAward },
    { number: "99%", label: "Success Rate", icon: FaCheckCircle },
    { number: "24/7", label: "Support Available", icon: FaShieldAlt },
  ];

  const features = [
    {
      icon: FaTools,
      title: "Expert Technicians",
      desc: "Certified professionals with years of automotive experience"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Mobile Service",
      desc: "We come to you - home, office, or anywhere convenient"
    },
    {
      icon: FaClock,
      title: "Flexible Hours",
      desc: "Evening and weekend appointments available"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Guaranteed",
      desc: "All work backed by our satisfaction guarantee"
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-red-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Our Service</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-orange-600 rounded-full"></div>
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We're dedicated to providing professional automotive services that keep your vehicle running at peak performance. Our mobile approach brings expert care directly to your location, saving you time and hassle.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With cutting-edge equipment and proven techniques, we deliver results that improve engine efficiency, reduce emissions, and extend vehicle lifespan.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {[
                  "Professional certified technicians",
                  "State-of-the-art equipment",
                  "Transparent pricing - no hidden fees",
                  "Satisfaction guaranteed on all services",
                  "Eco-friendly cleaning solutions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/40 transition-colors">
                      <FaCheckCircle className="text-red-500 text-sm" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div data-aos="fade-left" className="space-y-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-left"
                  data-aos-delay={idx * 100}
                  className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          data-aos="fade-up"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <Icon className="text-4xl text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Service Hours Card */}
        <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                  <FaClock className="text-4xl text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Service Hours</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Monday - Friday</p>
                    <p className="font-semibold text-white">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Saturday</p>
                    <p className="font-semibold text-white">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Sunday</p>
                    <p className="font-semibold text-white">By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-green-500">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-semibold">Available Now</span>
                  </div>
                  <p className="text-xs text-gray-400">Fast response time</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="inline-block bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Contact us today for a free consultation and experience the difference professional service makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07752549740"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-600/30 transition-all duration-300 transform hover:scale-105"
              >
                <FaPhoneAlt />
                <span>Call Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <button className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300">
                <FaStar />
                <span>View Reviews</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}