import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import VTT from "../pages/VTT";
import Login from "../pages/Login";
import Partidas from "../pages/Partidas";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/partidas" element={<Partidas />} />
      <Route path="/vtt" element={<VTT />} />
      {/* <Route path="/partidas/:id/vtt" element={<VTT />} /> */}
    </Routes>
  );
}
