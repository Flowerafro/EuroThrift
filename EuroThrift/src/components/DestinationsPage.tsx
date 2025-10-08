import { MapPin, Euro } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { allDestinations } from "../data/destinations";

interface DestinationsPageProps {
  onNavigateToDestination: (destinationId: string) => void;
}

export function DestinationsPage({ onNavigateToDestination }: DestinationsPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4">Budget-Friendly Destinations</h1>
        <p className="text-muted-foreground max-w-3xl">
          Explore our handpicked collection of European destinations where your money goes further. 
          Each location offers unique experiences without breaking the bank.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-12 gap-6">
        {allDestinations.map((dest) => (
          <Card 
            key={dest.id} 
            onClick={() => onNavigateToDestination(dest.id)}
            className="col-span-4 overflow-hidden hover:shadow-xl transition-all border border-border rounded-2xl group cursor-pointer hover:border-[var(--light-sea-green)]/50"
          >
            <CardHeader className="p-0 relative overflow-hidden">
              <ImageWithFallback
                src={dest.image}
                alt={dest.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
                  {dest.popularity}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3>{dest.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {dest.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {dest.tags.map((tag, idx) => (
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
    </div>
  );
}
