import { Cloud, Sun, CloudRain, LucideIcon } from "lucide-react";

export interface Destination {
  id: string;
  title: string;
  image: string;
  description: string;
  tip?: string;
  weather?: string;
  icon?: LucideIcon;
  avgCost: string;
  popularity: string;
  tags: string[];
  overview?: string;
  attractions?: string[];
  budgetTips?: string[];
  bestTimeToVisit?: string;
  accommodation?: {
    hostel: string;
    hotel: string;
    airbnb: string;
  };
  transportation?: {
    publicTransport: string;
    taxiUber: string;
    bikeRental?: string;
  };
  food?: {
    streetFood: string;
    budgetRestaurant: string;
    midRange: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const destinations: Destination[] = [
  {
    id: "riga",
    title: "Riga, Latvia",
    image: "https://images.unsplash.com/photo-1729705794604-a7226acab62f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaWdhJTIwTGF0dmlhJTIwb2xkJTIwdG93bnxlbnwxfHx8fDE3NTk4NjI5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Art Nouveau architecture and medieval charm meet Baltic seaside beauty. One of Europe's most affordable hidden gems.",
    tip: "Free walking tours of the Art Nouveau district every day at 11 AM",
    weather: "Partly Cloudy, 16°C",
    icon: Cloud,
    avgCost: "€30-45/day",
    popularity: "Rising Star",
    tags: ["Architecture", "History", "Budget"],
    overview: "Riga is a captivating blend of medieval architecture, stunning Art Nouveau buildings, and vibrant culture. As Latvia's capital and largest city, Riga offers an authentic Baltic experience at incredibly low prices. The city's UNESCO-listed Old Town features cobblestone streets, Gothic spires, and colorful buildings, while the Art Nouveau district showcases some of Europe's finest examples of this architectural style. With cheap local food, affordable accommodation, and a thriving cafe culture, Riga is perfect for budget travelers.",
    attractions: [
      "Old Town (Vecrīga) - Medieval streets and colorful buildings",
      "Art Nouveau District - Stunning early 20th-century architecture",
      "Central Market - Five historic zeppelin hangars with fresh food",
      "Riga Cathedral - Largest medieval church in the Baltics",
      "Freedom Monument - Symbol of Latvian independence",
      "House of the Blackheads - Reconstructed 14th-century guild hall"
    ],
    budgetTips: [
      "Join free walking tours of Old Town and Art Nouveau district",
      "Visit Central Market for cheap, fresh local food",
      "Many museums offer free entry on first Wednesday of month",
      "Eat at 'Lido' chain restaurants for authentic cheap meals (€5-8)",
      "Use public transport (very affordable) or walk the compact center",
      "Stay in hostels or Airbnbs in the Quiet Center for best value"
    ],
    bestTimeToVisit: "May-September for warm weather, December for Christmas markets",
    accommodation: {
      hostel: "€10-20/night",
      hotel: "€35-65/night",
      airbnb: "€25-50/night"
    },
    transportation: {
      publicTransport: "€1.15 per trip, €5 for 24-hour pass",
      taxiUber: "€5-12 for typical city trips"
    },
    food: {
      streetFood: "€3-6",
      budgetRestaurant: "€6-12",
      midRange: "€15-25"
    },
    coordinates: {
      lat: 56.9496,
      lng: 24.1052
    }
  },
  {
    id: "krakow",
    title: "Krakow, Poland",
    image: "https://images.unsplash.com/photo-1731044418633-92c6104cae53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjB0cmF2ZWwlMjBjaXR5fGVufDF8fHx8MTc1OTg2MDYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rich history, beautiful old town, and incredibly affordable. Experience Eastern European charm at its finest.",
    tip: "Join free walking tours to learn about the city's fascinating history",
    weather: "Partly Cloudy, 17°C",
    icon: Cloud,
    avgCost: "€25-40/day",
    popularity: "Very Popular",
    tags: ["History", "Culture", "Budget"],
    overview: "Krakow is a stunning medieval city that offers an authentic Eastern European experience at incredibly low prices. With its well-preserved Old Town, vibrant Jewish Quarter (Kazimierz), and proximity to Auschwitz-Birkenau, Krakow combines beauty, culture, and important history. The city's affordable accommodation, cheap local food, and free attractions make it one of Europe's best budget destinations. The lively student atmosphere adds energy to this historic city.",
    attractions: [
      "Main Market Square - Largest medieval square in Europe",
      "Wawel Castle - Royal castle and cathedral complex",
      "Kazimierz - Historic Jewish quarter with synagogues",
      "St. Mary's Basilica - Gothic church with famous altarpiece",
      "Auschwitz-Birkenau - Important WWII memorial site (nearby)",
      "Wieliczka Salt Mine - Underground chapel carved from salt"
    ],
    budgetTips: [
      "Join free walking tours (tip-based) of Old Town and Kazimierz",
      "Eat pierogi and zapiekanka from street vendors (€2-4)",
      "Visit Wawel Castle grounds for free on Mondays",
      "Use public transport or walk (city center is compact)",
      "Drink beer at local prices (€1.50-2.50 per pint)",
      "Book Auschwitz tours in advance (often cheaper online)"
    ],
    bestTimeToVisit: "May-June or September for pleasant weather and lower hotel prices",
    accommodation: {
      hostel: "€8-18/night",
      hotel: "€30-60/night",
      airbnb: "€20-45/night"
    },
    transportation: {
      publicTransport: "€0.80 per trip, €3.50 for 24-hour pass",
      taxiUber: "€4-10 for typical city trips"
    },
    food: {
      streetFood: "€2-5",
      budgetRestaurant: "€5-10",
      midRange: "€12-20"
    },
    coordinates: {
      lat: 50.0647,
      lng: 19.9450
    }
  },
  {
    id: "lisbon",
    title: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1640810223685-c90c84726df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBwb3J0dWdhbCUyMGNvbG9yZnVsfGVufDF8fHx8MTc1OTgzMTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Colorful hills, delicious pastéis de nata, and Atlantic coastline. Affordable sunshine in Western Europe.",
    tip: "Tram 28 offers the best city tour for just €3",
    weather: "Sunny, 24°C",
    icon: Sun,
    avgCost: "€40-60/day",
    popularity: "Very Popular",
    tags: ["Beach", "Food", "Culture"],
    overview: "Lisbon is a sun-soaked city of seven hills, offering colorful streets, delicious cuisine, and stunning ocean views at affordable prices. Famous for its historic trams, beautiful azulejo tiles, and custard tarts (pastéis de nata), Lisbon combines old-world charm with modern energy. The city's proximity to beautiful beaches and its vibrant nightlife in neighborhoods like Bairro Alto make it a perfect destination for budget-conscious travelers.",
    attractions: [
      "Belém Tower - Iconic 16th-century fortification",
      "Jerónimos Monastery - Stunning Manueline architecture",
      "Tram 28 - Historic tram through picturesque neighborhoods",
      "Alfama District - Oldest neighborhood with narrow streets",
      "São Jorge Castle - Moorish castle with panoramic views",
      "LX Factory - Creative hub with shops, cafés, and street art"
    ],
    budgetTips: [
      "Take Tram 28 for a budget city tour (€3 per ride)",
      "Visit museums on Sundays before 2 PM for free entry",
      "Eat pastéis de nata at Pastéis de Belém (€1.20 each)",
      "Buy groceries at local markets for picnics",
      "Walk or use public transport instead of tuk-tuks",
      "Stay in neighborhoods like Intendente or Mouraria for lower prices"
    ],
    bestTimeToVisit: "March-May or September-October for warm weather and fewer crowds",
    accommodation: {
      hostel: "€15-30/night",
      hotel: "€50-90/night",
      airbnb: "€35-70/night"
    },
    transportation: {
      publicTransport: "€1.50 per trip, €6.40 for 24-hour pass",
      taxiUber: "€8-15 for typical city trips"
    },
    food: {
      streetFood: "€4-7",
      budgetRestaurant: "€8-15",
      midRange: "€18-30"
    },
    coordinates: {
      lat: 38.7223,
      lng: -9.1393
    }
  },
  {
    id: "prague",
    title: "Prague, Czech Republic",
    image: "https://images.unsplash.com/photo-1738149559237-06f2dfd2e4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjYXN0bGUlMjBldXJvcGV8ZW58MXx8fHwxNzU5ODYwNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Medieval charm meets affordable prices. Explore castles, bridges, and enjoy world-class beer for less.",
    tip: "Explore the castle grounds for free, skip the interior tour",
    weather: "Partly Cloudy, 18°C",
    icon: Cloud,
    avgCost: "€30-50/day",
    popularity: "Very Popular",
    tags: ["History", "Architecture", "Nightlife"],
    overview: "Prague is a fairy-tale city where medieval charm meets modern affordability. With its stunning castle complex, iconic Charles Bridge, and vibrant Old Town Square, Prague offers world-class sightseeing at Eastern European prices. The city is famous for its beer culture, offering some of the best and cheapest beer in Europe. Budget travelers will love the affordable accommodation, inexpensive public transport, and numerous free attractions.",
    attractions: [
      "Prague Castle - Largest ancient castle complex in the world",
      "Charles Bridge - Historic stone bridge with baroque statues",
      "Old Town Square - Astronomical Clock and colorful buildings",
      "Jewish Quarter - Historic synagogues and cemetery",
      "Petřín Tower - Mini Eiffel Tower with panoramic views",
      "Vyšehrad - Ancient fortress with great views"
    ],
    budgetTips: [
      "Walk across Charles Bridge at sunrise to avoid crowds",
      "Drink local beer at neighborhood pubs (€1-2 per pint)",
      "Use public transport instead of taxis (very affordable)",
      "Eat at traditional Czech pubs for hearty meals under €10",
      "Many churches and castle grounds are free to enter",
      "Book accommodation in neighborhoods like Vinohrady or Žižkov"
    ],
    bestTimeToVisit: "April-May or September-October for mild weather and lower prices",
    accommodation: {
      hostel: "€10-25/night",
      hotel: "€40-80/night",
      airbnb: "€30-60/night"
    },
    transportation: {
      publicTransport: "€1.20 per trip, €4.80 for 24-hour pass",
      taxiUber: "€5-15 for typical city trips"
    },
    food: {
      streetFood: "€3-6",
      budgetRestaurant: "€7-12",
      midRange: "€15-25"
    },
    coordinates: {
      lat: 50.0755,
      lng: 14.4378
    }
  },
  {
    id: "budapest",
    title: "Budapest, Hungary",
    image: "https://images.unsplash.com/photo-1523649943785-3ea395fefd8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRhcGVzdCUyMGh1bmdhcnklMjBwYXJsaWFtZW50fGVufDF8fHx8MTc1OTg2MDYwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Thermal baths, ruin bars, and stunning Danube views. One of Europe's most affordable capital cities.",
    tip: "Thermal baths cost half price after 7 PM",
    weather: "Sunny, 20°C",
    icon: Sun,
    avgCost: "€25-45/day",
    popularity: "Very Popular",
    tags: ["Thermal Baths", "Nightlife", "History"],
    overview: "Budapest offers an incredible blend of stunning architecture, historic thermal baths, and vibrant nightlife at remarkably affordable prices. Divided by the Danube River into Buda and Pest, the city features grand boulevards, impressive parliament buildings, and unique ruin bars. As one of Europe's most budget-friendly capitals, Budapest is perfect for travelers seeking culture, relaxation, and entertainment without the Western European price tag.",
    attractions: [
      "Széchenyi Thermal Bath - Historic outdoor thermal pools",
      "Parliament Building - Stunning Gothic Revival architecture",
      "Fisherman's Bastion - Fairy-tale terraces with city views",
      "Buda Castle - Historic castle complex on Castle Hill",
      "Ruin Bars - Unique bars in abandoned buildings",
      "Great Market Hall - Traditional food and craft market"
    ],
    budgetTips: [
      "Visit thermal baths after 7 PM for 50% discount",
      "Use the 72-hour Budapest Card for free transport and discounts",
      "Eat at 'étkezde' (workers' canteens) for authentic cheap meals",
      "Cross the Danube on free ferries instead of tourist boats",
      "Climb Gellért Hill for free panoramic views",
      "Drink pálinka at local prices in neighborhood bars"
    ],
    bestTimeToVisit: "May-June or September-October for pleasant weather and lower prices",
    accommodation: {
      hostel: "€8-20/night",
      hotel: "€35-70/night",
      airbnb: "€25-55/night"
    },
    transportation: {
      publicTransport: "€1 per trip, €5.50 for 24-hour pass",
      taxiUber: "€5-12 for typical city trips"
    },
    food: {
      streetFood: "€3-5",
      budgetRestaurant: "€6-10",
      midRange: "€12-20"
    },
    coordinates: {
      lat: 47.4979,
      lng: 19.0402
    }
  },
  {
    id: "vilnius",
    title: "Vilnius, Lithuania",
    image: "https://images.unsplash.com/photo-1612769229205-5fc9d18970e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWxuaXVzJTIwTGl0aHVhbmlhJTIwY2F0aGVkcmFsfGVufDF8fHx8MTc1OTg2Mjk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Baroque architecture and bohemian vibes in one of Europe's most underrated capitals. Incredibly budget-friendly.",
    tip: "Explore Užupis, the self-declared artist republic with its own constitution",
    weather: "Partly Cloudy, 15°C",
    icon: Cloud,
    avgCost: "€28-42/day",
    popularity: "Hidden Gem",
    tags: ["Architecture", "Culture", "Budget"],
    overview: "Vilnius is a charming Baltic capital with a UNESCO-listed Old Town, baroque churches, and a thriving alternative art scene. Often overshadowed by its Baltic neighbors, Vilnius offers exceptional value with its incredibly low prices, friendly locals, and unique atmosphere. The bohemian Užupis district, beautiful hill views, and cozy cafes make this city a delightful discovery for budget travelers seeking authenticity.",
    attractions: [
      "Vilnius Old Town - UNESCO World Heritage baroque architecture",
      "Gediminas Castle Tower - Panoramic city views",
      "Užupis - Bohemian artist district with quirky charm",
      "Vilnius Cathedral - Neoclassical landmark on Cathedral Square",
      "Gates of Dawn - Historic city gate with religious shrine",
      "Three Crosses Monument - Hilltop memorial with city views"
    ],
    budgetTips: [
      "Join free walking tours of Old Town and Užupis",
      "Visit museums on Wednesdays for free or reduced admission",
      "Eat cepelinai (potato dumplings) at local restaurants (€4-6)",
      "Walk everywhere - the city center is very compact",
      "Buy groceries at Maxima or Rimi for picnic supplies",
      "Stay in Old Town hostels for best location and value"
    ],
    bestTimeToVisit: "May-September for warm weather and outdoor festivals",
    accommodation: {
      hostel: "€10-18/night",
      hotel: "€35-60/night",
      airbnb: "€25-45/night"
    },
    transportation: {
      publicTransport: "€1 per trip, €5 for 24-hour pass",
      taxiUber: "€5-10 for typical city trips"
    },
    food: {
      streetFood: "€3-5",
      budgetRestaurant: "€6-10",
      midRange: "€12-22"
    },
    coordinates: {
      lat: 54.6872,
      lng: 25.2797
    }
  },
  {
    id: "warsaw",
    title: "Warsaw, Poland",
    image: "https://images.unsplash.com/photo-1635076603029-14409920fb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXJzYXclMjBQb2xhbmQlMjBwYWxhY2V8ZW58MXx8fHwxNzU5ODYzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rebuilt from ruins, Warsaw blends history with modern energy. Affordable prices and resilient spirit.",
    tip: "Free entry to many museums on Thursdays",
    weather: "Sunny, 18°C",
    icon: Sun,
    avgCost: "€30-48/day",
    popularity: "Rising Star",
    tags: ["History", "Culture", "Modern"],
    overview: "Warsaw is a city of remarkable resilience, having risen from WWII devastation to become a vibrant European capital. The meticulously reconstructed Old Town contrasts beautifully with modern skyscrapers, creating a unique urban landscape. With affordable prices, excellent museums, lively nightlife, and delicious Polish cuisine, Warsaw offers an authentic and budget-friendly experience. The city's parks, palaces, and cultural scene provide endless exploration opportunities.",
    attractions: [
      "Old Town Market Square - Beautifully reconstructed historic center",
      "Royal Castle - Former residence of Polish monarchs",
      "Palace of Culture and Science - Soviet-era skyscraper with views",
      "Warsaw Uprising Museum - Interactive WWII history museum",
      "Łazienki Park - Beautiful royal park with Palace on the Water",
      "POLIN Museum - Museum of the History of Polish Jews"
    ],
    budgetTips: [
      "Visit most museums for free on Thursdays",
      "Eat milk bars (bar mleczny) for traditional Polish food (€3-5)",
      "Use public bikes (Veturilo) - first 20 minutes free",
      "Explore Łazienki Park - free entry with peacocks and palaces",
      "Attend free Chopin concerts in summer (Łazienki Park, Sundays)",
      "Stay in Praga district for cheaper accommodation and local vibe"
    ],
    bestTimeToVisit: "May-September for warm weather and outdoor concerts",
    accommodation: {
      hostel: "€10-20/night",
      hotel: "€35-70/night",
      airbnb: "€25-50/night"
    },
    transportation: {
      publicTransport: "€1 per trip, €4.30 for 24-hour pass",
      taxiUber: "€5-12 for typical city trips",
      bikeRental: "Free for first 20 min, €1/hour after"
    },
    food: {
      streetFood: "€3-6",
      budgetRestaurant: "€6-12",
      midRange: "€15-25"
    },
    coordinates: {
      lat: 52.2297,
      lng: 21.0122
    }
  },
  {
    id: "athens",
    title: "Athens, Greece",
    image: "https://images.unsplash.com/photo-1593008894282-e186491fe7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdGhlbnMlMjBHcmVlY2UlMjBhY3JvcG9saXN8ZW58MXx8fHwxNzU5ODYzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ancient history meets modern Mediterranean vibes. Affordable Greek cuisine and year-round sunshine.",
    tip: "Visit the Acropolis early morning or late afternoon to avoid crowds and heat",
    weather: "Sunny, 26°C",
    icon: Sun,
    avgCost: "€35-55/day",
    popularity: "Very Popular",
    tags: ["History", "Culture", "Food"],
    overview: "Athens is where Western civilization began, offering unparalleled ancient history alongside vibrant modern Greek culture. From the iconic Acropolis to bustling street markets, Athens combines archaeological wonders with delicious food, lively neighborhoods, and Mediterranean warmth. Despite its historical significance, Athens remains surprisingly affordable, with cheap accommodation, inexpensive local tavernas, and many free or low-cost attractions.",
    attractions: [
      "Acropolis - Ancient citadel with Parthenon temple",
      "Acropolis Museum - Modern museum with ancient artifacts",
      "Plaka - Historic neighborhood with narrow streets",
      "Ancient Agora - Classical Athenian marketplace ruins",
      "National Archaeological Museum - Extensive ancient Greek collection",
      "Mount Lycabettus - Hill with panoramic city views"
    ],
    budgetTips: [
      "Buy combined ticket for €30 covering all major archaeological sites",
      "Visit archaeological sites for free on first Sunday of month (Nov-Mar)",
      "Eat at local tavernas in neighborhoods like Psiri or Exarchia",
      "Use the metro - fast, clean, and affordable",
      "Climb Lycabettus Hill on foot instead of taking funicular",
      "Stay in neighborhoods like Koukaki or Metaxourgio for value"
    ],
    bestTimeToVisit: "April-May or September-October to avoid summer heat and crowds",
    accommodation: {
      hostel: "€12-25/night",
      hotel: "€40-75/night",
      airbnb: "€30-60/night"
    },
    transportation: {
      publicTransport: "€1.40 per trip, €4.50 for 24-hour pass",
      taxiUber: "€8-15 for typical city trips"
    },
    food: {
      streetFood: "€3-6",
      budgetRestaurant: "€8-14",
      midRange: "€18-28"
    },
    coordinates: {
      lat: 37.9838,
      lng: 23.7275
    }
  },
  {
    id: "bucharest",
    title: "Bucharest, Romania",
    image: "https://images.unsplash.com/photo-1613556145515-5e7790f689c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWNoYXJlc3QlMjBSb21hbmlhJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTg2MzAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Paris of the East with grand boulevards and palaces. One of Europe's most affordable capitals.",
    tip: "Visit the Palace of Parliament - world's second-largest building",
    weather: "Sunny, 22°C",
    icon: Sun,
    avgCost: "€25-40/day",
    popularity: "Hidden Gem",
    tags: ["Architecture", "Culture", "Budget"],
    overview: "Bucharest, once known as 'Little Paris,' is a fascinating mix of Belle Époque elegance, communist-era architecture, and modern energy. The city offers grand boulevards, beautiful parks, impressive palaces, and a thriving cafe culture at some of Europe's lowest prices. With excellent nightlife, delicious Romanian cuisine, and friendly locals, Bucharest is an exciting discovery for budget travelers seeking an off-the-beaten-path European capital.",
    attractions: [
      "Palace of Parliament - Second-largest building in the world",
      "Old Town - Lipscani district with historic churches and bars",
      "Romanian Athenaeum - Stunning concert hall with dome",
      "Village Museum - Open-air museum of traditional Romanian houses",
      "Revolution Square - Historic square from 1989 revolution",
      "Herăstrău Park - Large park with lake and outdoor activities"
    ],
    budgetTips: [
      "Take guided tour of Palace of Parliament (advance booking required)",
      "Eat at 'cantine' (canteens) for traditional meals under €5",
      "Use public transport or walk - very affordable",
      "Enjoy coffee culture at local cafes (€1-2 for espresso)",
      "Visit Cărturești Carusel - beautiful bookstore (free to browse)",
      "Stay near University Square or Romana for central, cheap options"
    ],
    bestTimeToVisit: "May-June or September for pleasant weather and festivals",
    accommodation: {
      hostel: "€8-15/night",
      hotel: "€30-55/night",
      airbnb: "€20-40/night"
    },
    transportation: {
      publicTransport: "€0.50 per trip, €2.60 for 24-hour pass",
      taxiUber: "€4-8 for typical city trips"
    },
    food: {
      streetFood: "€2-4",
      budgetRestaurant: "€5-9",
      midRange: "€12-18"
    },
    coordinates: {
      lat: 44.4268,
      lng: 26.1025
    }
  }
];

// Helper function to get destinations for home page (3 featured destinations)
export const homeDestinations = destinations.filter(d => 
  ['riga', 'krakow', 'lisbon'].includes(d.id)
);

// All destinations are shown on destinations page
export const allDestinations = destinations;
