import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-12">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-smooth"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-smooth"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-smooth"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-smooth"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3 text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-fast">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/series" className="hover:text-foreground transition-fast">
                  Series
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-foreground transition-fast">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/originals" className="hover:text-foreground transition-fast">
                  Originals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Help</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Corporate Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">More</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-fast">
                  Redeem Gift Card
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 TASTE Streaming. All rights reserved.</p>
          <p className="mt-2">Premium entertainment. Powerful stories. Curated for you.</p>
        </div>
      </div>
    </footer>
  );
};
