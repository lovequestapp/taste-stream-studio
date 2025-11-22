import { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tasteLogo from "@/assets/taste-logo-main.png";

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
            <Link to="/" className="transition-smooth hover:opacity-80">
              <img src={tasteLogo} alt="TASTE" className="h-10 w-auto" />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-fast font-medium">
                Home
              </Link>
              <Link to="/series" className="text-muted-foreground hover:text-foreground transition-fast">
                Series
              </Link>
              <Link to="/movies" className="text-muted-foreground hover:text-foreground transition-fast">
                Movies
              </Link>
              <Link to="/originals" className="text-muted-foreground hover:text-foreground transition-fast">
                Originals
              </Link>
              <Link to="/my-list" className="text-muted-foreground hover:text-foreground transition-fast">
                My List
              </Link>
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
