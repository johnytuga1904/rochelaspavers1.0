import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

interface TwintPaymentProps {
  amount: string;
  onPaymentComplete?: () => void;
}

const TwintPayment: React.FC<TwintPaymentProps> = ({ 
  amount,
  onPaymentComplete = () => {}
}) => {
  const handlePayment = () => {
    // In einer echten Implementierung würde hier die Twint-Zahlung initiiert werden
    // Für diese Demo simulieren wir eine erfolgreiche Zahlung nach 2 Sekunden
    setTimeout(() => {
      onPaymentComplete();
    }, 2000);
  };

  return (
    <Card className="w-full border-[#8A5A44] bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-[#8A5A44]">
          <Smartphone className="h-5 w-5" />
          Bezahlen mit TWINT
        </CardTitle>
        <CardDescription>
          Schnell und sicher mit der Schweizer Bezahl-App
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-4 py-4">
          <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-sm border border-gray-100">
            <img 
              src="/images/twint-logo.png" 
              alt="TWINT Logo" 
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback wenn das Bild nicht gefunden wird
                e.currentTarget.src = "https://www.twint.ch/content/uploads/2021/05/twint_logo.png";
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">Zu bezahlender Betrag:</p>
            <p className="text-2xl font-bold text-[#8A5A44]">CHF {amount}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button 
          onClick={handlePayment}
          className="w-full bg-[#8A5A44] hover:bg-[#6D4836] text-white"
        >
          Mit TWINT bezahlen
        </Button>
        <p className="text-xs text-gray-500 text-center">
          Nach dem Klick auf "Mit TWINT bezahlen" werden Sie zur TWINT-App weitergeleitet, um die Zahlung abzuschließen.
        </p>
      </CardFooter>
    </Card>
  );
};

export default TwintPayment;
