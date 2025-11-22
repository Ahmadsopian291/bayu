import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const Products = () => {
  const limitedProducts = products.slice(0, 6); // hanya 6 produk pertama

  return (
    <section id="products" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Produk <span className="bg-gradient-primary bg-clip-text text-transparent">Premium</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih dari berbagai koleksi akun langganan premium kami
          </p>
        </div>

        {/* Grid 6 produk saja */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {limitedProducts.map((product) => (
            <Card
              key={product.id}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105 group relative overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-12 w-auto mb-4 object-contain"
              />

              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>

              <Button
                variant="outline"
                className="w-full group-hover:bg-primary/10 group-hover:border-primary/50"
                asChild
              >
                <Link to={`/product/${product.id}`} className="flex items-center justify-center">
                  Lihat Detail
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* Tombol lihat semua produk */}
        <div className="text-center mt-12">
          <Button variant="neon" asChild>
            <Link to="/all-products">
              Lihat Semua Produk
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
