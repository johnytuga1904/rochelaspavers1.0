import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-cream w-full py-12 px-6 md:px-12 lg:px-24", className)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and About */}
          <div className="flex md:items-start justify-center items-center flex-col-reverse grow"></div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Rochela Spa. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
