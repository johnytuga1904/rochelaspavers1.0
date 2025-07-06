import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Gift, Mail, User, Check, Loader2 } from "lucide-react";
import axios from "axios";
import TwintPayment from "@/components/payment/TwintPayment";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  amount: z.string().min(1, { message: "Please select an amount" }),
  design: z.string().min(1, { message: "Please select a design" }),
  recipientName: z.string().min(1, { message: "Recipient name is required" }),
  recipientEmail: z.string().email({ message: "Please enter a valid email" }),
  senderName: z.string().min(1, { message: "Your name is required" }),
  message: z.string().optional(),
});

interface GiftCardSelectorProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  isSubmitting?: boolean;
  defaultAmount?: string;
  onComplete?: () => void;
}

const GiftCardSelector = ({
  onSubmit = (values) => console.log(values),
  isSubmitting = false,
  defaultAmount = "100",
  onComplete,
}: GiftCardSelectorProps) => {
  const [selectedDesign, setSelectedDesign] = useState("rochela");
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [giftCardId, setGiftCardId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: defaultAmount || "100",
      design: "rochela",
      recipientName: "",
      recipientEmail: "",
      senderName: "",
      message: "",
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    setFormData(data);
    setStep('payment');
  });
  
  const handlePaymentComplete = async () => {
    if (formData) {
      onSubmit(formData);
      setSendingEmail(true);
      setEmailError(null);
      
      try {
        // API-Aufruf zum Senden des Gutscheins
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/gift-cards/send`,
          formData
        );
        
        if (response.data.success) {
          setGiftCardId(response.data.giftCardId);
          setStep('success');
        } else {
          throw new Error(response.data.message || 'Fehler beim Senden des Gutscheins');
        }
      } catch (error) {
        console.error('Fehler beim Senden des Gutscheins:', error);
        setEmailError(
          error instanceof Error 
            ? error.message 
            : 'Ein unbekannter Fehler ist aufgetreten. Bitte kontaktieren Sie uns direkt.'
        );
      } finally {
        setSendingEmail(false);
      }
    }
  };

  const giftCardDesigns = [
    {
      id: "rochela",
      name: "Rochela Spa",
      image:
        "/ChatGPT Image Mar 31, 2025, 06_26_34 PM.png",
    },
    {
      id: "classic",
      name: "Classic Elegance",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
    },
    {
      id: "floral",
      name: "Floral Bliss",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
    },
    {
      id: "spa",
      name: "Spa Tranquility",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80",
    },
  ];

  const amountOptions = ["50", "100", "150", "200", "250", "300"];
  
  if (step === 'payment' && formData) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-cream p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Bezahlung des Geschenkgutscheins</h3>
        
        {emailError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-medium">Fehler beim Senden des Gutscheins</p>
            <p className="text-sm">{emailError}</p>
            <p className="text-sm mt-2">
              Der Betrag wurde bereits abgebucht. Bitte kontaktieren Sie uns unter 
              <a href="mailto:info@rochela-spa.ch" className="underline">info@rochela-spa.ch</a> 
              mit Ihren Gutscheindaten.
            </p>
          </div>
        )}
        
        <div className="max-w-md mx-auto">
          {sendingEmail ? (
            <div className="text-center py-8">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-[#8A5A44]" />
              <p className="mt-4">Gutschein wird erstellt und versendet...</p>
            </div>
          ) : (
            <TwintPayment 
              amount={formData.amount} 
              onPaymentComplete={handlePaymentComplete} 
            />
          )}
        </div>
        <div className="mt-4 text-center">
          <button 
            onClick={() => setStep('form')} 
            className="text-[#8A5A44] underline text-sm"
          >
            Zurück zur Gutscheinauswahl
          </button>
        </div>
      </div>
    );
  }
  
  if (step === 'success') {
    return (
      <div className="w-full max-w-4xl mx-auto bg-cream p-6 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-[#8A5A44] rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Vielen Dank für Ihren Kauf!</h3>
        <p className="mb-6">Ihr digitaler Geschenkgutschein wurde erstellt und an {formData?.recipientEmail} verschickt.</p>
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg border border-[#D4B59E] mb-6">
          <p className="text-sm mb-2"><strong>Empfänger:</strong> {formData?.recipientName} ({formData?.recipientEmail})</p>
          <p className="text-sm mb-2"><strong>Betrag:</strong> CHF {formData?.amount}</p>
          <p className="text-sm mb-2"><strong>Design:</strong> {giftCardDesigns.find(d => d.id === formData?.design)?.name}</p>
          {giftCardId && <p className="text-sm"><strong>Gutschein-Nr:</strong> {giftCardId}</p>}
        </div>
        <p className="text-sm mb-6">
          Eine Bestätigung wurde auch an <strong>info@rochela-spa.ch</strong> gesendet.
        </p>
        <button 
          onClick={() => {
            form.reset();
            if (onComplete) {
              onComplete();
            } else {
              setStep('form');
            }
          }} 
          className="bg-[#8A5A44] hover:bg-[#6D4836] text-white px-6 py-2 rounded-md"
        >
          Weiteren Gutschein erstellen
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-cream p-6 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Select Gift Card Options
              </h3>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gift Card Amount</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {amountOptions.map((amount) => (
                            <SelectItem key={amount} value={amount}>
                              ${amount}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="design"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gift Card Design</FormLabel>
                      <div className="grid grid-cols-3 gap-3">
                        {giftCardDesigns.map((design) => (
                          <div
                            key={design.id}
                            className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${field.value === design.id ? "border-[rgb(37,150,190)] ring-2 ring-[rgb(37,150,190)]" : "border-gray-200"}`}
                            onClick={() => {
                              field.onChange(design.id);
                              setSelectedDesign(design.id);
                            }}
                          >
                            <img
                              src={design.image}
                              alt={design.name}
                              className="w-full h-24 object-cover"
                            />
                            <div className="p-2 text-xs text-center">
                              {design.name}
                            </div>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Recipient Information
              </h3>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="recipientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient's Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-10"
                            placeholder="Jane Doe"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="recipientEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient's Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-10"
                            placeholder="jane@example.com"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="senderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-10"
                            placeholder="John Doe"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Personal Message (Optional)</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring min-h-[100px]"
                          placeholder="Add a personal message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <Card className="mt-6 border-[#8A5A44] bg-[rgba(138,90,68,0.05)]">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-[#8A5A44]">
                <Gift className="h-5 w-5" />
                Gutschein-Vorschau
              </CardTitle>
              <CardDescription>
                Vorschau Ihres ausgewählten Geschenkgutscheins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Betrag:{" "}
                    <span className="text-[#8A5A44]">
                      CHF {form.watch("amount")}
                    </span>
                  </p>
                  <p className="text-sm">
                    Design:{" "}
                    {giftCardDesigns.find((d) => d.id === selectedDesign)?.name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-[#8A5A44]" />
                  <span className="font-serif text-xl">Rochela Spa</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Geschenkgutscheine werden per E-Mail zugestellt und können für alle Behandlungen eingelöst werden.
              </p>
            </CardFooter>
          </Card>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-[#8A5A44] hover:bg-[#6D4836] text-white px-8 py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Verarbeitung..." : "Gutschein kaufen"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GiftCardSelector;
