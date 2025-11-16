import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/#products" },
  { name: "How to Order", path: "/#how-to-order" },
  { name: "FAQ", path: "/#faq" },
  { name: "Contact", path: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.includes("#")) {
      const id = path.split("#")[1];
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DigiAccounts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  if (item.path.includes("#")) {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button variant="neon" size="sm" asChild>
              <a href="https://wa.me/6285795140765" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  if (item.path.includes("#")) {
                    e.preventDefault();
                    handleNavClick(item.path);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
            <Button variant="neon" size="sm" className="w-full" asChild>
              <a href="https://wa.me/6285795140765" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
