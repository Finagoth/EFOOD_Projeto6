import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/restaurante/:id" element={<Perfil />} />
    <Route path="*" element={<div>Página não encontrada</div>} />
  </Routes>
);