import { Plane, Hotel, Percent, Clock, Tag, Sparkles, TrendingDown } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const deals = [
  {
    type: "Package",
    icon: Tag,
    title: "Weekend in Prague – from €120",
    description: "2 nights in a cozy hostel + free walking tour + pub crawl ticket. Experience Prague's medieval charm and vibrant nightlife on a student budget.",
    originalPrice: "€220",
    salePrice: "€120",
    discount: "45% OFF",
    validUntil: "Valid until Oct 31, 2025",
    tags: ["Student Saver Week", "All-Inclusive"],
  },
  {
    type: "Package",
    icon: Tag,
    title: "Cultural getaway in Athens – from €150",
    description: "3 nights accommodation + Acropolis Museum pass + traditional Greek dinner. Discover ancient history and Mediterranean culture without breaking the bank.",
    originalPrice: "€280",
    salePrice: "€150",
    discount: "46% OFF",
    validUntil: "Valid until Oct 31, 2025",
    tags: ["Student Saver Week", "Culture & History"],
  },
];

const typeColors = {
  Flight: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  Accommodation: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  Package: "bg-[var(--orange-peel)]/10 text-[var(--orange-peel)] border-[var(--orange-peel)]/20",
};

export function DealsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--orange-peel)] to-[var(--hunyadi-yellow)] flex items-center justify-center">
            <Percent className="w-6 h-6 text-white" />
          </div>
          <h1>Special Deals & Offers</h1>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Save even more on your European adventures with our exclusive deals. 
          Limited-time offers on flights, accommodations, and all-inclusive packages.
        </p>
      </div>

      {/* Campaign Banner */}
      <div className="mb-8 md:mb-12 relative overflow-hidden rounded-2xl md:rounded-3xl bg-[var(--light-sea-green)] shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--light-sea-green)] via-[#FFCC4D] to-[var(--orange-peel)] opacity-90" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative px-6 md:px-12 py-10 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white text-sm">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-5xl text-white mb-4">
                Student Saver Week – Discover Europe on a student budget.
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl">
                Exclusive deals for students. Unbeatable savings on select European destinations. Book now and explore more for less!
              </p>
              <Button className="bg-white text-[var(--light-sea-green)] hover:bg-white/90 rounded-xl px-6 md:px-8 py-4 md:py-6 shadow-xl">
                <TrendingDown className="w-5 h-5 mr-2" />
                Browse All Deals
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl text-white mb-2">50%</div>
                  <div className="text-white text-sm">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Grid - Limited to 3 Cards */}
      <div className="grid grid-cols-12 gap-6">
        {deals.slice(0, 3).map((deal, index) => {
          const IconComponent = deal.icon;
          return (
            <Card key={index} className="col-span-4 hover:shadow-xl transition-all border border-border rounded-2xl">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant="outline"
                    className={`${typeColors[deal.type as keyof typeof typeColors]}`}
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {deal.type}
                  </Badge>
                  <Badge className="bg-[var(--orange-peel)] text-white">
                    {deal.discount}
                  </Badge>
                </div>
                <h3 className="mb-2">{deal.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {deal.description}
                </p>
              </CardHeader>

              <CardContent className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {deal.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-[var(--light-sea-green)]/30 text-[var(--light-sea-green)]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-muted-foreground line-through text-sm">
                    {deal.originalPrice}
                  </span>
                  <span className="text-[var(--light-sea-green)]">
                    {deal.salePrice}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{deal.validUntil}</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-lg"
                >
                  Grab This Deal
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 p-8 bg-gradient-to-br from-[var(--mint-green)] to-[var(--mint-green)]/30 rounded-2xl border border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Never miss a deal</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and get exclusive deals delivered straight to your inbox every week.
          </p>
          <Button className="bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white rounded-lg px-8">
            Subscribe Now
          </Button>
        </div>
      </div>
    </div>
  );
}
