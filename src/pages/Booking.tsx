import React from "react";
import Navbar from "@/components/layout/Navbar";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Booking = () => {
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
            src="/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"
            alt=""
            className="min-w-[200%] min-h-[200%] object-cover"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-tl-full"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>

        {/* Booking Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
          <BookingSection
            title="Termin Buchen"
            subtitle="Planen Sie Ihr Premium-Spa-Erlebnis mit unserem einfachen Buchungssystem."
          />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;
