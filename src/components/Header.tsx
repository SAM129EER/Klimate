import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="flex justify-between h-16 items-center container mx-auto px-8">
        <Link to="/">
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="logo"
            className="h-12"
          />
        </Link>
        <div>
          {/* search bar */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
