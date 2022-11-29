import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { DashboardRoutes } from "../dashboard/routes";
import { PublicAppRoutes } from "../publicApp/routes";
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";
import { HomePage } from "../publicApp/pages/HomePage";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      

      {status === "authenticated" ? (
        <Route path="/*" element={<DashboardRoutes />} />
      ) : (
        // <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<PublicAppRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
