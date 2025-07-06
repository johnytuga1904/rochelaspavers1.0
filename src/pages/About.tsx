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
                    src="/images/gabi about me.jpg"
                    alt="Gabriela Rocha - Rochela Spa"
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
                <h2 className="spa-title text-3xl mb-2">Über Gabriela Rocha</h2>
                <p className="spa-subtitle">
                  Mein Name ist Gabriela Rocha und Schönheit, Stil und Wohlbefinden begleiten mich schon mein ganzes Leben. Nach vielen Jahren Berufserfahrung in der Textil-, Schmuck- und Telekommunikationsbranche habe ich meine Leidenschaft für Ästhetik und persönliche Pflege zum Beruf gemacht und Rochela Spa gegründet.
                </p>
                <p className="spa-subtitle">
                  Mit einem fundierten Hintergrund durch meine Ausbildungen in Manicure & Pedicure, einem Kosmetik-Diplom sowie einer Permanent Make-up Ausbildung biete ich heute Behandlungen an, die nicht nur äusserlich verschönern, sondern auch von innen wirken.
                </p>
                <p className="spa-subtitle">
                  Rochela Spa ist mein Herzensort, ein stilvolles, ruhiges Studio, in dem jede Kundin im Mittelpunkt steht. Ich nehme mir Zeit, arbeite mit höchstem Anspruch an Qualität und liebe es, Menschen zum Strahlen zu bringen.
                </p>
                <p className="spa-subtitle font-medium italic mt-2">
                  Ich freue mich darauf, dich bei Rochela Spa persönlich willkommen zu heissen!
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
              <h2 className="spa-title text-3xl mb-2">Meine Philosophie</h2>
              <p className="spa-subtitle text-lg max-w-3xl mx-auto mt-4">
                Bei Rochela Spa glaube ich, dass wahres Wohlbefinden aus dem Gleichgewicht von Körper und Geist entsteht.
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
                  Ich betrachte jede Kundin als Individuum mit einzigartigen Bedürfnissen und passe meine Behandlungen entsprechend an.
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
                  Ich verwende ausschließlich hochwertige, natürliche Produkte und lege Wert auf umweltbewusste Praktiken.
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
                  Ich verbinde bewährte traditionelle Methoden mit modernsten Techniken und Erkenntnissen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action wurde entfernt */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
