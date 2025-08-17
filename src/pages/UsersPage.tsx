import React from "react";
import users from "../data/users.json";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function UsersPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista użytkowników</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border text-left">ID</th>
              <th className="px-4 py-2 border text-left">Imię i nazwisko</th>
              <th className="px-4 py-2 border text-left">Email</th>
              <th className="px-4 py-2 border text-left">Rola</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr
                key={user.id}
                className="bg-gray-100 hover:bg-dashboardAccent dark:hover:bg-gray-900 dark:text-gray-700 dark:hover:text-gray-100"
              >
                <td className="px-4 border py-2">{user.id}</td>
                <td className="px-4 border py-2">{user.name}</td>
                <td className="px-4 border py-2">{user.email}</td>
                <td className="px-4 border py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
