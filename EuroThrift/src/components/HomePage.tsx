import { Search, Calculator, MapPin, ArrowRight, Sparkles, Euro, TrendingDown, Info, Tag, Play } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { homeDestinations } from "../data/destinations";
import { allDestinations } from "../data/destinations";

interface HomePageProps {
  onNavigateToDestination: (destinationId: string) => void;
  onSearch?: (query: string) => void;
  onNavigateToPage?: (page: string) => void;
}

interface DestinationRecommendation {
  id: string;
  title: string;
  maxDays: number;
  avgCostMin: number;
  avgCostMax: number;
}

export function HomePage({ onNavigateToDestination, onSearch, onNavigateToPage }: HomePageProps) {
  const [budget, setBudget] = useState<string>("");
  const [tripDuration, setTripDuration] = useState<number[]>([7]);
  const [travelStyle, setTravelStyle] = useState<string>("");
  const [recommendations, setRecommendations] = useState<DestinationRecommendation[] | null>(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState("");

  const calculateRecommendations = () => {
    if (!budget || !travelStyle) return;

    const totalBudget = parseInt(budget);
    const days = tripDuration[0];

    // Define multipliers based on travel style
    const styleMultipliers = {
      backpacker: 0.7,  // Use 70% of average cost (budget end)
      midrange: 0.85,    // Use 85% of average cost
      savvy: 1.0         // Use full average cost range
    };

    const multiplier = styleMultipliers[travelStyle as keyof typeof styleMultipliers] || 0.85;

    // Calculate recommendations for all destinations
    const destinationResults: DestinationRecommendation[] = allDestinations.map(dest => {
      // Parse avgCost (format: "€25-40/day")
      const costMatch = dest.avgCost.match(/€(\d+)-(\d+)/);
      const minCost = costMatch ? parseInt(costMatch[1]) : 30;
      const maxCost = costMatch ? parseInt(costMatch[2]) : 50;
      
      // Calculate effective daily cost based on travel style
      const effectiveDailyCost = minCost + ((maxCost - minCost) * multiplier);
      
      // Calculate max days achievable
      const maxDays = Math.floor(totalBudget / effectiveDailyCost);

      return {
        id: dest.id,
        title: dest.title,
        maxDays,
        avgCostMin: minCost,
        avgCostMax: maxCost
      };
    });

    // Sort by max days (descending)
    destinationResults.sort((a, b) => b.maxDays - a.maxDays);

    setRecommendations(destinationResults);
  };

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden min-h-[500px] md:min-h-[700px] flex items-center">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Placeholder for looping travel video from Pixabay/Pexels */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
            <div className="text-center hidden md:block">
              <Play className="w-16 h-16 opacity-20 mx-auto mb-2" />
              <p className="text-xs opacity-30">Video Background Placeholder (Pixabay/Pexels)</p>
            </div>
          </div>
        </div>

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 md:mb-6 text-white text-3xl md:text-5xl lg:text-6xl">
              Experience Europe — the thrifty way
            </h1>
            <p className="text-white/90 mb-6 md:mb-8 text-base md:text-xl px-4">
              Discover budget-friendly destinations, hidden gems, and money-saving tips for your European adventure.
            </p>
            
            {/* Search Bar with High Contrast */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (heroSearchQuery.trim() && onSearch) {
                  onSearch(heroSearchQuery);
                }
              }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center max-w-2xl mx-auto"
            >
              <Input
                type="text"
                placeholder="Where do you want to go?"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-2 focus-visible:ring-[var(--hunyadi-yellow)] text-base md:text-lg h-12 md:h-14 bg-white dark:bg-slate-700"
              />
              <Button 
                type="submit"
                className="bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-xl px-6 md:px-8 h-12 md:h-14 text-base md:text-lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Campaign Banner - Student Saver Week */}
      <section className="bg-background py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div 
            onClick={() => onNavigateToPage?.("deals")}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--orange-peel)] via-[var(--hunyadi-yellow)] to-[var(--orange-peel)] p-1 cursor-pointer hover:shadow-2xl transition-all group"
          >
            <div className="bg-background dark:bg-card rounded-xl p-4 md:p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[var(--hunyadi-yellow)]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 bg-[var(--light-sea-green)]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <Badge className="bg-[var(--hunyadi-yellow)] text-slate-900 border-0 px-3 py-1 mb-3 inline-flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Limited Time Offer
                  </Badge>
                  <h2 className="mb-2 text-xl md:text-3xl">Student Saver Week – Discover Europe on a student budget.</h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Exclusive deals and discounts for students. Save big on your next European adventure!
                  </p>
                </div>
                
                <Button className="bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-xl px-6 md:px-8 h-11 md:h-12 group-hover:scale-105 transition-transform whitespace-nowrap">
                  <Tag className="w-5 h-5 mr-2" />
                  View Deals
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Budget Destinations */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="mb-2">Top budget destinations this season</h2>
          <p className="text-muted-foreground">
            Handpicked destinations where your money goes further
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {homeDestinations.map((dest) => {
            const WeatherIcon = dest.icon;
            return (
              <Card 
                key={dest.id} 
                onClick={() => onNavigateToDestination(dest.id)}
                className="overflow-hidden hover:shadow-xl transition-all border border-border rounded-2xl group cursor-pointer hover:border-[var(--light-sea-green)]/50"
              >
                <CardHeader className="p-0 overflow-hidden">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="mb-3">{dest.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dest.tip}
                  </p>
                  {WeatherIcon && dest.weather && (
                    <div className="flex items-center gap-2 text-sm text-[var(--light-sea-green)]">
                      <WeatherIcon className="w-4 h-4" />
                      <span>{dest.weather}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Budget Calculator */}
      <section className="bg-gradient-to-br from-[var(--orange-peel)]/10 to-[var(--hunyadi-yellow)]/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--orange-peel)] text-white mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="mb-2">Budget Calculator</h2>
              <p className="text-muted-foreground">
                Plan your perfect European adventure within your budget
              </p>
            </div>

            {/* Calculator Inputs Card */}
            <Card className="rounded-2xl shadow-lg border-border bg-white">
              <CardContent className="p-8">
                <div className="grid grid-cols-12 gap-6">
                  {/* Total Budget Input */}
                  <div className="col-span-12">
                    <Label htmlFor="budget">Total Budget (€)</Label>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="1000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Trip Duration Slider */}
                  <div className="col-span-12">
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="duration">Trip Duration (Days)</Label>
                      <span className="text-sm px-3 py-1 bg-[var(--mint-green)]/30 rounded-lg text-[var(--light-sea-green)]">
                        {tripDuration[0]} {tripDuration[0] === 1 ? 'day' : 'days'}
                      </span>
                    </div>
                    <Slider
                      id="duration"
                      value={tripDuration}
                      onValueChange={setTripDuration}
                      min={1}
                      max={30}
                      step={1}
                      className="mt-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>1 day</span>
                      <span>30 days</span>
                    </div>
                  </div>

                  {/* Travel Style Dropdown */}
                  <div className="col-span-12">
                    <Label htmlFor="style">Travel Style</Label>
                    <Select value={travelStyle} onValueChange={setTravelStyle}>
                      <SelectTrigger id="style" className="mt-2">
                        <SelectValue placeholder="Select your travel style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="backpacker">
                          <div className="flex flex-col items-start py-1">
                            <span>🎒 Backpacker</span>
                            <span className="text-xs text-muted-foreground">Hostels, street food, public transport</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="midrange">
                          <div className="flex flex-col items-start py-1">
                            <span>🧳 Mid-Range</span>
                            <span className="text-xs text-muted-foreground">Budget hotels, local restaurants, mix of transport</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="savvy">
                          <div className="flex flex-col items-start py-1">
                            <span>✨ Savvy</span>
                            <span className="text-xs text-muted-foreground">Smart choices, quality experiences on budget</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Generate Button */}
                  <div className="col-span-12 mt-2">
                    <Button
                      onClick={calculateRecommendations}
                      disabled={!budget || !travelStyle}
                      className="w-full bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-lg h-12"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Itinerary
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Display Section */}
            {recommendations && recommendations.length > 0 && (
              <div className="mt-8 space-y-6">
                {/* Heading */}
                <div className="text-center">
                  <h2 className="mb-2">Your Recommended Budget Trip</h2>
                  <p className="text-muted-foreground">
                    Based on €{budget} budget for {tripDuration[0]} {tripDuration[0] === 1 ? 'day' : 'days'}
                  </p>
                </div>

                {/* Best Match Card */}
                <Card className="rounded-2xl shadow-xl border-2 border-[var(--light-sea-green)] bg-gradient-to-br from-white to-[var(--mint-green)]/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--orange-peel)]/10 rounded-bl-full" />
                  <CardContent className="p-8 relative">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--orange-peel)]/20 rounded-full mb-3">
                          <Sparkles className="w-4 h-4 text-[var(--orange-peel)]" />
                          <span className="text-sm text-[var(--orange-peel)]">Best Match</span>
                        </div>
                        <h2 className="mb-2">{recommendations[0].title}</h2>
                        <p className="text-muted-foreground">
                          Perfect destination for your budget and travel style
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-white rounded-xl border border-border">
                        <p className="text-sm text-muted-foreground mb-1">Max Days Achievable</p>
                        <p className="text-[var(--light-sea-green)]">
                          {recommendations[0].maxDays} {recommendations[0].maxDays === 1 ? 'day' : 'days'}
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-border">
                        <p className="text-sm text-muted-foreground mb-1">Daily Budget Range</p>
                        <p className="text-[var(--light-sea-green)]">
                          €{recommendations[0].avgCostMin}-{recommendations[0].avgCostMax}
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={() => onNavigateToDestination(recommendations[0].id)}
                      className="w-full bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-lg h-12"
                    >
                      View Detailed Itinerary
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Top 3 Budget Destinations */}
                {recommendations.length > 1 && (
                  <div>
                    <h3 className="mb-4 text-center">Other Great Options</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {recommendations.slice(1, 4).map((dest, idx) => (
                        <Card
                          key={dest.id}
                          className="rounded-xl border-border hover:shadow-lg transition-all cursor-pointer group"
                          onClick={() => onNavigateToDestination(dest.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 rounded-full bg-[var(--mint-green)] flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-[var(--light-sea-green)]" />
                              </div>
                              <span className="text-xs px-2 py-1 bg-[var(--hunyadi-yellow)]/20 text-[var(--orange-peel)] rounded-full">
                                #{idx + 2}
                              </span>
                            </div>
                            
                            <h4 className="mb-2">{dest.title}</h4>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Max Days:</span>
                                <span className="text-[var(--light-sea-green)]">
                                  {dest.maxDays} {dest.maxDays === 1 ? 'day' : 'days'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Daily Cost:</span>
                                <span className="text-[var(--light-sea-green)]">
                                  €{dest.avgCostMin}-{dest.avgCostMax}
                                </span>
                              </div>
                            </div>

                            <Button
                              variant="outline"
                              className="w-full mt-4 rounded-lg border-[var(--light-sea-green)] text-[var(--light-sea-green)] hover:bg-[var(--mint-green)] group-hover:border-[var(--light-sea-green)] transition-all"
                              onClick={(e) => {
                                e.stopPropagation();
                                onNavigateToDestination(dest.id);
                              }}
                            >
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
