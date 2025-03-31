import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full h-20 bg-cream z-50 shadow-sm",
        className,
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo removed */}

        {/* Desktop Navigation */}

        {/* Mobile Menu Button */}
        <div className="hidden md:flex space-x-8 justify-center items-center w-full">
          <Link
            to="/"
            className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors"
          >
            Startseite
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors"
          >
            Leistungen
          </Link>
          <Link
            to="/booking"
            className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors"
          >
            Terminbuchung
          </Link>
          <Link
            to="/gift-cards"
            className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors"
          >
            Geschenkgutscheine
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors"
          >
            Kontakt
          </Link>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Menü umschalten"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream absolute w-full py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Startseite
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </Link>
            <Link
              to="/booking"
              className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Terminbuchung
            </Link>
            <Link
              to="/gift-cards"
              className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Geschenkgutscheine
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-[rgb(37,150,190)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
