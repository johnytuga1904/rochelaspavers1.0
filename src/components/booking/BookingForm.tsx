import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  service: z.string({
    required_error: "Bitte wählen Sie eine Dienstleistung",
  }),
  date: z.date({
    required_error: "Bitte wählen Sie ein Datum",
  }),
  time: z.string({
    required_error: "Bitte wählen Sie eine Uhrzeit",
  }),
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().min(10, {
    message: "Bitte geben Sie eine gültige Telefonnummer ein.",
  }),
});

interface BookingFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  services?: Array<{
    id: string;
    name: string;
    price: number;
    duration: string;
  }>;
}

const BookingForm = ({
  onSubmit = (values) => console.log(values),
  services = [
    { id: "1", name: "Japanisches Kopf-Spa", price: 120, duration: "60 min" },
    { id: "2", name: "BIAB Maniküre", price: 85, duration: "45 min" },
    { id: "3", name: "BIAB Pediküre", price: 95, duration: "50 min" },
    { id: "4", name: "Microblading", price: 250, duration: "90 min" },
  ],
}: BookingFormProps) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setShowPayment(true);
    onSubmit(values);
  };

  // Generate available time slots
  const timeSlots = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-white">
      {!showPayment ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-center mb-6">
              Termin Buchen
            </h2>

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dienstleistung</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedService(value);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Dienstleistung auswählen" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.price}€ ({service.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Wählen Sie die gewünschte Dienstleistung aus.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Datum</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={"w-full pl-3 text-left font-normal"}
                          >
                            {field.value ? (
                              format(field.value, "dd.MM.yyyy")
                            ) : (
                              <span>Datum wählen</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() ||
                            date >
                              new Date(
                                new Date().setMonth(new Date().getMonth() + 2),
                              )
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Uhrzeit</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Uhrzeit wählen" />
                          <Clock className="ml-auto h-4 w-4 opacity-50" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time} Uhr
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vollständiger Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Maria Müller" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="maria.mueller@beispiel.de" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefonnummer</FormLabel>
                  <FormControl>
                    <Input placeholder="0123 456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#2596be] hover:bg-[#2596be]/90"
            >
              Weiter zur Zahlung
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Zahlungsdetails
          </h2>

          {selectedService && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium">Buchungsübersicht</h3>
              <p className="text-sm text-gray-600 mt-2">
                {services.find((s) => s.id === selectedService)?.name} -
                {services.find((s) => s.id === selectedService)?.price}€
              </p>
              <p className="text-sm text-gray-600">
                {form.getValues().date &&
                  format(form.getValues().date, "dd.MM.yyyy")}{" "}
                um {form.getValues().time} Uhr
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Kartennummer
              </label>
              <div className="relative">
                <Input placeholder="1234 5678 9012 3456" />
                <CreditCard className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ablaufdatum
                </label>
                <Input placeholder="MM/JJ" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <Input placeholder="123" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Name auf der Karte
              </label>
              <Input placeholder="Maria Müller" />
            </div>
          </div>

          <Button className="w-full bg-[#2596be] hover:bg-[#2596be]/90">
            Buchung abschließen
          </Button>

          <Button
            variant="outline"
            className="w-full mt-2"
            onClick={() => setShowPayment(false)}
          >
            Zurück zu den Buchungsdetails
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
