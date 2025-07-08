import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CustomTreatwellButtonProps {
  text: string;
  href: string;
  className?: string;
}

const CustomTreatwellButton: React.FC<CustomTreatwellButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <Button
      asChild
      className={`bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-2 ${className}`}
    >
      <Link to={href}>{text}</Link>
    </Button>
  );
};

export default CustomTreatwellButton;
