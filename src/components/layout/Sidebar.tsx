import { NavLink } from "react-router-dom";

type SidebarLink = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

type SidebarProps = {
  links: SidebarLink[];
};

export default function Sidebar({ links }: SidebarProps) {
  return (
    <aside className="flex flex-col w-16 sm:w-64 bg-dashboardSecondary dark:bg-dashboardSecondaryDark p-2">
      <nav className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-1 w-full items-center gap-3 p-2 rounded hover:bg-dashboardAccent dark:hover:bg-dashboardAccentDark ${
                isActive
                  ? "bg-dashboardAccent/30 dark:bg-dashboardAccentDark/20"
                  : ""
              }`
            }
          >
            {link.icon}
            <span className="hidden sm:inline">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
