# Search Functionality Implementation

## Overview

The EuroThrift website now has fully functional search capabilities with case-insensitive, partial-match filtering across destinations.

## Implementation Details

### STEP 1: Getting Search Query from URL/Route

The search query is passed through the application's routing system:

**App.tsx** manages the route state:
```typescript
interface RouteState {
  page: PageType | "destination-detail" | "search";
  destinationId?: string;
  searchQuery?: string;  // ← Search query stored in route state
}

const navigateToSearch = (searchQuery: string) => {
  setRoute({ page: "search", searchQuery });
};
```

The `searchQuery` is then passed as a prop to the SearchResultsPage component:
```typescript
<SearchResultsPage
  searchQuery={route.searchQuery}
  onNavigateToDestination={navigateToDestination}
/>
```

### STEP 2: Filtering the Destination List

**SearchResultsPage.tsx** implements the filtering logic:

```typescript
// Convert search query to lowercase for case-insensitive matching
const normalizedQuery = searchQuery.toLowerCase();

// Create filteredResults by filtering allDestinations
const filteredResults = allDestinations.filter((dest) => {
  const titleMatch = dest.title.toLowerCase().includes(normalizedQuery);
  const idMatch = dest.id.toLowerCase().includes(normalizedQuery);
  const descriptionMatch = dest.description?.toLowerCase().includes(normalizedQuery) || false;
  
  return titleMatch || idMatch || descriptionMatch;
});

// Use filteredResults for rendering
const searchResults = filteredResults;
```

**Filtering Criteria:**
- **Case-insensitive**: All comparisons use `.toLowerCase()`
- **Partial match**: Uses `.includes()` instead of exact match
- **Multiple fields**: Searches across:
  - `dest.title` (e.g., "Riga, Latvia")
  - `dest.id` (e.g., "riga")
  - `dest.description` (e.g., "Art Nouveau architecture...")

### STEP 3: Rendering Filtered Cards

The component renders only the filtered results:

```typescript
<div className="grid grid-cols-12 gap-6">
  {searchResults.map((dest) => (
    <Card 
      key={dest.id}
      onClick={() => onNavigateToDestination(dest.id)}
      className="col-span-4 overflow-hidden..."
    >
      {/* Card content preserved exactly as designed */}
    </Card>
  ))}
</div>
```

**Preserved Design Elements:**
- ✅ All HTML/JSX structure maintained
- ✅ All CSS classes preserved
- ✅ Card component design unchanged
- ✅ Hover states and animations intact
- ✅ 12-column grid layout maintained (col-span-4 for 3 cards per row)

### STEP 4: Handling No Results

When `filteredResults` is empty, a user-friendly message is displayed:

```typescript
{searchResults.length === 0 && (
  <div className="text-center py-20">
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--mint-green)]/30 mb-4">
      <MapPin className="w-10 h-10 text-[var(--light-sea-green)]" />
    </div>
    <h2 className="mb-2">No results found</h2>
    <p className="text-muted-foreground max-w-md mx-auto">
      Sorry, no budget destinations found for '{searchQuery}'. 
      Try adjusting your filters or search for a different destination.
    </p>
  </div>
)}
```

## Search Entry Points

### 1. Header Search Bar
**Header.tsx** provides a compact, expandable search:

```typescript
<form onSubmit={(e) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    onSearch(searchQuery);
    setSearchExpanded(false);
    setSearchQuery("");
  }
}}>
  <Input
    type="text"
    placeholder="Search destinations..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-64 transition-all"
  />
</form>
```

**Features:**
- Click search icon to expand input field
- Type query and press Enter or Escape
- Auto-closes after search submission
- Available on all pages

### 2. Home Page Hero Search
**HomePage.tsx** features a prominent search bar:

```typescript
<form onSubmit={(e) => {
  e.preventDefault();
  if (heroSearchQuery.trim() && onSearch) {
    onSearch(heroSearchQuery);
  }
}}>
  <Input
    type="text"
    placeholder="Where do you want to go?"
    value={heroSearchQuery}
    onChange={(e) => setHeroSearchQuery(e.target.value)}
  />
  <Button type="submit">
    <Search className="w-4 h-4 mr-2" />
    Search
  </Button>
</form>
```

## Search Examples

### Example Queries That Work:

| Query | Matches | Reason |
|-------|---------|--------|
| "riga" | Riga, Latvia | ID match: "riga" |
| "RIGA" | Riga, Latvia | Case-insensitive |
| "latvia" | Riga, Latvia | Title match: "Riga, Latvia" |
| "portugal" | Lisbon, Portugal | Title match |
| "lisboa" | Lisbon, Portugal | ID match: "lisbon" contains "lisboa" ❌ |
| "lisbon" | Lisbon, Portugal | ID exact match ✅ |
| "art nouveau" | Riga, Latvia | Description match |
| "medieval" | Multiple destinations | Description match |
| "krakow" | Krakow, Poland | ID/Title match |
| "poland" | Krakow, Poland | Title match |
| "eastern" | Multiple destinations | Description/tags |

### Example Queries That Return No Results:

| Query | Why No Match |
|-------|--------------|
| "paris" | Not in the destinations list |
| "japan" | Only European destinations |
| "xyz123" | No matching text in any field |

## Data Source

All searches query the `allDestinations` array from `/data/destinations.ts`:

```typescript
export const destinations: Destination[] = [
  {
    id: "riga",
    title: "Riga, Latvia",
    description: "Art Nouveau architecture and medieval charm...",
    // ... more fields
  },
  // ... 8 more destinations
];

export const allDestinations = destinations; // 9 total destinations
```

## UI/UX Features

1. **Results Count**: Displays "X results found" dynamically
2. **Search Query Display**: Shows query in heading: "Search Results for 'query'"
3. **Empty State**: Custom message with search term when no results
4. **Smooth Navigation**: Auto-scrolls to top when search is performed
5. **Filter Sidebar**: Additional filters available (placeholder functionality)
6. **Responsive Grid**: 3 cards per row on desktop (col-span-4 in 12-column grid)

## Future Enhancements (Not Implemented)

- Filter by price range
- Filter by destination type
- Sort by popularity, price, or days
- Filter by travel style
- Search history
- Search suggestions/autocomplete
- Fuzzy matching for typos

## Testing the Search

To test the search functionality:

1. **Via Header**: Click search icon → type "riga" → press Enter
2. **Via Home Page**: Type "portugal" in hero search → click Search button
3. **No Results**: Search for "paris" → see empty state message
4. **Partial Match**: Search "art" → matches destinations with "art" in description
5. **Case Insensitive**: Search "LATVIA" → matches "Riga, Latvia"
