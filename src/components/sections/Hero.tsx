import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const Hero = ({
  title = "Rochela Spa",
  subtitle = "Erleben Sie luxuriöse Schönheitsbehandlungen in einer ruhigen Umgebung, die für Ihre ultimative Entspannung und Verjüngung konzipiert ist.",
  ctaText = "Jetzt Buchen",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Logo%20%20big.jpg",
}: HeroProps) => {
  return (
    <section className="relative w-full h-[700px] bg-cream flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-serif text-white mb-2">
                <span className="font-['Monterchi_Serif', serif]"></span>
                <span className="font-['Blosta_Script_Regular', cursive] italic">
                  {" "}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>

            {/* CTA Button */}
            <Button
              onClick={onCtaClick}
              className={cn(
                "bg-[rgb(37,150,190)] hover:bg-[rgb(27,140,180)] text-white",
                "px-8 py-6 text-lg rounded-md shadow-lg transition-all duration-300",
              )}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cream/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
