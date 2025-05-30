import React from 'react';
import styles from './Inicio.module.css'; // se quiser usar CSS modular

function Inicio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bem-vindo ao WareWolf!!</h1>
      <p>Sistema de chaveamento feito para melhorar a organização de campeonatos.</p>
      <img src="/logo.png" alt="Logo do sistema" className={styles.logo} />
    </div>
  );
}

export default Inicio;