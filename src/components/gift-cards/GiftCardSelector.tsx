import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CreditCard, Gift, Mail, User } from "lucide-react";

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
}

const GiftCardSelector = ({
  onSubmit = (values) => console.log(values),
  isSubmitting = false,
}: GiftCardSelectorProps) => {
  const [selectedDesign, setSelectedDesign] = useState("classic");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "100",
      design: "classic",
      recipientName: "",
      recipientEmail: "",
      senderName: "",
      message: "",
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  const giftCardDesigns = [
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

          <Card className="mt-6 border-[rgb(37,150,190)] bg-[rgba(37,150,190,0.05)]">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Gift Card Preview
              </CardTitle>
              <CardDescription>
                Preview of your selected gift card
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Amount:{" "}
                    <span className="text-[rgb(37,150,190)]">
                      ${form.watch("amount")}
                    </span>
                  </p>
                  <p className="text-sm">
                    Design:{" "}
                    {giftCardDesigns.find((d) => d.id === selectedDesign)?.name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-[rgb(37,150,190)]" />
                  <span className="font-serif text-xl">Rochela Spa</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Gift cards are delivered via email and can be redeemed online or
                in-store.
              </p>
            </CardFooter>
          </Card>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-[rgb(37,150,190)] hover:bg-[rgb(27,130,170)] text-white px-8 py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Purchase Gift Card"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GiftCardSelector;
