import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

// Bilder für jede Kategorie aus den entsprechenden Ordnern
const galleryData = {
  "Manicure & Pedicure": [
    { id: 1, src: "/images/manicure-pedicure/manicure1.jpg", alt: "Manicure Behandlung 1" },
    { id: 2, src: "/images/manicure-pedicure/manicure2.jpg", alt: "Manicure Behandlung 2" },
    { id: 3, src: "/images/manicure-pedicure/manicure3.jpg", alt: "Manicure Behandlung 3" },
    { id: 4, src: "/images/manicure-pedicure/manicure4.jpg", alt: "Manicure Behandlung 4" },
    { id: 5, src: "/images/manicure-pedicure/manicure5.jpg", alt: "Manicure Behandlung 5" },
    { id: 6, src: "/images/manicure-pedicure/manicure6.jpg", alt: "Manicure Behandlung 6" },
    { id: 7, src: "/images/manicure-pedicure/pedicure1.jpg", alt: "Pedicure Behandlung" },
  ],
  "Permanent Make-Up": [
    { id: 1, src: "/images/permanent-make-up/augenbrauen.jpg", alt: "Permanent Make-Up Augenbrauen" },
    { id: 2, src: "/images/permanent-make-up/lippen.jpg", alt: "Permanent Make-Up Lippen" },
    { id: 3, src: "/images/permanent-make-up/eyeliner.jpg", alt: "Permanent Make-Up Eyeliner" },
    { id: 4, src: "/images/permanent-make-up/vorher-nachher.jpg", alt: "Vor und Nach Behandlung" },
  ],
  "Damen Sugaring": [
    { id: 1, src: "/images/sugaring/behandlung.jpg", alt: "Sugaring Behandlung" },
    { id: 2, src: "/images/sugaring/beine.jpg", alt: "Sugaring Beine" },
    { id: 3, src: "/images/sugaring/gesicht.jpg", alt: "Sugaring Gesicht" },
    { id: 4, src: "/images/sugaring/arme.jpg", alt: "Sugaring Arme" },
  ],
  "Augenbrauen & Wimpernbehandlungen": [
    { id: 1, src: "/images/augenbrauen-wimpern/formung.jpg", alt: "Augenbrauen Formung" },
    { id: 2, src: "/images/augenbrauen-wimpern/verlaengerung.jpg", alt: "Wimpernverlängerung" },
    { id: 3, src: "/images/augenbrauen-wimpern/lifting.jpg", alt: "Wimpernlifting" },
    { id: 4, src: "/images/augenbrauen-wimpern/faerben-brauen.jpg", alt: "Augenbrauen Färben" },
    { id: 5, src: "/images/augenbrauen-wimpern/faerben-wimpern.jpg", alt: "Wimpern Färben" },
  ],
};

const Gallery = () => {
  const categories = Object.keys(galleryData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative">
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
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="spa-title text-4xl md:text-5xl font-bold mb-4">
              Galerie
            </h1>
            <p className="text-lg text-[#333333] mb-12">
              Entdecken Sie Eindrücke unserer Behandlungen und Ergebnisse in unserer Bildergalerie.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="mb-12">
            <Tab.Group onChange={(index) => setSelectedCategory(categories[index])}>
              {/* Mobile Hamburger Menu */}
              <div className="md:hidden mb-4">
                <div className="flex items-center justify-between bg-white rounded-md shadow px-4 py-3">
                  <span className="font-medium text-[#333333]">{selectedCategory}</span>
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1 rounded-md bg-[#A06B55] text-white"
                  >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
                
                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg py-1 max-h-60 overflow-auto">
                    {categories.map((category, idx) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          cn(
                            "w-full text-left px-4 py-3 font-medium text-sm border-b border-gray-100 last:border-b-0",
                            selectedCategory === category
                              ? "bg-[#A06B55]/10 text-[#A06B55]"
                              : "text-[#333333] hover:bg-[#D4B59E]/10"
                          )
                        }
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category}
                      </Tab>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Desktop Tab List */}
              <Tab.List className="hidden md:flex flex-wrap justify-center space-x-4 mb-8">
                {categories.map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      cn(
                        "px-4 py-2 rounded-md font-medium text-base transition-all duration-200 focus:outline-none",
                        selected
                          ? "bg-[#A06B55] text-white shadow-md"
                          : "bg-white text-[#333333] hover:bg-[#D4B59E]/20"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {categories.map((category) => (
                  <Tab.Panel key={category}>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {galleryData[category].map((item) => (
                        <motion.div
                          key={item.id}
                          variants={itemVariants}
                          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="aspect-square relative">
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-[#333333]">{item.alt}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-semibold text-[#A06B55] mb-4">
              Möchten Sie einen Termin vereinbaren?
            </h2>
            <p className="text-lg mb-6">
              Buchen Sie jetzt Ihren Wunschtermin für eine unserer Behandlungen.
            </p>
            <div className="flex justify-center">
              <a
                href="/booking"
                className="bg-[#A06B55] text-white px-6 py-3 rounded-md hover:bg-[#8A5A44] transition-colors duration-300 inline-block"
              >
                Termin buchen
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
