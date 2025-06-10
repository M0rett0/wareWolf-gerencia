import React from "react"; 
import styles from '../css/Navbar.module.css'
import Wolf from '../assets/Wolf.png'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    const isLoggedIn = localStorage.getItem('user');

    return (
        <nav className={styles.navbar}>
        <div>
            <img src={Wolf} alt="wolf" className={styles.wolf}/>
        </div>
        <div className={styles.logo}>WAREWOLF</div>

        <ul className={styles.navLinks}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/equipes">Equipes</Link></li>
            <li><Link to="/pontuacao">Pontuação</Link></li>
            <li><Link to="/chaveamento">Chaveamentos</Link></li>

            {isLoggedIn ? (
                <li>
                  <Link to="/perfil" title="Seu perfil">
                    <FaUserCircle className={styles.perfilIcone} /> 
                  </Link>
                </li>
            ) : (
              <>
                <li><Link to="/login">Entrar</Link></li>
                <li><Link to="/register">Cadastrar</Link></li>
              </>
            )}
        </ul>
        </nav>
    );
}
export default Navbar;
