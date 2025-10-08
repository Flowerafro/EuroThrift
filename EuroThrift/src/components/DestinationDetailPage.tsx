import { ArrowLeft, MapPin, Euro, Calendar, Bed, Utensils, Train, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { destinations } from "../data/destinations";

interface DestinationDetailPageProps {
  destinationId: string;
  onBack: () => void;
}

export function DestinationDetailPage({ destinationId, onBack }: DestinationDetailPageProps) {
  const destination = destinations.find(d => d.id === destinationId);

  if (!destination) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Destinations
        </Button>
        <div className="text-center py-20">
          <h2 className="mb-4">Destination Not Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the destination you're looking for.
          </p>
        </div>
      </div>
    );
  }

  const WeatherIcon = destination.icon;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <Button
              onClick={onBack}
              variant="secondary"
              className="mb-6 bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-white">{destination.title}</h1>
              <Badge className="bg-[var(--orange-peel)] text-white border-0">
                {destination.popularity}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {destination.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-white/90 backdrop-blur-sm text-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Main Info */}
          <div className="col-span-8 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="mb-4 text-3xl">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {destination.overview}
              </p>
            </section>

            {/* Top Attractions */}
            {destination.attractions && (
              <section>
                <h2 className="mb-4 text-3xl">Top Attractions</h2>
                <div className="grid grid-cols-1 gap-3">
                  {destination.attractions.map((attraction, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[var(--mint-green)]/20 border border-[var(--light-sea-green)]/10"
                    >
                      <MapPin className="w-5 h-5 text-[var(--light-sea-green)] flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{attraction}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Budget Tips */}
            {destination.budgetTips && (
              <section>
                <h2 className="mb-4 text-3xl">Money-Saving Tips</h2>
                <div className="grid grid-cols-1 gap-3">
                  {destination.budgetTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[var(--hunyadi-yellow)]/10 border border-[var(--orange-peel)]/10"
                    >
                      <Info className="w-5 h-5 text-[var(--orange-peel)] flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Destination Map & Local Hotspots */}
            <section>
              <h2 className="mb-4 text-3xl">Destination Map & Local Hotspots</h2>
              <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white">
                <div className="relative w-full h-96 bg-gradient-to-br from-[var(--mint-green)]/20 via-[var(--light-sea-green)]/5 to-[var(--hunyadi-yellow)]/10">
                  {/* Map Placeholder Wireframe */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-4">
                        <MapPin className="w-10 h-10 text-[var(--light-sea-green)]" />
                      </div>
                      <h3 className="mb-2">Google Maps - {destination.title}</h3>
                      <p className="text-muted-foreground max-w-md mb-4">
                        Interactive map showing {destination.title} and surrounding areas
                      </p>
                      {destination.coordinates && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-[var(--orange-peel)]" />
                          <span>
                            {destination.coordinates.lat.toFixed(4)}°, {destination.coordinates.lng.toFixed(4)}°
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative map grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-[var(--light-sea-green)]" />
                      ))}
                    </div>
                  </div>

                  {/* Decorative location markers */}
                  <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-[var(--orange-peel)] rounded-full shadow-lg flex items-center justify-center opacity-60">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-[var(--light-sea-green)] rounded-full shadow-md flex items-center justify-center opacity-50">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-[var(--light-sea-green)] rounded-full shadow-md flex items-center justify-center opacity-50">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[var(--mint-green)]/20 rounded-xl border border-[var(--light-sea-green)]/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">💡 Map Integration:</strong> This section displays an interactive Google Maps embed centered on {destination.title}, showing key attractions, public transport stations, and recommended neighborhoods. Visitors can zoom, pan, and click markers to explore the destination.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Quick Facts */}
            <Card className="rounded-2xl border-border overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-[var(--mint-green)] to-[var(--light-sea-green)]/20 p-6">
                <h3 className="text-[var(--light-sea-green)]">Quick Facts</h3>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--mint-green)]/30 flex items-center justify-center">
                    <Euro className="w-5 h-5 text-[var(--light-sea-green)]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Daily Budget</p>
                    <p>{destination.avgCost}</p>
                  </div>
                </div>

                {destination.weather && WeatherIcon && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--mint-green)]/30 flex items-center justify-center">
                      <WeatherIcon className="w-5 h-5 text-[var(--light-sea-green)]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Current Weather</p>
                      <p>{destination.weather}</p>
                    </div>
                  </div>
                )}

                {destination.bestTimeToVisit && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--mint-green)]/30 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[var(--light-sea-green)]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Best Time</p>
                      <p className="text-sm">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Accommodation */}
            {destination.accommodation && (
              <Card className="rounded-2xl border-border">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center gap-2 text-[var(--light-sea-green)]">
                    <Bed className="w-5 h-5" />
                    <h3>Accommodation</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-2 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Hostel</span>
                    <span className="text-sm">{destination.accommodation.hostel}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Hotel</span>
                    <span className="text-sm">{destination.accommodation.hotel}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Airbnb</span>
                    <span className="text-sm">{destination.accommodation.airbnb}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Food Costs */}
            {destination.food && (
              <Card className="rounded-2xl border-border">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center gap-2 text-[var(--light-sea-green)]">
                    <Utensils className="w-5 h-5" />
                    <h3>Food & Dining</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-2 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Street Food</span>
                    <span className="text-sm">{destination.food.streetFood}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Budget Meal</span>
                    <span className="text-sm">{destination.food.budgetRestaurant}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Mid-Range</span>
                    <span className="text-sm">{destination.food.midRange}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Transportation */}
            {destination.transportation && (
              <Card className="rounded-2xl border-border">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center gap-2 text-[var(--light-sea-green)]">
                    <Train className="w-5 h-5" />
                    <h3>Transportation</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-2 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Public Transit</span>
                    <span className="text-sm">{destination.transportation.publicTransport}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Taxi/Uber</span>
                    <span className="text-sm">{destination.transportation.taxiUber}</span>
                  </div>
                  {destination.transportation.bikeRental && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Bike Rental</span>
                      <span className="text-sm">{destination.transportation.bikeRental}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* CTA Button */}
            <Button className="w-full bg-[var(--orange-peel)] hover:bg-[var(--orange-peel)]/90 text-white rounded-xl py-6">
              Book Your Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
