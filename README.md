# Nova Dashboard

Nova Dashboard to uniwersalny i reużywalny panel administracyjny (dashboard), stworzony w React + TypeScript. Projekt jest obecnie w wersji **MVP** i pobiera dane z lokalnych plików JSON, ale jest praktycznie gotowy do integracji z API. Docelowo dashboard będzie obsługiwał sklep internetowy, nad którym pracuję.  

## Funkcjonalności

- Podgląd kluczowych wskaźników (KPI) w formie kart  
- Interaktywne wykresy sprzedaży i użytkowników (React Charts / Recharts)  
- Lista użytkowników z responsywną tabelą  
- Dark mode i light mode z zapamiętywaniem wyboru w localStorage  
- Reużywalne komponenty UI, łatwe do rozbudowy i dostosowania  
- Responsywność (RWD) – działa zarówno na desktopie, jak i mobilnie  

## Technologie

- React + TypeScript  
- Tailwind CSS (z trybem ciemnym i jasnym)  
- Recharts – wykresy liniowe i słupkowe  
- React Router – routing stron w dashboardzie  
- Lucide Icons – ikony dla UI  
- Vite – narzędzie do budowy projektu  

## Struktura projektu
src/
components/ # Reużywalne komponenty UI (Card, Header, Footer, Sidebar)
data/ # Pliki JSON z przykładowymi danymi
pages/ # Strony dashboardu (Overview, Reports, UsersPage)
App.tsx # Główny komponent aplikacji
index.tsx # Punkt wejścia React

## Dalsze kroki

- Podłączenie prawdziwego API do pobierania danych
- Rozbudowa dashboardu o nowe komponenty i wykresy
- Optymalizacja UI/UX i testy responsywności

## Autor

Michał Stobrawa – tworzenie projektów React, frontend i fullstack

Nova Dashboard jest projektem hobbystycznym i przykładem MVP dla przyszłych rozwiązań e-commerce.
