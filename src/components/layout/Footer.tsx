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
  Twitter,
  Music
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-[#A06B55] text-white w-full py-6 px-4 md:px-8 lg:px-12", className)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-4">
          {/* Kontakt-Überschrift */}
          <h3 className="text-base font-semibold mb-2 text-[#F8F4F1]">Kontakt</h3>
          
          {/* Kontaktinformationen nebeneinander */}
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <div className="flex items-center space-x-1">
              <MapPin size={14} className="flex-shrink-0 text-[#D4B59E]" />
              <p className="text-xs text-[#F8F4F1]">Ottikerweg 4, 8006 Zürich, Schweiz</p>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={14} className="flex-shrink-0 text-[#D4B59E]" />
              <p className="text-xs text-[#F8F4F1]">+41 763209852</p>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="flex-shrink-0 text-[#D4B59E]" />
              <p className="text-xs text-[#F8F4F1]">info@rochela-spa.ch</p>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-1">
            <a 
              href="https://www.facebook.com/share/1Hty5mM7s8/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F8F4F1] hover:text-[#D4B59E] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/rochela.spa?igsh=OGx1djN4NGVwM3N4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F8F4F1] hover:text-[#D4B59E] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.treatwell.ch/place/rochela-spa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F8F4F1] hover:text-[#D4B59E] transition-colors"
              aria-label="Treatwell"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
              </svg>
            </a>
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
