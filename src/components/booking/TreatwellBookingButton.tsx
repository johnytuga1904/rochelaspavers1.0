import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TreatwellBookingButtonProps {
  className?: string;
  buttonText?: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
}

const TreatwellBookingButton: React.FC<TreatwellBookingButtonProps> = ({ 
  className = '',
  buttonText = 'Termin buchen',
  variant = 'default',
  size = 'default'
}) => {
  useEffect(() => {
    // Treatwell Widget Script
    const script = document.createElement('script');
    script.src = 'https://buchung.treatwell.ch/common/venue-menu/javascript/widget-button.js?v1';
    script.async = true;
    document.body.appendChild(script);

    // Treatwell CSS
    const link = document.createElement('link');
    link.type = 'text/css';
    link.href = 'https://buchung.treatwell.ch/common/venue-menu/css/widget-button.css';
    link.rel = 'stylesheet';
    link.media = 'screen';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const openTreatwellBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Treatwell global function
    if (typeof window.wahanda !== 'undefined' && window.wahanda.openOnlineBookingWidget) {
      window.wahanda.openOnlineBookingWidget("https://buchung.treatwell.ch/ort/468682/menue/");
    } else {
      window.open("https://www.treatwell.ch/", "_blank");
    }
    return false;
  };

  // Definiere Basis-Stile basierend auf dem Design der Website
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none";
  
  // Varianten-Stile
  const variantStyles = {
    default: "bg-[#8A5A44] text-white shadow-md hover:bg-[#6D4836] active:scale-[0.98] transition-all duration-200",
    outline: "border-2 border-[#8A5A44] bg-transparent text-[#8A5A44] shadow-sm hover:bg-[#8A5A44]/10 active:scale-[0.98] transition-all duration-200",
    secondary: "bg-[#D4B59E] text-[#333333] shadow-sm hover:bg-[#C4A58E] active:scale-[0.98] transition-all duration-200"
  };
  
  // Größen-Stile
  const sizeStyles = {
    default: "h-10 px-5 py-2",
    sm: "h-9 rounded-md px-4 text-xs",
    lg: "h-12 rounded-md px-8 text-base"
  };

  // Kombiniere alle Stile
  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <a 
      href='https://www.treatwell.ch/' 
      id="wahanda-online-booking-widget"
      onClick={openTreatwellBooking}
      target="_blank"
      className={buttonStyles}
    >
      <span>{buttonText}</span>
    </a>
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

export default TreatwellBookingButton;
