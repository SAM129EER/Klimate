
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import { useTheme } from "./theme/theme-provider";
import { ModeToggle } from "./theme/mode-toggle";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="transition-opacity hover:opacity-80"
          aria-label="Weather App Home"
        >
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="Weather"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/search"
            className="flex h-9 items-center gap-2 rounded-md border px-3 text-sm transition-colors hover:bg-accent"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </Link>

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

