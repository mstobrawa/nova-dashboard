# Nova Dashboard

## Opis projektu

Nova Dashboard to uniwersalny, reużywalny panel zarządzania (dashboard) dla małych i średnich projektów, obecnie w wersji MVP. Panel jest przygotowany do obsługi sklepu internetowego i może wyświetlać dane z lokalnych plików JSON, ale jest gotowy do szybkiego podłączenia API.

Dodawane są kolejne komponenty, co ułatwia dostosowanie panelu do różnych potrzeb projektowych.

**Technologie:**

- React + TypeScript
- Tailwind CSS (mobile-first)
- Recharts (wykresy)
- React Router DOM (routing)
- Lucide React (ikony)

## Struktura projektu

```
src/
  components/        # Reużywalne komponenty UI (Card, Header, Footer, Sidebar)
  data/              # Pliki JSON z przykładowymi danymi
  pages/             # Strony dashboardu (Overview, Reports, UsersPage)
  types/             # Typy TypeScript dla danych i komponentów
  App.tsx            # Główny komponent aplikacji
  index.tsx          # Punkt wejścia React
```

## Instalacja i uruchomienie

1. Sklonuj repozytorium:

```bash
git clone https://github.com/mstobrawa/nova-dashboard.git
```

2. Przejdź do katalogu projektu i zainstaluj zależności:

```bash
cd nova-dashboard
npm install
```

3. Uruchom projekt w trybie developerskim:

```bash
npm run dev
```

4. Otwórz przeglądarkę na `http://localhost:5173`

## Wersja produkcyjna

Projekt jest gotowy do deployu na Netlify lub innym hostingu statycznym.

1. Zbuduj projekt:

```bash
npm run build
```

2. W folderze `dist/` znajdziesz gotowe pliki do wrzucenia na serwer.

## Styl i dark mode

- Dashboard obsługuje tryb ciemny i jasny (dark/light mode) z automatycznym zapamiętywaniem wyboru.
- Stylizacja Tailwind pozwala na responsywność mobile-first.
- Sidebar automatycznie zmienia wygląd w zależności od rozdzielczości ekranu.

## Dalsze kroki

- Podłączenie prawdziwego API do pobierania danych
- Rozbudowa dashboardu o nowe komponenty i wykresy
- Optymalizacja UI/UX i testy responsywności


## Autor

Michał Stobrawa - tworzenie projektów React, frontend i fullstack

---

**Link do repozytorium:** [https://github.com/mstobrawa/nova-dashboard](https://github.com/mstobrawa/nova-dashboard)
