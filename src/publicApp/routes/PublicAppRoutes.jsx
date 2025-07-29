import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../auth/routes/AuthRoutes";
import {
  AboutPage,
  ContactPage,
  GraphicDesign,
  HomePage,
  VideoEdition,
  WebDevelopment,
} from "../pages";
import { Layout } from "../layout";

export const PublicAppRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas con layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="services/web_development" element={<WebDevelopment />} />
        <Route path="services/graphic_design" element={<GraphicDesign />} />
        <Route path="services/video_edition" element={<VideoEdition />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>

      {/* Rutas de autenticación sin layout */}
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};
