# Nova Dashboard 🚀

A reusable dashboard MVP tailored for small and medium-sized projects. Currently configured for e-commerce metrics and built on local JSON data with easy API integration in mind.

[🌐 Live Demo](https://nova-dashboard-mvp.netlify.app/) | [📂 GitHub Repository](https://github.com/mstobrawa/nova-dashboard)
Responsive • Dark / Light Mode • API-ready architecture

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 18 & TypeScript (Strict typing & clean state architecture)
- **Styling:** Tailwind CSS (Mobile-first, responsive grid layout)
- **Routing:** React Router DOM (Declarative client-side routing)
- **Data & Charts:** Recharts (Dynamic data visualization) & Lucide React (Icons)
- **Build Tool:** Vite (Optimized production bundles)

---

## Why this project?

This project was created to practice building scalable frontend architecture, reusable UI components, and dashboard layouts prepared for future API integration.

---

## 📱 Visual Preview

<table width="100%">
  <thead>
    <tr>
      <th width="50%" align="center">🌙 Dark Mode Overview</th>
      <th width="50%" align="center">☀️ Light Mode / Mobile Metrics</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <img src="https://github.com/user-attachments/assets/7d1f7ec0-704c-4658-97ed-b707957f42db" width="100%" alt="Nova Dashboard Dark Mode" />
      </td>
      <td valign="top">
        <img src="https://github.com/user-attachments/assets/4bafeb54-7165-4606-a546-51e32da917f4" width="100%" alt="Nova Dashboard Light Mode" />
      </td>
    </tr>
  </tbody>
</table>


---

## ✨ Features & Highlights

- **E-commerce Ready:** Configured out-of-the-box to track and display sales, user statistics, and analytical reports.
- **API-Ready Architecture:** Built using structured local JSON mock data, allowing quick replacement with any RESTful API.
- **Theme Persistence:** Full support for Dark & Light modes with automatic state retention (remembering user choice).
- **Mobile-First Responsive Design:** Tailwind UI layouts, including an adaptive sidebar that dynamically shifts depending on the screen size.
- **Scalable Component Growth:** Designed as a living component library; new reusable UI modules are added continuously.

---

## 📐 Project Structure

A clean, modular, and self-documenting directory structure aligned with modern frontend standards:

```text
src/
  ├── components/    # Reusable atomic UI elements (Card, Header, Footer, Sidebar)
  ├── data/          # Mock JSON datasets for prototyping
  ├── pages/         # High-level views (Overview, Reports, UsersPage)
  ├── types/         # Strict TypeScript definitions for safe data mapping
  ├── App.tsx        # Main application component & layout wrapper
  └── index.tsx      # React runtime entry point
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Development Mode
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mstobrawa/nova-dashboard.git
   ```
2. **Navigate to the project and install dependencies:**
   ```bash
   cd nova-dashboard && npm install
   ```
3. **Run the local development server:**
   ```bash
   npm run dev
   ```
4. Open your browser and explore: `http://localhost:5173`

### Production Build
The project is optimized and ready for immediate deployment on static hosting platforms like **Netlify**, Vercel, or GitHub Pages.

```bash
npm run build
```
The compiled, production-ready static assets will be generated inside the `dist/` directory.

---

## 🗺️ Roadmap & Future Steps

- [ ] Connect a live production API for real-time data streaming.
- [ ] Expand the UI library with advanced metrics components and micro-interactions.
- [ ] Improve accessibility and responsiveness.

---

## 👤 Author

**Michał Stobrawa**
*Frontend & Fullstack Developer focused on scalable React ecosystems.*

- **GitHub:** [@mstobrawa](https://github.com)
- **LinkedIn:** [Michał Stobrawa](https://www.linkedin.com/in/michał-stobrawa/)
- **Email:** [stobrawa.m@gmail.com](mailto:stobrawa.m@gmail.com)
