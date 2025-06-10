// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

function Register() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', perfil: 'equipe' });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(form);
      navigate('/login');
    } catch (err) {
      setErro(err.message || 'Erro no cadastro');
    }
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required />
        <select name="perfil" value={form.perfil} onChange={handleChange}>
          <option value="equipe">Equipe</option>
          <option value="comissao">Comissão</option>
        </select>
        <button className="add">Cadastrar</button>
      </form>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
}

export default Register;
