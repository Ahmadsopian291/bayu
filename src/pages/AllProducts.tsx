import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const AllProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Semua Produk <span className="bg-gradient-primary bg-clip-text text-transparent">Premium</span>
          </h1>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            Temukan semua layanan digital premium yang kami sediakan.
          </p>

          {/* Full Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105 group relative overflow-hidden"
              >
                {/* {product.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-xs font-semibold text-primary">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </div>
                  </div>
                )} */}

                <div className="mb-4 flex justify-center">
  <img 
    src={product.image} 
    alt={product.name} 
    className="h-14 object-contain"
  />
</div>

                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* <div className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div> */}

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary/10 group-hover:border-primary/50"
                  asChild
                >
                  <Link to={`/product/${product.id}`} className="flex items-center justify-center">
                    Lihat semua produk
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;