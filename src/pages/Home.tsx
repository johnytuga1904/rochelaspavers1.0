import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  // Animation variants for scroll reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Logo Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center items-center opacity-5 overflow-hidden">
          <img
            src={import.meta.env.DEV ? "/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png" : "/rochelaspavers1.0/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"}
            alt=""
            className="min-w-[200%] min-h-[200%] object-cover"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-tl-full"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto px-4 relative z-10">
          {/* Left Column - Empty Space */}
          <div className="hidden md:block md:col-span-1"></div>
          
          {/* Center Column - Logo and Text */}
          <div className="md:col-span-10 text-center">
            {/* Logo with decorative elements */}
            <div className="mb-10 inline-flex justify-center">
              <motion.div
                className="relative p-8 border-4 border-[#A06B55] border-opacity-30 bg-white bg-opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo image */}
                <img
                  src={import.meta.env.DEV ? "/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png" : "/rochelaspavers1.0/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"}
                  alt="Rochela Spa Logo"
                  className="h-auto max-h-[450px]"
                />
              </motion.div>
            </div>
            
            <motion.h2
              className="spa-title text-2xl md:text-3xl font-medium mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Luxuriöse Schönheitsbehandlungen für Körper und Seele
            </motion.h2>
          </div>
          
          {/* Right Column - Empty Space */}
          <div className="hidden md:block md:col-span-1"></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#F8F4F1]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="spa-title text-3xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Bereit für Ihr persönliches Spa-Erlebnis?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Buchen Sie noch heute Ihren Termin und gönnen Sie sich eine wohlverdiente Auszeit. Unsere Experten freuen sich darauf, Sie zu verwöhnen.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-[#A06B55] hover:bg-[#B27C66] text-white"
              asChild
            >
              <Link to="/booking">Jetzt Termin buchen</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#A06B55] text-[#A06B55] hover:bg-[#A06B55] hover:text-white"
              asChild
            >
              <Link to="/services">Unsere Leistungen</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
