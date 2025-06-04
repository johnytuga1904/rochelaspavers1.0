import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCategoryProps {
  categoryId: string;
  title: string;
  description: string;
  icon: string;
  treatmentCount: number;
}

const ServiceCategory = ({
  categoryId,
  title,
  description,
  icon,
  treatmentCount,
}: ServiceCategoryProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${categoryId}`);
  };

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#F8F4F1] hover:bg-[#F0EBE7] border-[#D4B59E]/20"
      onClick={handleClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="text-3xl mb-2">{icon}</div>
          <ChevronRight className="h-5 w-5 text-[#8A5A44]" />
        </div>
        <CardTitle className="text-lg font-bold text-[#8A5A44]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2 text-[#333333]">
          {description}
        </p>
        <p className="text-xs text-[#8A5A44]">
          {treatmentCount} Behandlungen verfügbar
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCategory;
