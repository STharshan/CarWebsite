import React, { useState, useEffect } from "react";
import {
  FaCar,
  FaTools,
  FaOilCan,
  FaCog,
  FaCheckCircle,
  FaFire,
  FaLeaf,
  FaWrench,
  FaTachometerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const carbonServices = [
  {
    id: "diagnostic",
    title: "Engine Diagnostic",
    desc: "Complete engine diagnostic scan to identify issues and optimize performance",
    price: "30",
    icon: FaTachometerAlt,
    color: "blue",
    features: ["Full system scan", "Error code reading", "Performance analysis"],
  },
  {
    id: "carbon",
    title: "Carbon Clean",
    desc: "Professional carbon removal service to restore engine efficiency and power",
    price: "80",
    icon: FaFire,
    color: "red",
    features: ["Carbon deposit removal", "Improved combustion", "Better fuel economy"],
  },
  {
    id: "360",
    title: "360 Complete Clean",
    desc: "Comprehensive cleaning package combining carbon removal with fuel system treatment",
    price: "100",
    icon: FaLeaf,
    color: "green",
    features: ["Carbon cleaning", "Fuel system treatment", "Complete optimization"],
    popular: true,
  },
  {
    id: "egr",
    title: "EGR Service",
    desc: "Specialized EGR valve cleaning using industrial-grade cleaning solutions",
    price: "100",
    icon: FaCog,
    color: "purple",
    features: ["EGR valve cleaning", "Carbon removal", "Flow restoration"],
  },
  {
    id: "detox",
    title: "Engine Detox Package",
    desc: "Ultimate engine restoration combining all cleaning services for maximum results",
    price: "130",
    icon: FaShieldAlt,
    color: "orange",
    features: ["Full carbon clean", "EGR service", "Fuel treatment", "Complete restore"],
    premium: true,
  },
];

const generalServices = [
  {
    title: "Oil Change Service",
    desc: "Premium oil replacement with filter change",
    price: "45",
    icon: FaOilCan,
  },
  {
    title: "Brake Service",
    desc: "Brake pad replacement and system inspection",
    price: "85",
    icon: FaTools,
  },
  {
    title: "Full Vehicle Service",
    desc: "Comprehensive vehicle maintenance check",
    price: "120",
    icon: FaCar,
  },
  {
    title: "Tire Rotation",
    desc: "Professional tire rotation and balance",
    price: "40",
    icon: FaWrench,
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("carbon");
  const [selectedService, setSelectedService] = useState(carbonServices[0]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const colorMap = {
    blue: "from-blue-600 to-blue-700",
    red: "from-red-600 to-red-700",
    green: "from-green-600 to-green-700",
    purple: "from-purple-600 to-purple-700",
    orange: "from-orange-600 to-orange-700",
  };

  const borderColorMap = {
    blue: "border-blue-500/50",
    red: "border-red-500/50",
    green: "border-green-500/50",
    purple: "border-purple-500/50",
    orange: "border-orange-500/50",
  };

  return (
    <section
      id="services"
         className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      {/* Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>


      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-red-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Auto Care</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert services to keep your vehicle running at peak performance
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full p-1">
            <button
              onClick={() => setActiveTab("carbon")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "carbon"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Carbon Cleaning
            </button>
            <button
              onClick={() => setActiveTab("general")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "general"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              General Services
            </button>
          </div>
        </div>

        {/* Carbon Cleaning Services */}
        {activeTab === "carbon" && (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Service Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {carbonServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    onClick={() => setSelectedService(service)}
                    className={`relative cursor-pointer group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                      selectedService.id === service.id
                        ? borderColorMap[service.color]
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    {service.premium && (
                      <div className="absolute -top-3 right-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                        PREMIUM
                      </div>
                    )}

                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[service.color]} flex items-center justify-center mb-4`}>
                      <Icon className="text-2xl text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.desc}</p>

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-3xl font-bold">£{service.price}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedService.id === service.id
                          ? `${borderColorMap[service.color]} bg-${service.color}-600/20`
                          : "border-slate-600"
                      }`}>
                        {selectedService.id === service.id && (
                          <FaCheckCircle className={`text-${service.color}-500`} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="sticky top-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[selectedService.color]} flex items-center justify-center mb-6`}>
                  {React.createElement(selectedService.icon, { className: "text-3xl text-white" })}
                </div>

                <h3 className="text-2xl font-bold mb-3">{selectedService.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{selectedService.desc}</p>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Includes:</p>
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className={`text-${selectedService.color}-500 mt-1 flex-shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 uppercase text-sm tracking-wider">Total Price</span>
                    <span className="text-4xl font-bold">£{selectedService.price}</span>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${colorMap[selectedService.color]} hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    Book This Service
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* General Services */}
        {activeTab === "general" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-2xl text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.desc}</p>

                  <div className="flex items-end justify-between pt-4 border-t border-slate-700">
                    <span className="text-3xl font-bold">£{service.price}</span>
                    <button className="text-red-500 hover:text-red-400 font-semibold text-sm transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Add-ons Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl px-12 py-8">
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">Additional Services</p>
            <p className="text-2xl font-semibold mb-4">Fuel Treatments Available</p>
            <div className="flex gap-4 justify-center text-gray-300 mb-4">
              <span>Petrol</span>
              <span>•</span>
              <span>Diesel</span>
              <span>•</span>
              <span>AdBlue</span>
            </div>
            <p className="text-4xl font-bold">
              £20 <span className="text-gray-500 text-lg font-normal">each</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}