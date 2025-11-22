// Real content data for TASTE streaming platform
export interface Show {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: string;
  genre: string;
  description: string;
  creator?: string;
  cast?: string[];
  seasons?: number;
  episodes?: number;
  runtime?: string;
  trailerUrl?: string;
}

export const shows: Record<string, Show> = {
  "south-side": {
    id: "south-side",
    title: "South Side",
    image: "", // Will be set from import
    year: "2019",
    rating: "TV-MA",
    genre: "Comedy",
    description: "Two friends from the South Side of Chicago navigate rent-to-own furniture hustle, hilarious schemes, and the daily absurdities of life in their neighborhood. Co-created by Bashir Salahuddin and Diallo Riddle.",
    creator: "Bashir Salahuddin, Diallo Riddle",
    cast: ["Sultan Salahuddin", "Kareme Young", "Bashir Salahuddin", "Chandra Russell"],
    seasons: 2,
    episodes: 20,
    runtime: "22 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "shermans-showcase": {
    id: "shermans-showcase",
    title: "Sherman's Showcase",
    image: "",
    year: "2019",
    rating: "TV-14",
    genre: "Comedy, Musical",
    description: "A vintage variety show that spans 40 years, featuring musical performances, comedy sketches, and celebrity guests. A hilarious love letter to Black variety shows. Co-created by Bashir Salahuddin and Diallo Riddle.",
    creator: "Bashir Salahuddin, Diallo Riddle",
    cast: ["Bashir Salahuddin", "Diallo Riddle", "John Legend", "Ne-Yo"],
    seasons: 2,
    episodes: 16,
    runtime: "21 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "glow": {
    id: "glow",
    title: "GLOW",
    image: "",
    year: "2017",
    rating: "TV-MA",
    genre: "Comedy, Drama, Sports",
    description: "An '80s-set drama about the world of women's professional wrestling. Features Bashir Salahuddin in a memorable role alongside an incredible ensemble cast.",
    creator: "Liz Flahive, Carly Mensch",
    cast: ["Alison Brie", "Betty Gilpin", "Marc Maron", "Bashir Salahuddin"],
    seasons: 3,
    episodes: 30,
    runtime: "34 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "snatched": {
    id: "snatched",
    title: "Snatched",
    image: "",
    year: "2017",
    rating: "R",
    genre: "Action, Comedy",
    description: "After her boyfriend dumps her on the eve of their exotic vacation, impetuous dreamer Emily Middleton persuades her ultra-cautious mother, Linda, to travel with her to paradise. Features Bashir Salahuddin in a hilarious supporting role.",
    creator: "Jonathan Levine",
    cast: ["Amy Schumer", "Goldie Hawn", "Ike Barinholtz", "Bashir Salahuddin"],
    runtime: "90 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "the-last-og": {
    id: "the-last-og",
    title: "The Last O.G.",
    image: "",
    year: "2018",
    rating: "TV-MA",
    genre: "Comedy",
    description: "An ex-convict returns to his gentrified Brooklyn neighborhood. Features Bashir Salahuddin in a standout role in this critically acclaimed comedy series.",
    creator: "Jordan Peele, John Carcieri",
    cast: ["Tracy Morgan", "Tiffany Haddish", "Bashir Salahuddin", "Ryan Gaul"],
    seasons: 4,
    episodes: 32,
    runtime: "22 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "game-night": {
    id: "game-night",
    title: "Game Night",
    image: "",
    year: "2018",
    rating: "R",
    genre: "Action, Comedy, Mystery",
    description: "A group of friends who meet regularly for game nights find themselves trying to solve a real murder mystery. A perfectly crafted comedy thriller with smart humor and genuine thrills.",
    creator: "John Francis Daley, Jonathan Goldstein",
    cast: ["Jason Bateman", "Rachel McAdams", "Kyle Chandler", "Sharon Horgan"],
    runtime: "100 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "girls-trip": {
    id: "girls-trip",
    title: "Girls Trip",
    image: "",
    year: "2017",
    rating: "R",
    genre: "Comedy",
    description: "When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there's enough dancing, drinking, brawling and romancing to make the Big Easy blush.",
    creator: "Malcolm D. Lee",
    cast: ["Regina Hall", "Queen Latifah", "Jada Pinkett Smith", "Tiffany Haddish"],
    runtime: "122 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "bridesmaids": {
    id: "bridesmaids",
    title: "Bridesmaids",
    image: "",
    year: "2011",
    rating: "R",
    genre: "Comedy, Romance",
    description: "Competition between the maid of honor and a bridesmaid over who is the bride's best friend threatens to upend the life of an out-of-work pastry chef. A modern comedy classic that redefined the genre.",
    creator: "Paul Feig",
    cast: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne", "Melissa McCarthy"],
    runtime: "125 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "top-gun-maverick": {
    id: "top-gun-maverick",
    title: "Top Gun: Maverick",
    image: "",
    year: "2022",
    rating: "PG-13",
    genre: "Action, Drama",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator. Features Bashir Salahuddin in this blockbuster sequel that became one of the highest-grossing films of all time.",
    creator: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Bashir Salahuddin"],
    runtime: "131 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "single-parents": {
    id: "single-parents",
    title: "Single Parents",
    image: "",
    year: "2018",
    rating: "TV-PG",
    genre: "Comedy",
    description: "A group of single parents form their own support system as they raise their kids and struggle to start new relationships. Features Bashir Salahuddin in this heartwarming ensemble comedy.",
    creator: "J.J. Philbin",
    cast: ["Taran Killam", "Leighton Meester", "Kimrie Lewis", "Bashir Salahuddin"],
    seasons: 2,
    episodes: 45,
    runtime: "22 min",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
};
