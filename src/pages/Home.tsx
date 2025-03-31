import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Home = () => {
  // Animation variants for scroll reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#FFEAD9]">
      {/* Navigation */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section - Full Image Display */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full pt-32"
        >
          <div className="max-w-6xl mx-auto px-4 text-center p-8 rounded-lg shadow-lg">
            <img
              src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-8f00-51f6-a9a6-6b64f60ea1b2/raw?se=2025-03-30T14%3A17%3A50Z&sp=r&sv=2024-08-04&sr=b&scid=20566234-7866-58d0-bb6c-2107b3ced879&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-03-30T01%3A24%3A30Z&ske=2025-03-31T01%3A24%3A30Z&sks=b&skv=2024-08-04&sig=yInrLJyBpiZjAkL2nqmIe5%2BEug3n%2BJqisUi7n5Bp3Tw%3D"
              alt="Rochela Spa"
              className="h-auto object-contain mx-auto"
              style={{ maxHeight: "500px" }}
            />
            <p className="text-xl font-serif max-w-3xl mx-auto mt-6 text-[#3b3a3a]">
              Luxuriöses Schönheitserlebnis mit Premium Behandlungen in einer
              ruhigen Umgebung.
            </p>
          </div>
        </motion.div>
        {/* No Gift Card Section here anymore */}{" "}
        {/* Increased spacing to push footer down */}
        {/* Add more spacing to push footer down */}
        <div className="py-20"></div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
