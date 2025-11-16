import { Clock, DollarSign, Shield, Headphones, RefreshCw, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Clock,
    title: "Instant Delivery",
    description: "Get your account credentials within minutes of ordering. No waiting, no delays.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Premium subscriptions at unbeatable prices. Save up to 80% compared to official rates.",
  },
  {
    icon: Shield,
    title: "Secure & Guaranteed",
    description: "All accounts are verified and safe to use. Your privacy is our top priority.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our dedicated team is always ready to help you with any questions or issues.",
  },
  {
    icon: RefreshCw,
    title: "100% Replacement Warranty",
    description: "If any account stops working, we'll replace it immediately at no extra cost.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Every account is tested before delivery to ensure the best experience for you.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide the best service in the market with unmatched quality and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
