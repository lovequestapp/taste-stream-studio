import { Navigation } from "@/components/Navigation";
import { HeroBanner } from "@/components/HeroBanner";
import { ContentRow } from "@/components/ContentRow";
import southSidePoster from "@/assets/south-side-poster.jpg";
import shermansShowcasePoster from "@/assets/shermans-showcase-poster.jpg";
import comedySeriesPoster from "@/assets/comedy-series-poster.jpg";
import actionComedyPoster from "@/assets/action-comedy-poster.jpg";

const Index = () => {
  // Sample content data featuring Bashir Salahuddin's work
  const bashirOriginals = [
    {
      id: "1",
      title: "South Side",
      image: southSidePoster,
      year: "2019",
      rating: "TV-MA",
    },
    {
      id: "2",
      title: "Sherman's Showcase",
      image: shermansShowcasePoster,
      year: "2019",
      rating: "TV-14",
    },
    {
      id: "3",
      title: "The Last OG",
      image: comedySeriesPoster,
      year: "2018",
      rating: "TV-MA",
    },
    {
      id: "4",
      title: "Snatched",
      image: actionComedyPoster,
      year: "2017",
      rating: "R",
    },
    {
      id: "5",
      title: "South Side",
      image: southSidePoster,
      year: "2019",
      rating: "TV-MA",
    },
  ];

  const popularOnTaste = [
    {
      id: "6",
      title: "Sherman's Showcase",
      image: shermansShowcasePoster,
      year: "2019",
      rating: "TV-14",
    },
    {
      id: "7",
      title: "Glow",
      image: actionComedyPoster,
      year: "2017",
      rating: "TV-MA",
    },
    {
      id: "8",
      title: "Single Parents",
      image: comedySeriesPoster,
      year: "2018",
      rating: "TV-PG",
    },
    {
      id: "9",
      title: "Velvet Buzzsaw",
      image: southSidePoster,
      year: "2019",
      rating: "R",
    },
    {
      id: "10",
      title: "The Mindy Project",
      image: shermansShowcasePoster,
      year: "2012",
      rating: "TV-14",
    },
  ];

  const criticallyAcclaimed = [
    {
      id: "11",
      title: "Top Gun: Maverick",
      image: actionComedyPoster,
      year: "2022",
      rating: "PG-13",
    },
    {
      id: "12",
      title: "Looking",
      image: comedySeriesPoster,
      year: "2014",
      rating: "TV-MA",
    },
    {
      id: "13",
      title: "South Side",
      image: southSidePoster,
      year: "2019",
      rating: "TV-MA",
    },
    {
      id: "14",
      title: "Robot Chicken",
      image: shermansShowcasePoster,
      year: "2005",
      rating: "TV-14",
    },
    {
      id: "15",
      title: "The Last OG",
      image: actionComedyPoster,
      year: "2018",
      rating: "TV-MA",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroBanner />
      
      <div className="relative -mt-32 z-10 space-y-8 pb-20">
        <ContentRow title="Bashir Salahuddin Originals" items={bashirOriginals} />
        <ContentRow title="Popular on Taste" items={popularOnTaste} />
        <ContentRow title="Critically Acclaimed" items={criticallyAcclaimed} />
      </div>
    </div>
  );
};

export default Index;
