import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../../auth/routes/AuthRoutes"
import { AboutPage, GraphicDesign, HomePage, VideoEdition, WebDevelopment } from "../pages"



export const PublicAppRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<HomePage />} />

        <Route path="/web_development" element={<WebDevelopment />} />
        <Route path="/graphic_design" element={<GraphicDesign />} />
        <Route path="/video_edition" element={<VideoEdition />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="/home" />} />

        <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}