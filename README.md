# Nova Dashboard 🚀

An open-source, highly reusable dashboard MVP tailored for small and medium-sized projects. Currently configured for e-commerce metrics, it operates seamlessly on local JSON data and is architected for instant API integration.

[🌐 Live Demo](https://nova-dashboard-mvp.netlify.app/) | [📂 GitHub Repository](https://github.com/mstobrawa/nova-dashboard)

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 18 & TypeScript (Strict typing & clean state architecture)
- **Styling:** Tailwind CSS (Mobile-first, responsive grid layout)
- **Routing:** React Router DOM (Declarative client-side routing)
- **Data & Charts:** Recharts (Dynamic data visualization) & Lucide React (Icons)
- **Build Tool:** Vite (Optimized production bundles)

---



## 📱 Visual Preview

> <img width="800" height="474" alt="nd2" src="https://github.com/user-attachments/assets/7d1f7ec0-704c-4658-97ed-b707957f42db" /><img width="800" height="328" alt="nd1" src="https://github.com/user-attachments/assets/4bafeb54-7165-4606-a546-51e32da917f4" />


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
- [ ] Conduct comprehensive cross-browser UX testing and responsiveness optimization.

---

## 👤 Author

**Michał Stobrawa**
*Frontend & Fullstack Developer focused on scalable React ecosystems.*

- **GitHub:** [@mstobrawa](https://github.com/mstobrawa)
- **LinkedIn:** [https://www.linkedin.com/in/micha%C5%82-stobrawa/]
- **Email:** [stobrawa.m@gmail.com]
