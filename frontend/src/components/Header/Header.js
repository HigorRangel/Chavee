import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header(){
    return(
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to="/dashboard" exact>Dashboard</NavLink></li>
                    <li><NavLink to="/chaves" exact>Chaves</NavLink></li>
                    <li><NavLink to="/emprestimos" exact>Empréstimos</NavLink></li>
                    <li><NavLink to="/cargos" exact>Cargos</NavLink></li>
                    <li><NavLink to="/cadastro-imobiliaria" exact>Cadastro de Imobiliária</NavLink></li>
                    <li><NavLink to="/cadastro-cargos" exact>Cadastro de Cargos</NavLink></li>
                    <li><NavLink to="/cadastro-usuario" exact>Cadastro de Usuário</NavLink></li>


                </ul>
            </nav>
        </header> 
    )
}

export default Header;