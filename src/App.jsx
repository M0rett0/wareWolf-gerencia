import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Equipes from './pages/Equipes';
import Pontuacao from './pages/Pontuacao';
import Navbar from './components/Navbar';
import styles from './App.module.css';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/equipes" element={<Equipes />} />
      <Route path="/pontuacao" element={<Pontuacao />} />
      {/*<Route path="/chaveamento" element={<Chaveamento />} />
      <Route path="/perfil" element={<Perfil />} />*/}
    </Routes>
  );
}

export default App;
