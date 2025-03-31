import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to a server
      setFormStatus("success");
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative">
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
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="spa-title text-4xl md:text-5xl font-bold mb-4">
              Kontaktieren Sie uns
            </h1>
            <p className="text-lg text-[#333333] mb-12">
              Haben Sie Fragen zu unseren Spa-Behandlungen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {/* Address Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#A06B55]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-[#A06B55]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#A06B55]">Besuchen Sie uns</h3>
              <p className="text-[#333333]">
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Deutschland
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#A06B55]/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-[#A06B55]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#A06B55]">Rufen Sie uns an</h3>
              <p className="text-[#333333]">+49 123 456789</p>
              <p className="text-[#333333] mt-2">Mo-Fr: 9:00 - 18:00 Uhr</p>
              <p className="text-[#333333]">Sa: 10:00 - 16:00 Uhr</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#A06B55]/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-[#A06B55]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#A06B55]">Schreiben Sie uns</h3>
              <p className="text-[#333333]">info@rochelaspa.de</p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-[#A06B55] hover:text-[#D4B59E] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-[#A06B55] hover:text-[#D4B59E] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-[#A06B55] hover:text-[#D4B59E] transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#A06B55]">Kontaktformular</h2>
            
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.</span>
              </div>
            )}
            
            {formStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="mr-2 h-5 w-5" />
                <span>Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#333333] mb-1">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                    required
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Terminanfrage">Terminanfrage</option>
                    <option value="Spa-Behandlungen">Fragen zu Spa-Behandlungen</option>
                    <option value="Geschenkgutscheine">Geschenkgutscheine</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                  required
                ></textarea>
              </div>
              
              <div className="text-right">
                <Button
                  type="submit"
                  className="bg-[#A06B55] hover:bg-[#B27C66] text-white px-6 py-2 rounded-md transition-colors"
                >
                  Nachricht senden
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750825!2d13.372469776926155!3d52.516933065063696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1710834992897!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
