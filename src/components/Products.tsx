import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const Products = () => {
  return (
    <section id="products" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Premium</span> Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide selection of premium subscription accounts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105 group relative overflow-hidden"
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-xs font-semibold text-primary">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              <div className="text-5xl mb-4">{product.logo}</div>
              
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {product.shortDescription}
              </p>

              <div className="space-y-2 mb-6">
                {product.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full group-hover:bg-primary/10 group-hover:border-primary/50"
                asChild
              >
                <Link to={`/product/${product.id}`} className="flex items-center justify-center">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Looking for something else?</p>
          <Button variant="neon" asChild>
            <a href="https://wa.me/6285795140765" target="_blank" rel="noopener noreferrer">
              Contact Us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
