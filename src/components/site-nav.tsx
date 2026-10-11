import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const items = [
  { label: "Home", to: "/" as const },
  { label: "FX", to: "/fx" as const },
  { label: "About", to: "/about" as const },
];

export function SiteNav(): ReactNode {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("fx-theme");
    const next = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  const toggleTheme = (): void => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("fx-theme", next ? "dark" : "light");
  };

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" className="brand-mark" aria-label="FX TEAM home">
          FX TEAM
        </Link>
        <div className="nav-links">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              data-active={pathname === item.to ? "true" : "false"}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          title={dark ? "Light theme" : "Dark theme"}
        >
          {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}