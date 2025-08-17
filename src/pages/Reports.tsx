import { salesData } from "../data/salesData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
          Trend sprzedaży
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4F46E5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - sprzedaż miesięczna */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
          Sprzedaż miesięczna
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="sales" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
