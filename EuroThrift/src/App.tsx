import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { DestinationsPage } from "./components/DestinationsPage";
import { DealsPage } from "./components/DealsPage";
import { ContactPage } from "./components/ContactPage";
import { DestinationDetailPage } from "./components/DestinationDetailPage";
import { SearchResultsPage } from "./components/SearchResultsPage";

type PageType = "home" | "destinations" | "deals" | "contact";

interface RouteState {
  page: PageType | "destination-detail" | "search";
  destinationId?: string;
  searchQuery?: string;
}

export default function App() {
  const [route, setRoute] = useState<RouteState>({ page: "home" });
  const [darkMode, setDarkMode] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  // Handle dark mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateToPage = (page: PageType) => {
    setRoute({ page });
  };

  const navigateToDestination = (destinationId: string) => {
    setRoute({ page: "destination-detail", destinationId });
  };

  const navigateToSearch = (searchQuery: string) => {
    setRoute({ page: "search", searchQuery });
  };

  const navigateBack = () => {
    setRoute({ page: "destinations" });
  };

  const renderPage = () => {
    switch (route.page) {
      case "home":
        return (
          <HomePage 
            onNavigateToDestination={navigateToDestination}
            onSearch={navigateToSearch}
            onNavigateToPage={navigateToPage}
          />
        );
      case "destinations":
        return <DestinationsPage onNavigateToDestination={navigateToDestination} />;
      case "deals":
        return <DealsPage />;
      case "contact":
        return <ContactPage />;
      case "search":
        return (
          <SearchResultsPage
            searchQuery={route.searchQuery}
            onNavigateToDestination={navigateToDestination}
          />
        );
      case "destination-detail":
        return (
          <DestinationDetailPage
            destinationId={route.destinationId || ""}
            onBack={navigateBack}
          />
        );
      default:
        return (
          <HomePage 
            onNavigateToDestination={navigateToDestination}
            onSearch={navigateToSearch}
            onNavigateToPage={navigateToPage}
          />
        );
    }
  };

  // Get current page for header highlighting
  const currentPage = route.page === "destination-detail" || route.page === "search" 
    ? "destinations" 
    : (route.page as PageType);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigateToPage}
        onSearch={navigateToSearch}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
