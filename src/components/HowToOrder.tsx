import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, MessageCircle, CheckCircle, Send } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose Your Product",
    description: "Browse our products and select your preferred subscription duration",
  },
  {
    icon: MessageCircle,
    title: "Click 'Order Now'",
    description: "You will be directed to WhatsApp for secure checkout",
  },
  {
    icon: CheckCircle,
    title: "We Confirm Your Order",
    description: "Our team will verify your order details and process payment",
  },
  {
    icon: Send,
    title: "Instant Delivery",
    description: "Receive your account credentials within minutes via WhatsApp",
  },
];

export const HowToOrder = () => {
  return (
    <section id="how-to-order" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How to <span className="bg-gradient-primary bg-clip-text text-transparent">Order</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple and secure ordering process in just 4 easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-neon">
                  {index + 1}
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-primary" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="animate-glow-pulse">
            <a href="https://wa.me/6285795140765" target="_blank" rel="noopener noreferrer">
              Order Now on WhatsApp
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Available 24/7 • Fast Response • Secure Payment
          </p>
        </div>
      </div>
    </section>
  );
};
