# EuroThrift Routing Guide

## Available Routes

The EuroThrift wireframe uses client-side routing to navigate between different pages. Here are all available routes:

### Main Pages

1. **Home** (`/`)
   - Hero section with search functionality
   - Top 3 budget destinations (Riga, Krakow, Lisbon)
   - Interactive Budget Calculator with destination recommendations

2. **Destinations** (`/destinations`)
   - Grid of 9 Eastern European and Mediterranean destinations
   - Clickable destination cards (entire card is interactive)
   - Each card displays: image, title, description, tags, avg cost, and popularity

3. **Special Deals** (`/deals`)
   - Prominent campaign banner: "Thrift Deal: 50% off!"
   - Limited to 3 featured deal cards
   - Newsletter subscription CTA

4. **Contact** (`/contact`)
   - Contact form
   - Footer with social media icons

### Dynamic Routes

5. **Destination Detail** (`/destinations/:id`)
   - Detailed destination information
   - Hero image with destination name
   - Sections: Overview, Top Attractions, Money-Saving Tips, Map & Local Hotspots
   - Sidebar with Quick Facts, Accommodation, Food, and Transportation costs
   - All h2 headings sized at text-3xl for prominence

6. **Search Results** (`/search?query=...`)
   - Two-column layout
   - Left sidebar: Filters & sorting options (price range, destination type, travel style)
   - Right column: 9 destination cards in a grid
   - Shows "X results found" based on search query
   - Clickable destination cards (entire card is interactive)

## Navigation Methods

### Header Navigation
- Logo click → Home
- Navigation menu: Home, Destinations, Deals, Contact
- Search icon → Expandable search input → Submit navigates to Search Results

### Search Functionality
- **Home Page Hero Search**: Main search bar navigates to Search Results page
- **Header Search**: Compact expandable search in header
- Both search inputs submit to `/search` route with query parameter

### Card Navigation
- **All destination cards are fully clickable** on:
  - Home Page (3 featured destinations)
  - Destinations Page (9 destinations)
  - Search Results Page (9 destinations)
- Click anywhere on a card → Navigate to Destination Detail page
- No separate "View Details" buttons (removed for better UX)

### Budget Calculator Navigation
- Best Match destination → "View Detailed Itinerary" button → Destination Detail
- Top 3 recommendations → Click card → Destination Detail

## Route State Management

Routes are managed in `App.tsx` using React state:

```typescript
interface RouteState {
  page: "home" | "destinations" | "deals" | "contact" | "destination-detail" | "search";
  destinationId?: string;
  searchQuery?: string;
}
```

### Navigation Functions
- `navigateToPage(page)` - Navigate to main pages
- `navigateToDestination(destinationId)` - Navigate to destination detail
- `navigateToSearch(searchQuery)` - Navigate to search results
- `navigateBack()` - Return to destinations page

## Component Props

### HomePage
```typescript
interface HomePageProps {
  onNavigateToDestination: (destinationId: string) => void;
  onSearch?: (query: string) => void;
}
```

### DestinationsPage
```typescript
interface DestinationsPageProps {
  onNavigateToDestination: (destinationId: string) => void;
}
```

### SearchResultsPage
```typescript
interface SearchResultsPageProps {
  searchQuery?: string;
  onNavigateToDestination: (destinationId: string) => void;
}
```

### DestinationDetailPage
```typescript
interface DestinationDetailPageProps {
  destinationId: string;
  onBack: () => void;
}
```

## Header Active State

The header highlights the current section:
- Home page → "Home" active
- Destinations page → "Destinations" active
- Deals page → "Deals" active
- Contact page → "Contact" active
- Destination Detail → "Destinations" active (since it's a child route)
- Search Results → "Destinations" active (since it shows destinations)
