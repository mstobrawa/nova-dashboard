import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import type { Theme } from "./types/theme";
import Sidebar from "./components/layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, BarChart, Users as UsersIcon, ShoppingCart } from "lucide-react";

import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";

export default function App() {
  const links = [
    { label: "Dashboard", icon: <Home size={20} />, path: "/" },
    { label: "Statystyki", icon: <BarChart size={20} />, path: "/reports" },
    { label: "Użytkownicy", icon: <UsersIcon size={20} />, path: "/users" },
    { label: "Zamówienia", icon: <ShoppingCart size={20} />, path: "/orders" },
  ];

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return "dark";
    if (saved === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header
          title="Nova Dashboard"
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <div className="flex flex-1">
          <Sidebar links={links} />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </main>
        </div>

        <Footer brand="Nova Dashboard" />
      </div>
    </Router>
  );
}
