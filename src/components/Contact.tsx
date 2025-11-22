import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MessageCircle, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Hubungi <span className="bg-gradient-primary bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Kami selalu siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami melalui salah satu metode berikut.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chat langsung dengan kami
            </p>
            <a
              href="https://wa.me/6282115360819"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-semibold"
            >
              +62 821-1536-0819
            </a>
          </Card>

          {/* Email */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Kirimkan email kepada kami
            </p>
            <a
              href="mailto:bayustoree049@gmail.com"
              className="text-primary hover:underline text-sm font-semibold break-all"
            >
              bayustoree049@gmail.com
            </a>
          </Card>

          {/* Support Hours */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Jam Layanan</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Layanan aktif kapan saja
            </p>
            <p className="text-primary text-sm font-semibold">
              Support 24/7
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <div className="p-8 bg-gradient-card rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-3">Siap Mulai?</h3>
            <p className="text-muted-foreground mb-6">
              Bergabunglah dengan ribuan pelanggan yang telah menikmati layanan premium dengan harga terbaik.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/6282115360819" target="_blank" rel="noopener noreferrer">
                Order Sekarang via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};