import { Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import CabinetLayout from "../layouts/CabinetLayout";
import LandingPage from "../pages/landing";
import DashboardPage from "../pages/cabinet/dashboard/dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* LANDING layout */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* CABINET layout */}
      <Route element={<CabinetLayout />}>
        <Route path="/cabinet/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
