import { ShoppingBag } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Bay.U Store
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sumber terpercaya untuk akun langganan digital premium dengan harga terjangkau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#products" className="hover:text-primary transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="/#how-to-order" className="hover:text-primary transition-colors">
                  Cara Pemesanan
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Products */}
          <div>
            <h4 className="font-semibold mb-4">Produk Populer</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/product/netflix" className="hover:text-primary transition-colors">
                  Netflix Premium
                </a>
              </li>
              <li>
                <a href="/product/spotify" className="hover:text-primary transition-colors">
                  Spotify Premium
                </a>
              </li>
              <li>
                <a href="/product/chatgpt" className="hover:text-primary transition-colors">
                  ChatGPT Plus
                </a>
              </li>
              <li>
                <a href="/product/canva" className="hover:text-primary transition-colors">
                  Canva Pro
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://wa.me/6282115360819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +62 821-1536-0819
                </a>
              </li>
              <li>
                <a
                  href="mailto:bayustoree049@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  bayustoree049@gmail.com
                </a>
              </li>
              <li className="text-primary">Dukungan 24/7 Tersedia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Bay.U Store. Semua hak dilindungi.</p>

          <p className="mt-2">
            Langganan digital premium dengan harga terbaik dan garansi penuh.
          </p>
          <p>© {currentYear} Web Made in MadDWeb.</p>
          <p>Order Pembuatan Website Dibawah Sini</p>
          <li>
                <a
                  href="https://wa.me/6285795140765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +62 857-9514-0765
                </a>
              </li>
        </div>
      </div>
    </footer>
  );
};
