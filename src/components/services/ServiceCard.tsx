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
import { Clock, DollarSign } from "lucide-react";

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
    <Card className="w-full max-w-[450px] overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[250px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-serif text-[rgb(37,150,190)]">
          {title}
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>CHF {price}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onBookNow}
          className="w-full bg-[rgb(37,150,190)] hover:bg-[rgb(27,130,170)] text-white cursor-pointer"
          type="button"
        >
          Jetzt Buchen
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
