import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./components/theme/theme-provider";
import CityPage from "./pages/CityPage";
import DashBoardPage from "./pages/DashBoardPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
              <Route path="/" element={<DashBoardPage />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
