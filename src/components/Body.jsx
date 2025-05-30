import React from "react";
import styles from '../css/Body.module.css'
//Componente de Equipes
function Body(){
    return(
        <div className={styles.body}>
            <div className={styles.pesquisa}>  
                <input type="text" placeholder="Busca" className={styles.inputPesq}/>
                <button className={styles.bntPesq}>🔍</button>
            </div>

        </div>
    );
}

export default Body;