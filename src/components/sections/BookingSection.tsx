import React from "react";
import { motion } from "framer-motion";
import BookingForm from "@/components/booking/BookingForm";

interface BookingSectionProps {
  title?: string;
  subtitle?: string;
  services?: Array<{
    id: string;
    name: string;
    price: number;
    duration: string;
  }>;
  onBookingSubmit?: (values: any) => void;
}

const BookingSection = ({
  title = "Termin Buchen",
  subtitle = "Planen Sie Ihr Premium-Spa-Erlebnis mit unserem einfachen Buchungssystem.",
  services = [
    { id: "1", name: "Japanisches Kopf-Spa", price: 120, duration: "60 min" },
    { id: "2", name: "BIAB Maniküre", price: 85, duration: "45 min" },
    { id: "3", name: "BIAB Pediküre", price: 95, duration: "50 min" },
    { id: "4", name: "Microblading", price: 250, duration: "90 min" },
  ],
  onBookingSubmit = (values) => console.log("Buchung übermittelt:", values),
}: BookingSectionProps) => {
  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 bg-cream-50 min-h-[800px]"
      id="booking"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#2596be] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif text-[#2596be] mb-4">
                Warum bei uns buchen?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#2596be] flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">Premium-Erlebnis</h4>
                    <p className="text-gray-600 text-sm">
                      Genießen Sie unsere Luxusbehandlungen mit
                      Premium-Produkten
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#2596be] flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">Experten-Techniker</h4>
                    <p className="text-gray-600 text-sm">
                      Unser Personal ist hochqualifiziert und zertifiziert
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#2596be] flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">Flexible Terminplanung</h4>
                    <p className="text-gray-600 text-sm">
                      Buchen Sie Termine, die zu Ihrem vollen Terminkalender
                      passen
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#2596be] flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">Sichere Zahlung</h4>
                    <p className="text-gray-600 text-sm">
                      Sichere und einfache Zahlungsabwicklung mit Stripe
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#2596be]/10 p-6 rounded-lg">
              <h4 className="font-serif text-[#2596be] mb-2">
                Benötigen Sie Hilfe?
              </h4>
              <p className="text-gray-600 mb-4">
                Unser Team hilft Ihnen gerne bei der Auswahl der perfekten
                Behandlung.
              </p>
              <p className="font-medium">Rufen Sie uns an: (555) 123-4567</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <BookingForm services={services} onSubmit={onBookingSubmit} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
