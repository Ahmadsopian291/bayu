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
                DigiAccounts
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for premium digital subscription accounts at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#products" className="hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#how-to-order" className="hover:text-primary transition-colors">
                  How to Order
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Products */}
          <div>
            <h4 className="font-semibold mb-4">Popular Products</h4>
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
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
              <li>
                <a
                  href="mailto:ahmadsop291@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  ahmadsop291@gmail.com
                </a>
              </li>
              <li className="text-primary">24/7 Support Available</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} DigiAccounts. All rights reserved.</p>
          <p className="mt-2">
            Premium digital subscriptions at unbeatable prices with lifetime warranty
          </p>
        </div>
      </div>
    </footer>
  );
};
