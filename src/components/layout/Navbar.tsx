import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full h-20 bg-[#F8F4F1] z-50 shadow-md",
        className,
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-[#A06B55] font-semibold text-xl">Rochela Spa</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex space-x-6 justify-center items-center flex-1 mx-auto">
          <div className="flex space-x-6 justify-center items-center">
            <Link
              to="/"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/services") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
            >
              Leistungen
            </Link>
            <Link
              to="/gift-cards"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/gift-cards") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
            >
              Geschenkgutscheine
            </Link>
            <Link
              to="/booking"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/booking") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
            >
              Termin buchen
            </Link>
            <Link
              to="/contact"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/contact") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
            >
              Kontakt
            </Link>
            <Link
              to="/about"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/about") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
            >
              Über uns
            </Link>
          </div>
        </div>

        {/* Empty div for spacing */}
        <div className="hidden md:block"></div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            className="text-[#A06B55] hover:bg-[#A06B55]/10"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#F8F4F1] shadow-md py-4 px-4 z-50">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/services") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
              onClick={toggleMenu}
            >
              Leistungen
            </Link>
            <Link
              to="/gift-cards"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/gift-cards") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
              onClick={toggleMenu}
            >
              Geschenkgutscheine
            </Link>
            <Link
              to="/booking"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/booking") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
              onClick={toggleMenu}
            >
              Termin buchen
            </Link>
            <Link
              to="/contact"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/contact") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
            <Link
              to="/about"
              className={cn(
                "font-medium text-base px-3 py-2 rounded-md transition-all duration-200",
                isActive("/about") 
                  ? "text-[#A06B55] bg-[#A06B55]/10 font-semibold" 
                  : "text-[#333333] hover:text-[#A06B55] hover:bg-[#A06B55]/5"
              )}
              onClick={toggleMenu}
            >
              Über uns
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
