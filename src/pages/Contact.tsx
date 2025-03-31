import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFEAD9] text-black">
      <Navbar />
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">
            Kontakt
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-medium mb-6">
                Kontaktieren Sie uns
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-[rgb(37,150,190)]" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-gray-600 mt-1">
                      123 Serenity Lane, Spa City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-[rgb(37,150,190)]" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-gray-600 mt-1">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-[rgb(37,150,190)]" />
                  <div>
                    <h3 className="font-medium">E-Mail</h3>
                    <p className="text-gray-600 mt-1">info@rochelaspa.com</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-medium mb-6 mt-10">
                Folgen Sie uns
              </h2>
              <div className="flex space-x-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-[rgb(37,150,190)] hover:text-[rgb(27,120,160)] transition-colors"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-[rgb(37,150,190)] hover:text-[rgb(27,120,160)] transition-colors"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[rgb(37,150,190)] hover:text-[rgb(27,120,160)] transition-colors"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-medium mb-6">Nachricht senden</h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(37,150,190)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(37,150,190)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(37,150,190)]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgb(37,150,190)] hover:bg-[rgb(27,120,160)] text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
