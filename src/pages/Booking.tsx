import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import CustomTreatwellButton from "@/components/booking/CustomTreatwellButton";

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
          <section className="py-20 px-4 md:px-8 lg:px-16 bg-cream-50 min-h-[600px]" id="booking">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="spa-title text-3xl md:text-4xl font-serif mb-4">
                  Termin Buchen
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Buchen Sie Ihren Termin direkt über Treatwell, unseren vertrauenswürdigen Buchungspartner.
                </p>
                
                <div className="flex justify-center mt-8">
                  <CustomTreatwellButton 
                    buttonText="Jetzt Termin buchen"
                    variant="default"
                    size="lg"
                    className="bg-[#8A5A44] hover:bg-[#6D4836] text-white"
                  />
                </div>
                
                <div className="mt-12 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-[#8A5A44] mb-3">Warum über Treatwell buchen?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-[#8A5A44] mr-2">✓</span>
                      <span>Einfache und schnelle Online-Buchung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8A5A44] mr-2">✓</span>
                      <span>Sofortige Terminbestätigung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8A5A44] mr-2">✓</span>
                      <span>Übersicht über alle verfügbaren Termine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8A5A44] mr-2">✓</span>
                      <span>Erinnerungen vor Ihrem Termin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;
