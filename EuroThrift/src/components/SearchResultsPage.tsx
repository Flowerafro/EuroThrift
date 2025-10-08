import { SlidersHorizontal, Euro, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { useState } from "react";
import { allDestinations } from "../data/destinations";

interface SearchResultsPageProps {
  searchQuery?: string;
  onNavigateToDestination: (destinationId: string) => void;
}

export function SearchResultsPage({ searchQuery = "Eastern Europe", onNavigateToDestination }: SearchResultsPageProps) {
  const [priceRange, setPriceRange] = useState<number[]>([50]);
  const [sortBy, setSortBy] = useState<string>("");

  // STEP 2: Filter the destination list based on the search query
  // Convert search query to lowercase for case-insensitive matching
  const normalizedQuery = searchQuery.toLowerCase();
  
  // Create filteredResults by filtering allDestinations
  // Include destinations where the title, id, or description includes the search query
  const filteredResults = allDestinations.filter((dest) => {
    const titleMatch = dest.title.toLowerCase().includes(normalizedQuery);
    const idMatch = dest.id.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = dest.description?.toLowerCase().includes(normalizedQuery) || false;
    
    return titleMatch || idMatch || descriptionMatch;
  });

  // Use filteredResults instead of hardcoded slice
  const searchResults = filteredResults;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2">Search Results for '{searchQuery}'</h1>
        <p className="text-muted-foreground">
          {searchResults.length} results found
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column - Filters Sidebar */}
        <aside className="col-span-3">
          <Card className="rounded-2xl border-border sticky top-24">
            <CardHeader className="p-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-[var(--light-sea-green)]" />
                <h3>Filters & Sort</h3>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 space-y-6">
              {/* Price Range Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label>Price Range (€/day)</Label>
                  <span className="text-sm px-2 py-1 bg-[var(--mint-green)]/30 rounded text-[var(--light-sea-green)]">
                    €{priceRange[0]}
                  </span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={10}
                  max={100}
                  step={5}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>€10</span>
                  <span>€100</span>
                </div>
              </div>

              {/* Destination Type Filter */}
              <div>
                <Label htmlFor="destination-type">Destination Type</Label>
                <Select>
                  <SelectTrigger id="destination-type" className="mt-2">
                    <SelectValue placeholder="All destinations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                    <SelectItem value="eastern">Eastern Europe</SelectItem>
                    <SelectItem value="western">Western Europe</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="baltic">Baltic States</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div>
                <Label htmlFor="sort-by">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort-by" className="mt-2">
                    <SelectValue placeholder="Select sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="max-days">Max Days Achievable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Travel Style Filter */}
              <div>
                <Label htmlFor="travel-style">Travel Style</Label>
                <Select>
                  <SelectTrigger id="travel-style" className="mt-2">
                    <SelectValue placeholder="Any style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Styles</SelectItem>
                    <SelectItem value="backpacker">Backpacker</SelectItem>
                    <SelectItem value="budget">Budget Traveler</SelectItem>
                    <SelectItem value="comfort">Comfortable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Filters */}
              <button className="w-full text-sm text-[var(--light-sea-green)] hover:underline mt-4">
                Reset All Filters
              </button>
            </CardContent>
          </Card>
        </aside>

        {/* Right Column - Search Results Grid */}
        <div className="col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {searchResults.map((dest) => (
              <Card 
                key={dest.id}
                onClick={() => onNavigateToDestination(dest.id)}
                className="col-span-4 overflow-hidden hover:shadow-xl transition-all border border-border rounded-2xl group cursor-pointer hover:border-[var(--light-sea-green)]/50"
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
                      {dest.popularity}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="mb-3">{dest.title}</h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.tags.slice(0, 2).map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-[var(--light-sea-green)]/30 text-[var(--light-sea-green)]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Euro className="w-4 h-4" />
                      <span>{dest.avgCost}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Europe</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State (shown when no results) */}
          {searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--mint-green)]/30 mb-4">
                <MapPin className="w-10 h-10 text-[var(--light-sea-green)]" />
              </div>
              <h2 className="mb-2">No results found</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Sorry, no budget destinations found for '{searchQuery}'. Try adjusting your filters or search for a different destination.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
