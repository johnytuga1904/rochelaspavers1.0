import React from "react";
import { Gift, Sparkles } from "lucide-react";
import GiftCardSelector from "@/components/gift-cards/GiftCardSelector";

interface GiftCardSectionProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const GiftCardSection = ({
  title = "Verschenken Sie ein Luxus-Erlebnis",
  subtitle = "Perfekt für Geburtstage, Jubiläen oder einfach so. Unsere digitalen Geschenkgutscheine werden sofort zugestellt und können für alle unsere Premium-Dienstleistungen eingelöst werden.",
  backgroundColor = "bg-cream",
}: GiftCardSectionProps) => {
  return (
    <section className={`${backgroundColor} py-20 px-4 md:px-8 w-full`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Gift className="h-8 w-8 text-[rgb(37,150,190)]" />
              <Sparkles className="h-4 w-4 text-[rgb(37,150,190)] absolute -top-1 -right-1" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[rgba(37,150,190,0.1)] hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-[rgba(37,150,190,0.1)] hidden md:block"></div>

          {/* Gift card selector component */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <GiftCardSelector />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[rgba(37,150,190,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[rgb(37,150,190)] font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Betrag & Design wählen</h3>
              <p className="text-sm text-gray-500">
                Wählen Sie den perfekten Gutscheinbetrag und das Design für
                Ihren Empfänger.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[rgba(37,150,190,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[rgb(37,150,190)] font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">
                Persönliche Nachricht hinzufügen
              </h3>
              <p className="text-sm text-gray-500">
                Fügen Sie eine herzliche Nachricht hinzu, um Ihr Geschenk noch
                besonderer zu machen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[rgba(37,150,190,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[rgb(37,150,190)] font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Sofortige Zustellung</h3>
              <p className="text-sm text-gray-500">
                Geschenkgutscheine werden sofort per E-Mail an Ihren Empfänger
                zugestellt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;
