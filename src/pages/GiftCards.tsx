import React from "react";
import Navbar from "@/components/layout/Navbar";
import GiftCardSection from "@/components/sections/GiftCardSection";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GiftCards = () => {
  // Animation variants for scroll reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 relative">
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

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full mb-16 relative z-10"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="spa-title text-4xl md:text-5xl mb-4 text-black">
              Geschenkgutscheine
            </h1>
            <p className="spa-subtitle text-xl max-w-3xl mx-auto mt-6">
              Verschenken Sie ein Luxus-Erlebnis im Rochela Spa. Perfekt für Geburtstage, Jubiläen oder einfach so.
            </p>
          </div>
        </motion.div>

        {/* Gift Card Options */}
        <section className="py-12 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gift Card Option 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-[#F8F4F1] flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="bg-white/90 p-6 rounded-lg border-2 border-[#A06B55] text-center w-full relative overflow-hidden">
                      <img
                        src="/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"
                        alt="Rochela Spa Logo"
                        className="absolute inset-0 w-[500%] h-[500%] translate-x-[20%] -translate-y-[38%] object-cover opacity-25 transform rotate-90"
                        style={{ objectPosition: "center" }}
                      />
                      <div className="relative z-10">
                        <h3 className="spa-title text-2xl text-black">50 CHF</h3>
                        <p className="spa-subtitle text-sm mt-2">Geschenkgutschein</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="spa-title text-xl mb-2">Kleines Verwöhnprogramm</h3>
                  <p className="spa-subtitle mb-4">
                    Ideal für eine einzelne Behandlung oder als Zuschuss für ein größeres Spa-Erlebnis.
                  </p>
                  <Button className="w-full bg-[#A06B55] hover:bg-[#B27C66] text-white">
                    Jetzt kaufen
                  </Button>
                </div>
              </motion.div>

              {/* Gift Card Option 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-md transform scale-105 z-10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-[#F8F4F1] flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="bg-white/90 p-6 rounded-lg border-2 border-[#A06B55] text-center w-full relative overflow-hidden">
                      <img
                        src="/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"
                        alt="Rochela Spa Logo"
                        className="absolute inset-0 w-[500%] h-[500%] translate-x-[20%] -translate-y-[38%] object-cover opacity-25 transform rotate-90"
                        style={{ objectPosition: "center" }}
                      />
                      <div className="relative z-10">
                        <h3 className="spa-title text-2xl text-black">100 CHF</h3>
                        <p className="spa-subtitle text-sm mt-2">Geschenkgutschein</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-[#A06B55]/20 rounded-full text-xs text-[#A06B55] font-medium">Beliebteste Wahl</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="spa-title text-xl mb-2">Premium Spa-Erlebnis</h3>
                  <p className="spa-subtitle mb-4">
                    Perfekt für eine umfassende Behandlung oder eine Kombination aus mehreren Services.
                  </p>
                  <Button className="w-full bg-[#A06B55] hover:bg-[#B27C66] text-white">
                    Jetzt kaufen
                  </Button>
                </div>
              </motion.div>

              {/* Gift Card Option 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-[#F8F4F1] flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="bg-white/90 p-6 rounded-lg border-2 border-[#A06B55] text-center w-full relative overflow-hidden">
                      <img
                        src="/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"
                        alt="Rochela Spa Logo"
                        className="absolute inset-0 w-[500%] h-[500%] translate-x-[20%] -translate-y-[38%] object-cover opacity-25 transform rotate-90"
                        style={{ objectPosition: "center" }}
                      />
                      <div className="relative z-10">
                        <h3 className="spa-title text-2xl text-black">200 CHF</h3>
                        <p className="spa-subtitle text-sm mt-2">Geschenkgutschein</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="spa-title text-xl mb-2">Luxus-Paket</h3>
                  <p className="spa-subtitle mb-4">
                    Das ultimative Geschenk für ein vollständiges Spa-Erlebnis mit mehreren exklusiven Behandlungen.
                  </p>
                  <Button className="w-full bg-[#A06B55] hover:bg-[#B27C66] text-white">
                    Jetzt kaufen
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Custom Gift Card Section */}
        <section className="py-12 px-4 bg-white relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="spa-title text-3xl text-black mb-4">Individueller Gutschein</h2>
              <p className="spa-subtitle text-lg max-w-3xl mx-auto">
                Möchten Sie einen Gutschein mit einem bestimmten Betrag oder für eine spezielle Behandlung? Erstellen Sie Ihren eigenen personalisierten Gutschein.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#F8F4F1] p-8 rounded-lg shadow-sm max-w-2xl mx-auto relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-[#333333] font-medium">Betrag (CHF)</label>
                    <input
                      type="number"
                      min="20"
                      placeholder="Betrag eingeben"
                      className="w-full p-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[#333333] font-medium">Empfänger</label>
                    <input
                      type="text"
                      placeholder="Name des Empfängers"
                      className="w-full p-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                    />
                  </div>
                  <div className="space-y-4 md:col-span-2">
                    <label className="block text-[#333333] font-medium">Persönliche Nachricht</label>
                    <textarea
                      placeholder="Ihre persönliche Nachricht"
                      rows={3}
                      className="w-full p-2 border border-[#D4B59E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A06B55]"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full bg-[#A06B55] hover:bg-[#B27C66] text-white">
                      Gutschein erstellen
                    </Button>
                  </div>
                </div>
              </div>
              <img
                src="/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"
                alt="Rochela Spa Logo"
                className="absolute inset-0 w-[300%] h-[300%] -translate-x-[30%] -translate-y-[30%] object-cover opacity-15 transform rotate-90"
              />
            </motion.div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-6"
              >
                <h2 className="spa-title text-3xl text-black mb-4">Wie es funktioniert</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#A06B55] text-white flex items-center justify-center flex-shrink-0 mr-4">1</div>
                    <div>
                      <h3 className="spa-title text-lg text-black mb-1">Gutschein auswählen</h3>
                      <p className="spa-subtitle">Wählen Sie einen unserer Standardgutscheine oder erstellen Sie einen individuellen Gutschein.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#A06B55] text-white flex items-center justify-center flex-shrink-0 mr-4">2</div>
                    <div>
                      <h3 className="spa-title text-lg text-black mb-1">Bezahlung</h3>
                      <p className="spa-subtitle">Bezahlen Sie sicher online mit verschiedenen Zahlungsmethoden.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#A06B55] text-white flex items-center justify-center flex-shrink-0 mr-4">3</div>
                    <div>
                      <h3 className="spa-title text-lg text-black mb-1">Erhalt & Einlösung</h3>
                      <p className="spa-subtitle">Sie erhalten den Gutschein per E-Mail oder per Post. Der Empfänger kann ihn bei seinem Besuch im Spa einlösen.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-[#F8F4F1] rounded-lg border border-[#D4B59E]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A06B55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="spa-title text-lg text-black mb-1">Zahlungen & Buchungen</h3>
                      <p className="spa-subtitle">Bitte beachten Sie: Die Bezahlung der Gutscheine wird sicher über Stripe abgewickelt. Termine und Terminbuchungen werden über die Treatwell-Plattform verwaltet. Nach dem Kauf eines Gutscheins können Sie diesen bei der Buchung über Treatwell einlösen.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-6"
              >
                <h2 className="spa-title text-3xl text-black mb-4">Häufig gestellte Fragen</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="spa-title text-lg text-black mb-1">Wie lange sind die Gutscheine gültig?</h3>
                    <p className="spa-subtitle">Unsere Gutscheine sind 3 Jahre ab Kaufdatum gültig.</p>
                  </div>
                  <div>
                    <h3 className="spa-title text-lg text-black mb-1">Kann ich den Gutschein für alle Behandlungen verwenden?</h3>
                    <p className="spa-subtitle">Ja, die Gutscheine können für alle Behandlungen und Produkte in unserem Spa eingelöst werden.</p>
                  </div>
                  <div>
                    <h3 className="spa-title text-lg text-black mb-1">Kann ich den Gutschein zurückgeben?</h3>
                    <p className="spa-subtitle">Gutscheine können innerhalb von 14 Tagen nach Kauf zurückgegeben werden, sofern sie noch nicht eingelöst wurden.</p>
                  </div>
                  <div>
                    <h3 className="spa-title text-lg text-black mb-1">Wie schnell erhalte ich den Gutschein?</h3>
                    <p className="spa-subtitle">Digitale Gutscheine werden sofort per E-Mail zugestellt. Gedruckte Gutscheine werden innerhalb von 2-3 Werktagen per Post verschickt.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GiftCards;
