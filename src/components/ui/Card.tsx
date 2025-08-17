import type { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  label: string;
  value: number;
};

export default function Card({ icon, label, value }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center gap-4">
      <div className="text-2xl text-dashboardPrimary">{icon}</div>
      <div>
        <div className="text-gray-500 dark:text-gray-300 text-sm">{label}</div>
        <div className="text-lg font-bold text-gray-900 dark:text-white">
          {value}
        </div>
      </div>
    </div>
  );
}
