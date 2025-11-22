import { Navigation } from "@/components/Navigation";
import { HeroBanner } from "@/components/HeroBanner";
import { ContentRow } from "@/components/ContentRow";
import { Footer } from "@/components/Footer";
import southSidePoster from "@/assets/south-side-poster.jpg";
import shermansShowcasePoster from "@/assets/shermans-showcase-poster.jpg";
import comedySeriesPoster from "@/assets/comedy-series-poster.jpg";
import actionComedyPoster from "@/assets/action-comedy-poster.jpg";
import gameNightPoster from "@/assets/game-night-poster.jpg";
import girlsTripPoster from "@/assets/girls-trip-poster.jpg";
import bridesmaids from "@/assets/bridesmaids-poster.jpg";

const Index = () => {
  // Real Bashir Salahuddin content
  const bashirOriginals = [
    {
      id: "south-side",
      title: "South Side",
      image: southSidePoster,
      year: "2019",
      rating: "TV-MA",
    },
    {
      id: "shermans-showcase",
      title: "Sherman's Showcase",
      image: shermansShowcasePoster,
      year: "2019",
      rating: "TV-14",
    },
    {
      id: "the-last-og",
      title: "The Last O.G.",
      image: comedySeriesPoster,
      year: "2018",
      rating: "TV-MA",
    },
    {
      id: "glow",
      title: "GLOW",
      image: actionComedyPoster,
      year: "2017",
      rating: "TV-MA",
    },
    {
      id: "single-parents",
      title: "Single Parents",
      image: comedySeriesPoster,
      year: "2018",
      rating: "TV-PG",
    },
  ];

  // Popular comedy content
  const popularOnTaste = [
    {
      id: "game-night",
      title: "Game Night",
      image: gameNightPoster,
      year: "2018",
      rating: "R",
    },
    {
      id: "girls-trip",
      title: "Girls Trip",
      image: girlsTripPoster,
      year: "2017",
      rating: "R",
    },
    {
      id: "bridesmaids",
      title: "Bridesmaids",
      image: bridesmaids,
      year: "2011",
      rating: "R",
    },
    {
      id: "shermans-showcase",
      title: "Sherman's Showcase",
      image: shermansShowcasePoster,
      year: "2019",
      rating: "TV-14",
    },
    {
      id: "snatched",
      title: "Snatched",
      image: actionComedyPoster,
      year: "2017",
      rating: "R",
    },
  ];

  const criticallyAcclaimed = [
    {
      id: "top-gun-maverick",
      title: "Top Gun: Maverick",
      image: actionComedyPoster,
      year: "2022",
      rating: "PG-13",
    },
    {
      id: "south-side",
      title: "South Side",
      image: southSidePoster,
      year: "2019",
      rating: "TV-MA",
    },
    {
      id: "game-night",
      title: "Game Night",
      image: gameNightPoster,
      year: "2018",
      rating: "R",
    },
    {
      id: "glow",
      title: "GLOW",
      image: actionComedyPoster,
      year: "2017",
      rating: "TV-MA",
    },
    {
      id: "bridesmaids",
      title: "Bridesmaids",
      image: bridesmaids,
      year: "2011",
      rating: "R",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroBanner />
      
      <div className="relative -mt-32 z-10 space-y-8 pb-12">
        <ContentRow title="Bashir Salahuddin Originals" items={bashirOriginals} />
        <ContentRow title="Popular on Taste" items={popularOnTaste} />
        <ContentRow title="Critically Acclaimed" items={criticallyAcclaimed} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
