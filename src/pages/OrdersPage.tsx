import ordersData from "../data/orders.json";

type Order = {
  id: number;
  customer: string;
  amount: number;
  status: string;
  date: string;
};

export default function OrdersPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Zamówienia</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100  dark:bg-gray-800">
            <tr>
              <th className="p-2 border text-left">ID</th>
              <th className="p-2 border text-left">Klient</th>
              <th className="p-2 border text-left">Wartość</th>
              <th className="p-2 border text-left">Status</th>
              <th className="p-2 border text-left">Data</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order: Order) => (
              <tr
                key={order.id}
                className="bg-gray-100 hover:bg-dashboardAccent  dark:hover:bg-gray-900 dark:text-gray-700 dark:hover:text-gray-100"
              >
                <td className="p-2 border">{order.id}</td>
                <td className="p-2 border">{order.customer}</td>
                <td className="p-2 border">{order.amount} zł</td>
                <td className="p-2 border">{order.status}</td>
                <td className="p-2 border">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
