import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Equipes from './pages/Equipes';
import Pontuacao from './pages/Pontuacao';
import styles from './App.module.css';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Chaveamento from './pages/Chaveamento';
import Perfil from './pages/Perfil';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio/>} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/pontuacao" element={<Pontuacao />} />
        <Route path="/chaveamento" element={<Chaveamento />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}

export default App;
