import data from "../data/dashboard.json";
import { BarChart2, Users, ShoppingCart, DollarSign } from "lucide-react";
import Card from "../components/ui/Card";

type Stat = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

export default function Overview() {
  const stats: Stat[] = [
    { label: "Użytkownicy", value: data.users, icon: <Users size={24} /> },
    { label: "Sprzedaż", value: data.sales, icon: <ShoppingCart size={24} /> },
    { label: "Produkty", value: data.products, icon: <BarChart2 size={24} /> },
    { label: "Przychód", value: data.revenue, icon: <DollarSign size={24} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
}
