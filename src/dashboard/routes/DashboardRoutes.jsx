import { Navigate, Route, Routes } from "react-router-dom"
import { PublicAppRoutes } from "../../publicApp/routes/PublicAppRoutes"
import { DashboardPage } from "../pages"



export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />

    </Routes>
  )
}
