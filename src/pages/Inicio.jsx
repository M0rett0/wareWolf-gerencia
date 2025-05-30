import React from 'react';
import styles from '../css/Inicio.module.css';
import Wolf from '../assets/Wolf.png';

function Inicio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bem-vindo ao WareWolf!!</h1>
      <p>Sistema de chaveamento feito para melhorar a organização de campeonatos.</p>
      <img src={Wolf} alt="wolf" className={styles.logo}/>
    </div>
  );
}

export default Inicio;