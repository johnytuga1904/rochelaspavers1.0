import React from "react";
import Navbar from "@/components/layout/Navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Services = () => {
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
        {/* Services Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-10"
        >
          <ServicesSection
            title="Unsere Premium-Dienstleistungen"
            subtitle="Genießen Sie unsere sorgfältig zusammengestellte Auswahl an luxuriösen Schönheitsbehandlungen"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
