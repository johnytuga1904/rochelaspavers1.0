import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Twitter 
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-[#A06B55] text-white w-full py-12 px-6 md:px-12 lg:px-24", className)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="flex flex-col space-y-4">
            <div className="mb-2">
              <span className="text-[#F8F4F1] font-semibold text-xl">Rochela Spa</span>
            </div>
            <p className="text-sm text-[#F8F4F1] max-w-xs">
              Rochela Spa bietet luxuriöse Wellness-Behandlungen und Entspannungserlebnisse. Wir schaffen einen Ort der Ruhe und des Wohlbefindens für Körper und Geist.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-[#F8F4F1] hover:text-[#D4B59E] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#F8F4F1] hover:text-[#D4B59E] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#F8F4F1] hover:text-[#D4B59E] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold mb-2 text-[#F8F4F1]">Schnelllinks</h3>
            <Link to="/" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Startseite
            </Link>
            <Link to="/services" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Leistungen
            </Link>
            <Link to="/booking" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Terminbuchung
            </Link>
            <Link to="/gift-cards" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Geschenkgutscheine
            </Link>
            <Link to="/contact" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold mb-2 text-[#F8F4F1]">Unsere Leistungen</h3>
            <Link to="/services" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Japanese Head Spa
            </Link>
            <Link to="/services" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              BIAB Maniküre & Pediküre
            </Link>
            <Link to="/services" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Shellac Maniküre & Pediküre
            </Link>
            <Link to="/services" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Microblading & Microshading
            </Link>
            <Link to="/services" className="text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
              Sugaring Haarentfernung
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-2 text-[#F8F4F1]">Kontakt</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#D4B59E]" />
              <p className="text-sm text-[#F8F4F1]">Musterstraße 123, 12345 Musterstadt, Deutschland</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="flex-shrink-0 text-[#D4B59E]" />
              <p className="text-sm text-[#F8F4F1]">+49 123 456789</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0 text-[#D4B59E]" />
              <p className="text-sm text-[#F8F4F1]">info@rochelaspa.de</p>
            </div>
            <Button className="mt-2 bg-[#F8F4F1] text-[#8A5A44] hover:bg-[#D4B59E] hover:text-[#F8F4F1]" asChild>
              <Link to="/contact">Kontaktieren Sie uns</Link>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4B59E] pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#F8F4F1]">
              {currentYear} Rochela Spa. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
                Datenschutz
              </Link>
              <Link to="/terms" className="text-sm text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
                AGB
              </Link>
              <Link to="/imprint" className="text-sm text-[#F8F4F1] hover:text-[#D4B59E] hover:underline transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
