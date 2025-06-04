import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full mb-16"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="spa-title text-4xl md:text-5xl mb-4">
              Über mich
            </h1>
            <p className="spa-subtitle text-xl max-w-3xl mx-auto mt-6">
              Entdecken Sie die Geschichte und Philosophie von Rochela Spa, wo Luxus und Wohlbefinden im Mittelpunkt stehen.
            </p>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex justify-center items-center"
              >
                <div className="relative p-8 border-4 border-[#A06B55] border-opacity-30 bg-white bg-opacity-20 rounded-lg">
                  <img
                    src={import.meta.env.DEV ? "/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png" : "/rochelaspavers1.0/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"}
                    alt="Rochela Spa Logo"
                    className="h-auto max-w-full"
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col space-y-4"
              >
                <h2 className="spa-title text-3xl mb-2">Unsere Geschichte</h2>
                <p className="spa-subtitle">
                  Rochela Spa wurde 2015 mit einer klaren Vision gegründet: einen Ort zu schaffen, an dem Menschen dem Alltag entfliehen und sich vollständig entspannen können. Was als kleines Studio begann, hat sich zu einem der führenden Wellness-Zentren der Region entwickelt.
                </p>
                <p className="spa-subtitle">
                  Unser Name "Rochela" ist von dem portugiesischen Wort für "Fels" abgeleitet und symbolisiert unsere Philosophie: Stabilität und Stärke zu bieten, während wir gleichzeitig Ruhe und Gelassenheit ausstrahlen – wie ein Fels in der Brandung.
                </p>
                <p className="spa-subtitle">
                  Über die Jahre haben wir unser Angebot stetig erweitert und verfeinert, immer mit dem Ziel, unseren Kunden das bestmögliche Spa-Erlebnis zu bieten. Heute sind wir stolz darauf, ein umfassendes Spektrum an Behandlungen anzubieten, die von traditionellen Techniken bis hin zu modernen Wellness-Innovationen reichen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="spa-title text-3xl mb-2">Unsere Philosophie</h2>
              <p className="spa-subtitle text-lg max-w-3xl mx-auto mt-4">
                Bei Rochela Spa glauben wir, dass wahres Wohlbefinden aus dem Gleichgewicht von Körper und Geist entsteht.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#F8F4F1] p-6 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-[#A06B55] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="spa-title text-xl text-center mb-2">Ganzheitlicher Ansatz</h3>
                <p className="spa-subtitle text-center">
                  Wir betrachten jeden Kunden als Individuum mit einzigartigen Bedürfnissen und passen unsere Behandlungen entsprechend an.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#F8F4F1] p-6 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-[#A06B55] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="spa-title text-xl text-center mb-2">Qualität & Nachhaltigkeit</h3>
                <p className="spa-subtitle text-center">
                  Wir verwenden ausschließlich hochwertige, natürliche Produkte und legen Wert auf umweltbewusste Praktiken.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#F8F4F1] p-6 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-[#A06B55] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="spa-title text-xl text-center mb-2">Innovation & Tradition</h3>
                <p className="spa-subtitle text-center">
                  Wir verbinden bewährte traditionelle Methoden mit modernsten Techniken und Erkenntnissen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#A06B55] text-white py-16 mt-12"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="spa-title text-3xl text-white mb-4">Erleben Sie Rochela Spa</h2>
            <p className="spa-subtitle text-lg text-white max-w-3xl mx-auto mb-8">
              Gönnen Sie sich eine Auszeit vom Alltag und entdecken Sie unsere vielfältigen Behandlungen für Körper und Seele.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F8F4F1] text-[#A06B55] hover:bg-[#D4B59E]" asChild>
                <Link to="/booking">Termin buchen</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#F8F4F1] text-[#F8F4F1] hover:bg-[#F8F4F1]/10" asChild>
                <Link to="/services">Behandlungen</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
