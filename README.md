# Klimate ⛅

A modern, responsive weather forecast web application built with React, Vite, TypeScript, Tailwind CSS, and the OpenWeatherMap API.

---

## 🚀 Features

- 🌤️ **Current Weather & Forecasts**: Real-time atmospheric conditions, temperature, humidity, wind speed, pressure, and multi-day forecasts.
- 📍 **Geolocation Support**: Automatic detection of current user coordinates to display local weather.
- 🔍 **City Search**: Global city search and instant weather lookup.
- 🌓 **Dark & Light Mode**: Seamless theme toggling with persistent theme state.
- ⚡ **TanStack React Query**: Intelligent caching, background updates, and optimal network performance.
- 🎨 **Modern UI**: Clean, glassmorphic, and accessible interface built with Tailwind CSS and Radix/Base UI components.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [OpenWeatherMap API Key](https://openweathermap.org/api) (Free tier)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SAM129EER/Klimate.git
   cd Klimate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (refer to `.env.example`):
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
klimate/
├── public/              # Static assets
├── src/
│   ├── api/             # OpenWeather API endpoints, client & types
│   ├── components/      # UI components, layout, and theme toggle
│   │   └── ui/          # Accessible UI primitives
│   ├── lib/             # Utility functions
│   ├── pages/           # Application views (Dashboard, CityPage)
│   ├── App.tsx          # Root application component & routes
│   ├── main.tsx         # Entry point & QueryClient provider
│   └── index.css        # Global CSS & Tailwind styles
├── .env.example         # Example environment configuration
├── package.json         # Project metadata and dependencies
└── vite.config.ts       # Vite configuration
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
