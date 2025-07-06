import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';

interface CustomTreatwellButtonProps {
  className?: string;
  buttonText?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showIcon?: boolean;
}

const CustomTreatwellButton: React.FC<CustomTreatwellButtonProps> = ({
  className = '',
  buttonText = 'Termin buchen',
  variant = 'default',
  size = 'default',
  showIcon = true
}) => {
  useEffect(() => {
    // Treatwell Widget Script
    const script = document.createElement('script');
    script.src = 'https://buchung.treatwell.ch/common/venue-menu/javascript/widget-button.js?v1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openTreatwellBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Treatwell global function
    if (typeof window.wahanda !== 'undefined' && window.wahanda.openOnlineBookingWidget) {
      window.wahanda.openOnlineBookingWidget("https://buchung.treatwell.ch/ort/468682/menue/");
    } else {
      window.open("https://buchung.treatwell.ch/ort/468682/menue/", "_blank");
    }
  };

  return (
    <Button
      onClick={openTreatwellBooking}
      className={className}
      variant={variant}
      size={size}
    >
      {showIcon && <Calendar className="mr-2 h-4 w-4" />}
      {buttonText}
    </Button>
  );
};

// Add Treatwell to window type
declare global {
  interface Window {
    wahanda: {
      openOnlineBookingWidget: (url: string) => void;
    };
  }
}

export default CustomTreatwellButton;
