import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroBanner = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm font-medium">TASTE Original</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            The Last Stand
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            In the heart of the city, six friends navigate life's unexpected challenges with humor, 
            heart, and an unbreakable bond. A comedy-drama that celebrates friendship and resilience.
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">98% Match</span>
            <span>2024</span>
            <span className="glass-panel px-2 py-0.5 rounded text-xs">TV-MA</span>
            <span>2 Seasons</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <Button variant="hero" size="xl" className="gap-2">
              <Play className="h-5 w-5 fill-current" />
              Play Now
            </Button>
            <Button variant="glass" size="xl" className="gap-2">
              <Plus className="h-5 w-5" />
              My List
            </Button>
            <Button variant="glass" size="xl" className="gap-2">
              <Info className="h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
