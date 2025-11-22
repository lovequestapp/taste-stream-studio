import { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import tasteLogo from "@/assets/taste-logo.png";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass-panel shadow-premium" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <img src={tasteLogo} alt="TASTE" className="h-8 w-auto" />
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/" className="text-foreground hover:text-primary transition-fast font-medium">
                Home
              </a>
              <a href="/series" className="text-muted-foreground hover:text-foreground transition-fast">
                Series
              </a>
              <a href="/movies" className="text-muted-foreground hover:text-foreground transition-fast">
                Movies
              </a>
              <a href="/originals" className="text-muted-foreground hover:text-foreground transition-fast">
                Originals
              </a>
              <a href="/my-list" className="text-muted-foreground hover:text-foreground transition-fast">
                My List
              </a>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
