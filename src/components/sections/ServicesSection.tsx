import React from "react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
}

interface ServicesSectionProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
}

const ServicesSection = ({
  services = [
    {
      id: "1",
      title: "Japanese Head Spa",
      description:
        "Ganzheitliche Kopfhaut- und Haarbehandlung mit Kräuteröl-Massage, Reinigung, Peeling und Haarmaske",
      imageUrl:
        "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Japanes%20Head%20Spa.jpg",
      duration: "90 min",
      price: 139,
    },
    {
      id: "2",
      title: "BIAB Maniküre & Pediküre",
      description: "Innovativer Nagellack mit extra Haltbarkeit",
      imageUrl:
        "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/diab.jpg",
      duration: "60 min",
      price: 65,
    },
    {
      id: "3",
      title: "Shellac Maniküre & Pediküre",
      description: "Langanhaltende, natürliche Maniküre",
      imageUrl:
        "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/shellac.jpg",
      duration: "60 min",
      price: 55,
    },
    {
      id: "4",
      title: "Microblading, Microshading & Kombi Brows",
      description:
        "Semipermanente Augenbrauenbehandlung mit feiner Härchenzeichnung oder Schattierung",
      imageUrl:
        "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/micro-blading.jpg",
      duration: "90 min",
      price: 400,
    },
    {
      id: "5",
      title: "Sugaring Haarentfernung",
      description: "Sanfte Haarentfernung mit Zuckerpaste",
      imageUrl:
        "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/sugaring.jpg",
      duration: "90 min",
      price: 165,
    },
  ],
  title = "Unsere Premium-Dienstleistungen",
  subtitle = "Genießen Sie unsere sorgfältig zusammengestellte Auswahl an luxuriösen Schönheitsbehandlungen",
}: ServicesSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
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
    </section>
  );
};

export default ServicesSection;
