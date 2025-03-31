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
    <div className="min-h-screen bg-[#FFEAD9] text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        {/* Booking Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
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
