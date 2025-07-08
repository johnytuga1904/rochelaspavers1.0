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
  Loader2,
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

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus("success");
        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus("error");
        setErrorMessage(data.message || "Es ist ein Fehler aufgetreten.");
      }
    } catch (error) {
      console.error('Fehler beim Senden des Formulars:', error);
      setFormStatus("error");
      setErrorMessage("Es konnte keine Verbindung zum Server hergestellt werden. Bitte versuchen Sie es später erneut.");
    }
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
                Ottikerweg 4<br />
                8006 Zürich<br />
                Schweiz
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#A06B55]/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-[#A06B55]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#A06B55]">Rufen Sie uns an</h3>
              <p className="text-[#333333]">+41 763209852</p>
              <p className="text-[#333333] mt-2">Mo-Fr: 9:00 - 18:00 Uhr</p>
              <p className="text-[#333333]">Sa: 10:00 - 16:00 Uhr</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#A06B55]/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-[#A06B55]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#A06B55]">Schreiben Sie uns</h3>
              <p className="text-[#333333]">info@rochela-spa.ch</p>
              <div className="flex space-x-3 mt-4">
                <a 
                  href="https://www.facebook.com/share/1Hty5mM7s8/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A06B55] hover:text-[#D4B59E] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/rochela.spa?igsh=OGx1djN4NGVwM3N4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A06B55] hover:text-[#D4B59E] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.treatwell.ch/place/rochela-spa/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A06B55] hover:text-[#D4B59E] transition-colors"
                  aria-label="Treatwell"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                  </svg>
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
            
            {formStatus === "loading" && (
              <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-md flex items-center">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                <span>Ihre Nachricht wird gesendet...</span>
              </div>
            )}
            
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.</span>
              </div>
            )}
            
            {formStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="mr-2 h-5 w-5" />
                <span>{errorMessage || "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."}</span>
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
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Nachricht senden"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map and Location Section */}
      <div className="w-full bg-[#F8F4F1] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="spa-title text-3xl text-center mb-8">So finden Sie uns</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Maps */}
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.7616767936864!2d8.545069776488936!3d47.38185397116889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0a520a8a6bd%3A0xf1d0d141b2e24447!2sOttikerweg%204%2C%208006%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1720358700000!5m2!1sen!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rochela Spa Standort"
              ></iframe>
            </div>
            
            {/* Location Image/Plan */}
            <div className="h-[400px] bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
              <div className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-[#A06B55] mb-2">Lageplan & Öffnungszeiten</h3>
                <div className="flex justify-center items-center" style={{ height: '40%' }}>
                  <img 
                    src="/images/location adresse.jpg" 
                    alt="Lageplan Rochela Spa" 
                    className="w-auto h-auto max-h-[100%] max-w-[85%] object-contain"
                  />
                </div>
                <div className="mt-2 text-sm">
                  <p className="mb-1"><strong>Anfahrt:</strong> Gut erreichbar mit den Tramlinien 10, 9 und Bus 33</p>
                  <p className="mb-3"><strong>Parkmöglichkeiten:</strong> Migros Parkhaus in der Nähe</p>
                  
                  <h4 className="font-semibold mb-1 text-[#A06B55]">Öffnungszeiten:</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    <p>Montag:</p>
                    <p>10:00 - 20:00</p>
                    <p>Dienstag:</p>
                    <p>18:00 - 20:00</p>
                    <p>Mittwoch:</p>
                    <p>18:00 - 20:00</p>
                    <p>Donnerstag:</p>
                    <p>10:00 - 20:00</p>
                    <p>Freitag:</p>
                    <p>10:00 - 20:00</p>
                    <p>Samstag:</p>
                    <p>10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
