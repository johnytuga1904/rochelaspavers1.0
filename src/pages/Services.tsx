import React from "react";
import Navbar from "@/components/layout/Navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  // Animation variants for scroll reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 relative">
        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center items-center opacity-5 overflow-hidden">
          <img
            className="min-w-[200%] min-h-[200%] object-cover"
            src={import.meta.env.DEV ? "/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png" : "/rochelaspavers1.0/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"}
            alt=""
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-tl-full"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full mb-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="spa-title text-4xl md:text-5xl font-bold">
              Unsere Leistungen
            </h1>
            <p className="text-xl max-w-3xl mx-auto mt-6 text-[#333333]">
              Entdecken Sie unsere exklusiven Spa-Behandlungen und Wellness-Angebote für Ihr persönliches Wohlbefinden.
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="relative z-10">
          <ServicesSection
            title="Luxuriöse Spa-Behandlungen"
            subtitle="Entspannung und Wohlbefinden für Körper und Geist"
          />
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
