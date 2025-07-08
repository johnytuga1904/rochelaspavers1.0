import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../services/ServiceCard";
import CustomTreatwellButton from "../buttons/CustomTreatwellButton";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
}

// Animationsvarianten für Container und Items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Dienstleistungen
const services = [
    // Manicure & Pedicure
    {
      id: "1",
      title: "Russian Manicure mit Shellac",
      description: "Professionelle Maniküre mit Shellac-Finish für langanhaltenden Glanz",
      detailedDescription: "**Über diesen Service**\nNervt es dich, dass Nagellack nicht lange genug hält? Dann ist Shellac eine gute Alternative für dich. Bei der Maniküre kannst du deine Hände zunächst von abgestorbenen Hautzellen reinigen lassen, und nach einer Pflegebehandlung deine Nägel mit dieser Gel-Variante versehen lassen. Für bis zu 4-wöchigen Halt und Schutz gegen Kratzer und Abblättern!",
      duration: "1 Std. 15 Min.",
      price: 65,
      category: "Manicure & Pedicure",
      subcategory: "Russian Manicure",
    },
    {
      id: "2",
      title: "Russian Manicure mit BIAB",
      description: "Professionelle Maniküre mit BIAB-Verstärkung für natürliche Nägel",
      detailedDescription: "**Über diesen Service**\nBIAB™ steht für \"Builder In A Bottle™\" und ist ein innovatives Aufbaugel, das direkt aus einer Flasche aufgetragen wird. Es ist selbstnivellierend und wird auf den vorbereiteten Naturnagel aufgetragen, bevor es unter einer UV-Lampe aushärtet. BIAB™ eignet sich hervorragend für Nagelverstärkungen, kurze bis mittellange Modellagen.",
      duration: "1 Std. 15 Min.",
      price: 75,
      category: "Manicure & Pedicure",
      subcategory: "Russian Manicure",
    },
    {
      id: "3",
      title: "Pododisk Pedicure mit Shellac",
      description: "Gründliche Pediküre mit Pododisk-Technik und Shellac-Finish",
      detailedDescription: "**Über diesen Service**\nEin detailliertes Pediküre-Erlebnis lässt keinen Aspekt unberührt und sorgt dafür, dass die Füsse nicht nur gepflegt, sondern auch optimal verwöhnt werden.",
      duration: "1 Std. 30 Min.",
      price: 75,
      category: "Manicure & Pedicure",
      subcategory: "Pododisk Pedicure",
    },
    {
      id: "4",
      title: "Pododisk Pedicure mit BIAB",
      description: "Premium-Pediküre mit Pododisk-Technik und BIAB für langanhaltende Ergebnisse",
      detailedDescription: "**Über diesen Service**\nEin detailliertes Pediküre-Erlebnis lässt keinen Aspekt unberührt und sorgt dafür, dass die Füße nicht nur gepflegt, sondern auch optimal verwöhnt werden.",
      duration: "1 Std. 30 Min.",
      price: 85,
      category: "Manicure & Pedicure",
      subcategory: "Pododisk Pedicure",
    },
    {
      id: "5",
      title: "Russian Manicure & Pododisk Pedicure",
      description: "Komplettbehandlung für Hände und Füße mit Russian Manicure und Pododisk Pedicure",
      detailedDescription: "**Über diesen Service**\nGel Nails kennen viele aus dem Nagelstudio. Da wird modelliert für die perfekte Form, traditionell mit UV-Licht ausgehärtet und dann hält das schicke Treatment bis nach zwei Wochen der tieferliegende und nachwachsende Naturnagel zur nächsten Behandlung ruft. Bei einer Manicure mit Gel kommt dagegen ein hauchdünner aber superbeständiger Lack auf die vorher gepflegten Naturnägel der Hand. Der innovative Lack hält ohne Risse und Kratzer, lässt sich daheim nachfeilen und wird oft ganz schonend mit LED-Licht ausgehärtet.",
      duration: "3 Std.",
      price: 140,
      category: "Manicure & Pedicure",
      subcategory: "Kombination",
    },
    
    // Permanent Make-Up
    {
      id: "6",
      title: "Permanent Make-Up - Microblading",
      description: "Präzise, haarstrichgenaue Augenbrauenkorrektur für einen natürlichen Look",
      detailedDescription: "**Über diesen Service**\nMicroblading ist eine Art des Permanent-Make-ups, bei der mit sehr feinen Stichen die Augenbrauen korrigiert werden. Microblading zeichnet sich vor allem dadurch aus, dass es sehr dezent ist.\n\n**Gut zu Wissen**\nPermanent Make-Up hält in der Regel zwei bis drei Jahre. Um das Resultat noch besser zu schützen, ist die stetige Pflege durch Cremes mit Lichtschutzfaktor hilfreich.\n\n**Einschränkungen**\nBei Hauterkrankungen und allergischen Reaktionen auf Pigmente ist es empfehlenswert, auf ein Permanent Make-Up zu verzichten. Bei anderen Erkrankungen sollte man sich im Vorfeld von einem Experten oder einem Arzt informieren lassen.",
      duration: "2 Std. 30 Min.",
      price: 400,
      category: "Permanent Make-Up",
      subcategory: "Microblading",
    },
    {
      id: "7",
      title: "Permanent Make-Up - Microshading",
      description: "Pudertechnik für einen weichen, schattigen Augenbrauen-Look",
      detailedDescription: "**Über diesen Service**\nIm Gegensatz zum Microblading werden beim Microshading die Farbpigmente nicht in Form von geraden Linien, sondern von kleinen Punkten unter die Haut gestochen. Die Augenbrauen werden dadurch \"schattiert\".\n\n**Gut zu Wissen**\nPermanent Make-Up hält in der Regel zwei bis drei Jahre. Um das Resultat noch besser zu schützen, ist die stetige Pflege durch Cremes mit Lichtschutzfaktor hilfreich.\n\n**Einschränkungen**\nBei Hauterkrankungen und allergischen Reaktionen auf Pigmente ist es empfehlenswert, auf ein Permanent Make-Up zu verzichten. Bei anderen Erkrankungen sollte man sich im Vorfeld von einem Experten oder einem Arzt informieren lassen.",
      duration: "2 Std. 30 Min.",
      price: 400,
      category: "Permanent Make-Up",
      subcategory: "Microshading",
    },
    {
      id: "8",
      title: "Permanent Make-Up - Combo Brows",
      description: "Kombination aus Microblading und Microshading für einen perfekten, vollständigen Look",
      detailedDescription: "**Über diesen Service**\nCombo Brows kombiniert die Vorteile von Microblading und Microshading. Während mit Microblading feine Härchen nachgezeichnet werden, sorgt das Microshading für mehr Fülle und Tiefe. Das Ergebnis ist ein natürlicher und dennoch definierter Look.\n\n**Gut zu Wissen**\nPermanent Make-Up hält in der Regel zwei bis drei Jahre. Um das Resultat noch besser zu schützen, ist die stetige Pflege durch Cremes mit Lichtschutzfaktor hilfreich.\n\n**Einschränkungen**\nBei Hauterkrankungen und allergischen Reaktionen auf Pigmente ist es empfehlenswert, auf ein Permanent Make-Up zu verzichten. Bei anderen Erkrankungen sollte man sich im Vorfeld von einem Experten oder einem Arzt informieren lassen.",
      duration: "2 Std. 30 Min.",
      price: 400,
      category: "Permanent Make-Up",
      subcategory: "Combo Brows",
    },
    
    // Damen Sugaring
    {
      id: "9",
      title: "Damen Sugaring - ganzer Körper",
      description: "Sanfte und effektive Haarentfernung mit Zuckerpaste für den gesamten Körper",
      detailedDescription: "**Über diesen Service**\nDie Sugaring Methode ist eine sanfte, natürliche und länger anhaltende Haarentfernungsmethode. Das Haar wird in Wuchsrichtung entfernt, weshalb diese Methode weniger schmerzhaft ist als das Waxing.\n\n**Gut zu Wissen**\nUm ein tolles Ergebnis zu garantieren, sollte dein Haar, das entfernt werden soll, vor dem Termin mindestens 0,5 cm lang sein. Das bedeutet im Durchschnitt zwei Wochen wachsen lassen.\n\n**Einschränkungen**\nEs wird empfohlen, die Haut 24 Stunden vor dem Termin nicht zu peelen und zusätzlich auch auf Sonnenbäder oder Solariumgänge zu verzichten. Bitte trage vor der Behandlung keine Creme oder Öl eigenständig auf deine Haut auf.",
      duration: "1 Std. 30 Min.",
      price: 165,
      category: "Damen Sugaring",
      subcategory: "Ganzer Körper",
    },
    
    // Japanese Head Spa
    {
      id: "13",
      title: "Japanese Head Spa",
      description: "Entspannende Kopfhautpflege mit gründlicher Reinigung und Massage",
      detailedDescription: "**Über diesen Service**\nEine Japanese Head Spa Behandlung Entspannende Kopfhautpflege. Sie umfasst eine gründliche Reinigung, Massage, Aromatherapie und Akupressur, um Haut und Kopfhaut zu revitalisieren und Verspannungen zu lösen. Perfekt für Entspannung und Pflege!",
      duration: "25 Min.",
      price: 25,
      category: "Japanese Head Spa",
      subcategory: "Blowout/Curls",
    },
    {
      id: "14",
      title: "Japanese Head Spa ohne Facial",
      description: "Intensive Kopfhautbehandlung ohne Gesichtsbehandlung",
      detailedDescription: "**Über diesen Service**\nEine Japanese Head Spa Behandlung Entspannende Kopfhautpflege. Sie umfasst eine gründliche Reinigung, Massage, Aromatherapie und Akupressur, um Haut und Kopfhaut zu revitalisieren und Verspannungen zu lösen. Perfekt für Entspannung und Pflege!",
      duration: "1 Std. 30 Min.",
      price: 139,
      category: "Japanese Head Spa",
      subcategory: "Japanese Head Spa ohne Facial",
    },
    {
      id: "15",
      title: "Japanese Head Spa mit Facial",
      description: "Komplettbehandlung für Kopfhaut und Gesicht",
      detailedDescription: "**Über diesen Service**\nEine Japanese Head Spa Behandlung Entspannende Kopfhautpflege. Sie umfasst eine gründliche Reinigung, Massage, Aromatherapie und Akupressur, um Haut und Kopfhaut zu revitalisieren und Verspannungen zu lösen. Perfekt für Entspannung und Pflege!",
      duration: "1 Std. 30 Min.",
      price: 169,
      category: "Japanese Head Spa",
      subcategory: "Japanese Head Spa mit Facial",
    },
    
    // Augenbrauen & Wimpernbehandlungen
    {
      id: "10",
      title: "Augenbrauenlifting mit zupfen und färben",
      description: "Formgebung, Lifting und Färben der Augenbrauen für einen frischen, offenen Blick",
      detailedDescription: "**Über diesen Service**\nBei einem Augenbrauenlifting werden deine Härchen verstärkt, sodass die From über mehrere Wochen anhält. Dabei werden die Brauen so formbar gemacht, dass es einfacher ist sie in alle Formen und Richtungen zu stylen.\n\n**Gut zu Wissen**\nWenn du dir mehr Dichte für deine Augenbrauen wünscht, aber von Natur aus eher helle oder lichte Brauen hast, ist ein Microblading eher empfehlenswert.",
      duration: "1 Std. 30 Min.",
      price: 85,
      category: "Augenbrauen & Wimpernbehandlungen",
      subcategory: "Augenbrauenlifting",
    },
    {
      id: "11",
      title: "Augenbrauen färben & zupfen",
      description: "Professionelles Färben und Formgebung der Augenbrauen",
      detailedDescription: "**Über diesen Service**\nWenn du vollere, gut definierte Augenbrauen möchtest, die ein paar Wochen halten, buche einen Termin für die Formung und Färbung.",
      duration: "45 Min.",
      price: 60,
      category: "Augenbrauen & Wimpernbehandlungen",
      subcategory: "Augenbrauen färben & zupfen",
    },
];

