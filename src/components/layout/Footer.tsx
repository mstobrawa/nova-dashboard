type FooterProps = {
  brand: string;
  year?: number;
  className?: string;
};

export default function Footer({
  brand,
  year = new Date().getFullYear(),
  className = "",
}: FooterProps) {
  return (
    <footer
      className={`p-4 text-center text-sm bg-dashboadrPrimary  text-white dark:text-dashboardTextDark ${className}`}
    >
      © {year} {brand}
    </footer>
  );
}
