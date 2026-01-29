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
      <Route element={<ProtectedRoute />}>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/partida/:id/vtt" element={<VTT />} />
      </Route>
    </Routes>
  );
}
