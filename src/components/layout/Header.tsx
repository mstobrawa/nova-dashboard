import type { MouseEventHandler } from "react";
import type { Theme } from "../../types/theme";
import logoFallback from "../../assets/logo.png";

type HeaderProps = {
  title: string;
  logoSrc?: string;
  theme: Theme;
  onToggleTheme: MouseEventHandler<HTMLButtonElement>;
};

export default function Header({
  title,
  logoSrc = logoFallback,
  theme,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-dashboadrPrimary dark:bg-dashboardPrimaryDark text-white dark:text-dashboardTextDark">
      <div className="flex items-center gap-3">
        <img src={logoSrc} alt={title} className="w-10 h-10" />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>

      <button
        type="button"
        onClick={onToggleTheme}
        className="bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "☀️ Jasny" : "🌙 Ciemny"}
      </button>
    </header>
  );
}
