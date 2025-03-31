import React from "react";
import Navbar from "@/components/layout/Navbar";
import GiftCardSection from "@/components/sections/GiftCardSection";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const GiftCards = () => {
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
        {/* Gift Card Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <GiftCardSection
            title="Verschenken Sie ein Luxus-Erlebnis"
            subtitle="Perfekt für Geburtstage, Jubiläen oder einfach so. Unsere digitalen Geschenkgutscheine werden sofort zugestellt und können für alle unsere Premium-Dienstleistungen eingelöst werden."
          />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GiftCards;
