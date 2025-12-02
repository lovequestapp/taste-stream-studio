import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TMDBImage } from "@/components/TMDBImage";

interface ContentItem {
  id: string;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  tmdbId?: number;
  tmdbType?: 'movie' | 'tv';
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

export const ContentRow = ({ title, items }: ContentRowProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        {/* Row Title */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {/* Scrollable Content */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-smooth glass-panel h-full rounded-none hover:bg-card/80"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-smooth glass-panel h-full rounded-none hover:bg-card/80"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Content Grid */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[280px] group/card cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => navigate(`/show/${item.id}`)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-card transition-smooth group-hover/card:scale-105 group-hover/card:shadow-premium">
                  {/* Poster Image */}
                  <TMDBImage
                    tmdbId={item.tmdbId}
                    tmdbType={item.tmdbType}
                    fallbackImage={item.image}
                    alt={item.title}
                    className="w-full aspect-[2/3] object-cover"
                    type="poster"
                  />

                  {/* Hover Overlay */}
                  {hoveredId === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex flex-col justify-end p-4 animate-fade-in">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        {item.year && <span>{item.year}</span>}
                        {item.rating && (
                          <span className="glass-panel px-2 py-0.5 rounded">
                            {item.rating}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="hero" 
                          size="sm" 
                          className="gap-1 flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/show/${item.id}`);
                          }}
                        >
                          <Play className="h-3 w-3 fill-current" />
                          Watch
                        </Button>
                        <Button 
                          variant="glass" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