// Gruppiere Dienstleistungen nach Kategorie und Subkategorie
const groupServicesByCategory = () => {
  const grouped: Record<string, Record<string, any[]>> = {};
  
  services.forEach((service) => {
    if (!grouped[service.category]) {
      grouped[service.category] = {};
    }
    
    if (!grouped[service.category][service.subcategory]) {
      grouped[service.category][service.subcategory] = [];
    }
    
    grouped[service.category][service.subcategory].push(service);
  });
  
  return grouped;
};

// Definiere die Reihenfolge der Kategorien
const categoryOrder = [
  "Manicure & Pedicure",
  "Permanent Make-Up",
  "Damen Sugaring",
  "Japanese Head Spa",
  "Augenbrauen & Wimpernbehandlungen",
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle }) => {
  const [openCategory, setOpenCategory] = useState<string>("Manicure & Pedicure");
  const groupedServices = groupServicesByCategory();
  
  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? "" : categoryName);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#8A5A44] mb-4">{title || "Leistungen"}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle || "Entdecken Sie meine umfangreichen Behandlungen für Ihre Schönheit und Ihr Wohlbefinden."}
          </p>
        </div>

        <div className="space-y-8">
          {categoryOrder.map((categoryName) => {
            // Überspringe Kategorien, die keine Dienstleistungen haben
            if (!groupedServices[categoryName]) return null;
            
            const isOpen = openCategory === categoryName;
            const serviceCount = Object.values(groupedServices[categoryName]).flat().length;
            
            return (
              <motion.div 
                key={categoryName}
                className="mb-6 border border-[#8A5A44]/20 rounded-lg overflow-hidden shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Kategorie-Header mit Klick-Funktion */}
                <div 
                  className={`flex justify-between items-center p-4 cursor-pointer ${isOpen ? 'bg-[#F0E6E0]' : 'bg-white'} hover:bg-[#F0E6E0] transition-colors duration-200`}
                  onClick={() => toggleCategory(categoryName)}
                >
                  <h3 className="text-2xl font-semibold text-[#8A5A44]">
                    {categoryName} <span className="text-sm text-gray-500 font-normal ml-2">({serviceCount})</span>
                  </h3>
                  
                  {/* Pfeil-Icon, der sich dreht */}
                  <svg 
                    className={`w-6 h-6 text-[#8A5A44] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                
                {/* Inhalt der Kategorie (nur sichtbar, wenn geöffnet) */}
                {isOpen && (
                  <div className="p-4 bg-white">
                    {Object.entries(groupedServices[categoryName]).map(([subcategoryName, subcategoryServices]) => (
                      <div key={subcategoryName} className="mb-8 last:mb-0">
                        <h4 className="text-xl font-medium text-[#333333] mb-4 pb-2 border-b border-gray-200">
                          {subcategoryName}
                        </h4>
                        
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ staggerChildren: 0.1 }}
                        >
                          {subcategoryServices.map((service) => (
                            <motion.div key={service.id} variants={itemVariants}>
                              <ServiceCard
                                title={service.title}
                                description={service.description}
                                imageUrl={service.imageUrl}
                                detailedDescription={service.detailedDescription}
                                duration={service.duration}
                                price={service.price}
                                onBookNow={() => {
                                  console.log(`Buchung ${service.title}`);
                                  window.location.href = "/booking";
                                }}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
