import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Clock } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
  onBookNow?: () => void;
}

const ServiceCard = ({
  title = "Japanese Head Spa",
  description = "Ganzheitliche Kopfhaut- und Haarbehandlung mit Kräuteröl-Massage, Reinigung, Peeling und Haarmaske",
  imageUrl = "https://raw.githubusercontent.com/johnytuga1904/GSPA/main/public/Japanes%20Head%20Spa.jpg",
  duration = "90 min",
  price = 139,
  onBookNow = () => console.log("Jetzt buchen geklickt"),
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-[450px] overflow-hidden bg-[#F8F4F1] shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-[#D4B59E]/20">
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-[#8A5A44]">
          {title}
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-[#333333] mt-1">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-[#D4B59E]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{title === "Fuss Pediküre" || title === "Maniküre" ? `Ab CHF ${price}` : `CHF ${price}`}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-[#333333]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onBookNow}
          className="w-full bg-[#8A5A44] hover:bg-[#6D4836] text-white"
          type="button"
        >
          Jetzt Buchen
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
