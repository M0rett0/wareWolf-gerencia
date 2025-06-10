import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Equipes from './pages/Equipes';
import Pontuacao from './pages/Pontuacao';
import Chaveamento from './pages/Chaveamento';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      {/* Layout com Navbar e Outlet */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/pontuacao" element={<Pontuacao />} />
        <Route path="/chaveamento" element={<Chaveamento />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
