import { Search, Plane, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSearch: (query: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Header({ currentPage, onNavigate, onSearch, darkMode, onToggleDarkMode }: HeaderProps) {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--light-sea-green)] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-foreground">EuroThrift</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {["home", "destinations", "deals", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-[var(--mint-green)] text-foreground"
                    : "text-foreground hover:bg-[var(--mint-green)]/50"
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Search */}
            {searchExpanded && (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    onSearch(searchQuery);
                    setSearchExpanded(false);
                    setSearchQuery("");
                  }
                }}
                className="hidden md:flex items-center gap-2"
              >
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 transition-all"
                  autoFocus
                  onBlur={() => {
                    setTimeout(() => setSearchExpanded(false), 200);
                  }}
                />
              </form>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchExpanded(!searchExpanded)}
              className="hidden md:flex rounded-lg"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-lg"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[var(--hunyadi-yellow)]" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-2 mb-4">
              {["home", "destinations", "deals", "contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    onNavigate(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg transition-colors text-left ${
                    currentPage === page
                      ? "bg-[var(--mint-green)] text-foreground"
                      : "text-foreground hover:bg-[var(--mint-green)]/50"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </nav>

            {/* Mobile Search */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  onSearch(searchQuery);
                  setMobileMenuOpen(false);
                  setSearchQuery("");
                }
              }}
              className="flex gap-2"
            >
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="bg-[var(--light-sea-green)] hover:bg-[var(--light-sea-green)]/90 text-white">
                <Search className="w-5 h-5" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
