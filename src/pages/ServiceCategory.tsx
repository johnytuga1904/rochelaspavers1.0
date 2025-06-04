import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
  category: string;
}

interface ServiceCategoryData {
  id: string;
  title: string;
  description: string;
  icon: string;
  treatments: Service[];
}

const ServiceCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const serviceCategories: ServiceCategoryData[] = [
    {
      id: "manicure-pedicure",
      title: "Maniküre & Pediküre",
      description: "Professionelle Hand- und Fusspflege mit modernsten Techniken",
      icon: "💅",
      treatments: [
        {
          id: "russian-manicure-shellac",
          title: "Russian Maniküre mit Shellac",
          description: "Professionelle russische Maniküre-Technik mit langanhaltender Shellac-Versiegelung",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/shellac.jpg",
          duration: "1 Std",
          price: 65,
          category: "manicure-pedicure"
        },
        {
          id: "russian-manicure-biab",
          title: "Russian Maniküre mit BIAB",
          description: "Russian Maniküre mit Builder in a Bottle für extra Stärke und Haltbarkeit",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/shellac.jpg",
          duration: "1 Std 30 min",
          price: 75,
          category: "manicure-pedicure"
        },
        {
          id: "pododisk-pedicure-shellac",
          title: "Pododisk Pediküre mit Shellac",
          description: "Medizinische Fusspflege mit Pododisk-Technik und Shellac-Finish",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/diab.jpg",
          duration: "1 Std 30 min",
          price: 75,
          category: "manicure-pedicure"
        },
        {
          id: "pododisk-pedicure-biab",
          title: "Pododisk Pediküre mit BIAB",
          description: "Professionelle Fusspflege mit Pododisk und BIAB für maximale Haltbarkeit",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/diab.jpg",
          duration: "1 Std 30 min",
          price: 85,
          category: "manicure-pedicure"
        },
        {
          id: "russian-manicure-pododisk-combo",
          title: "Russian Maniküre & Pododisk Pediküre",
          description: "Komplette Hand- und Fusspflege in einer Sitzung",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/shellac.jpg",
          duration: "3 Std",
          price: 140,
          category: "manicure-pedicure"
        }
      ]
    },
    {
      id: "permanent-makeup",
      title: "Permanent Make-Up",
      description: "Semipermanente Schönheitsbehandlungen für langanhaltende Schönheit",
      icon: "✨",
      treatments: [
        {
          id: "microblading",
          title: "Permanent Make-Up - Microblading",
          description: "Natürliche Augenbrauenzeichnung mit feiner Härchenzeichnung-Technik",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/micro-blading.jpg",
          duration: "2 Std 30 min",
          price: 400,
          category: "permanent-makeup"
        },
        {
          id: "microshading",
          title: "Permanent Make-Up - Microshading",
          description: "Sanfte Schattierung für natürlich wirkende, volle Augenbrauen",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/micro-blading.jpg",
          duration: "2 Std 30 min",
          price: 400,
          category: "permanent-makeup"
        },
        {
          id: "combo-brows",
          title: "Permanent Make-Up - Combo Brows",
          description: "Kombination aus Microblading und Microshading für perfekte Augenbrauen",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/micro-blading.jpg",
          duration: "2 Std 30 min",
          price: 400,
          category: "permanent-makeup"
        }
      ]
    },
    {
      id: "japanese-head-spa",
      title: "Japanese Head Spa",
      description: "Entspannende Kopfhaut- und Haarbehandlungen nach japanischer Tradition",
      icon: "🧘‍♀️",
      treatments: [
        {
          id: "japanese-head-spa-blowout",
          title: "Japanese Head Spa - Blowout/Curls",
          description: "Entspannende Kopfhautmassage mit professionellem Styling",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Japanes%20Head%20Spa.jpg",
          duration: "25 min",
          price: 25,
          category: "japanese-head-spa"
        },
        {
          id: "japanese-head-spa-no-facial",
          title: "Japanese Head Spa ohne Facial",
          description: "Intensive Kopfhaut- und Haarbehandlung mit Massage und Pflege",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Japanes%20Head%20Spa.jpg",
          duration: "1 Std 30 min",
          price: 139,
          category: "japanese-head-spa"
        },
        {
          id: "japanese-head-spa-with-facial",
          title: "Japanese Head Spa mit Facial",
          description: "Komplette Wellness-Behandlung mit Kopfhaut-Spa und Gesichtsbehandlung",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Japanes%20Head%20Spa.jpg",
          duration: "1 Std 30 min",
          price: 169,
          category: "japanese-head-spa"
        }
      ]
    },
    {
      id: "sugaring",
      title: "Damen Sugaring",
      description: "Sanfte Haarentfernung mit natürlicher Zuckerpaste",
      icon: "🍯",
      treatments: [
        {
          id: "sugaring-full-body",
          title: "Damen Sugaring - ganzer Körper",
          description: "Vollständige Haarentfernung mit natürlicher Zuckerpaste für den ganzen Körper",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/sugaring.jpg",
          duration: "1 Std 30 min",
          price: 165,
          category: "sugaring"
        }
      ]
    },
    {
      id: "eyebrow-lash",
      title: "Augenbrauen & Wimpern",
      description: "Professionelle Augenbrauen- und Wimpernbehandlungen",
      icon: "👁️",
      treatments: [
        {
          id: "lash-lift-tint",
          title: "Augenbrauenlifting mit zupfen und färben",
          description: "Professionelles Lifting und Färben der Augenbrauen für einen natürlichen Look",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/micro-blading.jpg",
          duration: "1 Std 30 min",
          price: 85,
          category: "eyebrow-lash"
        },
        {
          id: "eyebrow-tint-pluck",
          title: "Augenbrauen färben & zupfen",
          description: "Professionelle Augenbrauenformung mit Färbung für perfekte Definition",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/micro-blading.jpg",
          duration: "45 min",
          price: 60,
          category: "eyebrow-lash"
        }
      ]
    },
    {
      id: "wellness-packages",
      title: "Wellness Pakete",
      description: "Kombinierte Behandlungen für das ultimative Spa-Erlebnis",
      icon: "🌸",
      treatments: [
        {
          id: "luxury-package",
          title: "Luxury Wellness Paket",
          description: "Kombination aus Japanese Head Spa, Maniküre und Pediküre für das ultimative Verwöhnerlebnis",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Japanes%20Head%20Spa.jpg",
          duration: "4 Std",
          price: 280,
          category: "wellness-packages"
        },
        {
          id: "beauty-package",
          title: "Beauty Komplettpaket",
          description: "Augenbrauen-Behandlung, Maniküre und Pediküre in einer Sitzung",
          imageUrl: "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/shellac.jpg",
          duration: "3 Std 30 min",
          price: 220,
          category: "wellness-packages"
        }
      ]
    }
  ];

  const category = serviceCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
        <Navbar />
        <main className="pt-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-[#8A5A44] mb-4">
              Kategorie nicht gefunden
            </h1>
            <p className="text-lg mb-8">
              Die angeforderte Service-Kategorie existiert nicht.
            </p>
            <Link to="/services">
              <Button className="bg-[#8A5A44] hover:bg-[#6D4836] text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zu Services
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
    <div className="min-h-screen bg-[#F8F4F1] text-[#333333]">
      <Navbar />

      <main className="pt-32 relative">
        {/* Background Logo */}
        <div className="absolute inset-0 flex justify-center items-center opacity-5 overflow-hidden">
          <img
            className="min-w-[200%] min-h-[200%] object-cover"
            src={import.meta.env.DEV ? "/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png" : "/rochelaspavers1.0/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png"}
            alt=""
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A06B55] opacity-10 rounded-tl-full"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-[#D4B59E] opacity-20 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/services">
              <Button 
                variant="outline" 
                className="border-[#8A5A44] text-[#8A5A44] hover:bg-[#8A5A44] hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zu Services
              </Button>
            </Link>
          </motion.div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#8A5A44] mb-4">
              {category.title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-[#333333]">
              {category.description}
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-[#8A5A44]/10 rounded-full">
              <span className="text-[#8A5A44] font-semibold">
                {category.treatments.length} Behandlung{category.treatments.length !== 1 ? 'en' : ''} verfügbar
              </span>
            </div>
          </motion.div>

          {/* Treatments Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {category.treatments.map((service) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCategory;
