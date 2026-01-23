import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import VTT from "../vtt/VTT";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import { Registro } from "../pages/Registro";
import { ProtectedRoute } from "./protectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="registro" element={<Registro />} />
      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        }
      />
      <Route path="/partidas/:id/vtt" element={<VTT />} />
    </Routes>
  );
}
