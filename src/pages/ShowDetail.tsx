import { useParams, useNavigate } from "react-router-dom";
import { Play, Plus, Share2, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ContentRow } from "@/components/ContentRow";
import { Footer } from "@/components/Footer";
import { shows } from "@/data/shows";
import { useState } from "react";

// Import all poster images
import southSidePoster from "@/assets/south-side-poster.jpg";
import shermansShowcasePoster from "@/assets/shermans-showcase-poster.jpg";
import comedySeriesPoster from "@/assets/comedy-series-poster.jpg";
import actionComedyPoster from "@/assets/action-comedy-poster.jpg";
import gameNightPoster from "@/assets/game-night-poster.jpg";
import girlsTripPoster from "@/assets/girls-trip-poster.jpg";
import bridesmaids from "@/assets/bridesmaids-poster.jpg";

const posterMap: Record<string, string> = {
  "south-side": southSidePoster,
  "shermans-showcase": shermansShowcasePoster,
  "glow": actionComedyPoster,
  "snatched": actionComedyPoster,
  "the-last-og": comedySeriesPoster,
  "game-night": gameNightPoster,
  "girls-trip": girlsTripPoster,
  "bridesmaids": bridesmaids,
  "top-gun-maverick": actionComedyPoster,
  "single-parents": comedySeriesPoster,
};

const ShowDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  
  const show = id ? shows[id] : null;

  if (!show) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Show Not Found</h1>
          <Button onClick={() => navigate("/")} variant="hero">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const posterImage = posterMap[show.id] || southSidePoster;

  // Suggested content
  const suggested = Object.values(shows)
    .filter((s) => s.id !== show.id)
    .slice(0, 5)
    .map((s) => ({
      id: s.id,
      title: s.title,
      image: posterMap[s.id] || southSidePoster,
      year: s.year,
      rating: s.rating,
    }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={posterImage}
            alt={show.title}
            className="w-full h-full object-cover scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            {/* Back Button */}
            <Button
              variant="glass"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>

            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="text-sm font-medium">TASTE {show.seasons ? "Series" : "Film"}</span>
              </div>
              {show.creator?.includes("Bashir Salahuddin") && (
                <div className="glass-panel px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-primary">Bashir Salahuddin Original</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              {show.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {show.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-primary">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">95% Match</span>
              </div>
              <span className="font-semibold">{show.year}</span>
              <span className="glass-panel px-2 py-0.5 rounded text-xs">{show.rating}</span>
              {show.seasons && <span>{show.seasons} Season{show.seasons > 1 ? 's' : ''}</span>}
              {show.runtime && <span>{show.runtime}</span>}
            </div>

            {/* Genres & Creator */}
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Genre: </span>
                <span className="font-medium">{show.genre}</span>
              </div>
              {show.creator && (
                <div>
                  <span className="text-muted-foreground">Created by: </span>
                  <span className="font-medium">{show.creator}</span>
                </div>
              )}
              {show.cast && (
                <div>
                  <span className="text-muted-foreground">Starring: </span>
                  <span className="font-medium">{show.cast.join(", ")}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                variant="hero"
                size="xl"
                className="gap-2"
                onClick={() => setShowTrailer(true)}
              >
                <Play className="h-5 w-5 fill-current" />
                Watch Trailer
              </Button>
              <Button variant="glass" size="xl" className="gap-2">
                <Plus className="h-5 w-5" />
                My List
              </Button>
              <Button variant="glass" size="xl" className="gap-2">
                <Share2 className="h-5 w-5" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      {showTrailer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg animate-fade-in"
          onClick={() => setShowTrailer(false)}
        >
          <div className="w-full max-w-6xl px-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video glass-panel overflow-hidden rounded-xl shadow-premium">
              <iframe
                className="w-full h-full"
                src={show.trailerUrl}
                title={`${show.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex justify-center mt-6">
              <Button
                variant="glass"
                size="lg"
                onClick={() => setShowTrailer(false)}
              >
                Close Trailer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* More Like This */}
      <div className="relative -mt-32 z-10 pb-12">
        <ContentRow title="More Like This" items={suggested} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ShowDetail;
