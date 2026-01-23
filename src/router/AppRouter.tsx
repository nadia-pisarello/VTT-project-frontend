import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import VTT from "../vtt/VTT";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import { Registro } from "../pages/Registro";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="registro" element={<Registro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/partidas/:id/vtt" element={<VTT />} />
    </Routes>
  );
}
