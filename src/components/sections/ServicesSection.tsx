import React from "react";
import ServiceCategory from "../services/ServiceCategory";
import { motion } from "framer-motion";

interface ServiceCategoryData {
  id: string;
  title: string;
  description: string;
  icon: string;
  treatmentCount: number;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
}

const ServicesSection = ({
  title = "Unsere Premium-Dienstleistungen",
  subtitle = "Wählen Sie eine Kategorie, um die verfügbaren Behandlungen zu sehen",
}: ServicesSectionProps) => {

  const serviceCategories: ServiceCategoryData[] = [
    {
      id: "manicure-pedicure",
      title: "Maniküre & Pediküre",
      description: "Professionelle Hand- und Fusspflege",
      icon: "💅",
      treatmentCount: 5
    },
    {
      id: "permanent-makeup",
      title: "Permanent Make-Up",
      description: "Semipermanente Schönheitsbehandlungen",
      icon: "✨",
      treatmentCount: 3
    },
    {
      id: "japanese-head-spa",
      title: "Japanese Head Spa",
      description: "Entspannende Kopfhaut- und Haarbehandlungen",
      icon: "🧘‍♀️",
      treatmentCount: 3
    },
    {
      id: "sugaring",
      title: "Damen Sugaring",
      description: "Sanfte Haarentfernung mit Zuckerpaste",
      icon: "🍯",
      treatmentCount: 1
    },
    {
      id: "eyebrow-lash",
      title: "Augenbrauen & Wimpern",
      description: "Professionelle Augenbrauen- und Wimpernbehandlungen",
      icon: "👁️",
      treatmentCount: 2
    },
    {
      id: "wellness-packages",
      title: "Wellness Pakete",
      description: "Kombinierte Behandlungen für das ultimative Spa-Erlebnis",
      icon: "🌸",
      treatmentCount: 2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 bg-[#F8F4F1]"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#8A5A44] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-[#333333] max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Service Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <ServiceCategory
                categoryId={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                treatmentCount={category.treatmentCount}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 p-8 bg-white/50 rounded-lg border border-[#D4B59E]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-[#8A5A44] mb-2">
            Bereit für Ihre Behandlung?
          </h3>
          <p className="text-[#333333] mb-4">
            Klicken Sie auf eine Kategorie, um die verfügbaren Behandlungen zu sehen
          </p>
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              ☝️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
