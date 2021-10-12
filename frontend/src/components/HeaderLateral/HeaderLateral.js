import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderLateral.css";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Form, Button, Container, Row, Col} from "react-bootstrap"
 


function Header(){
    return(
        <div className="header bg-white">
            <nav>
                <ul className={"list-unstyled"}>
                    <li className={"mb-5"}><NavLink to="/dashboard" exact><FontAwesomeIcon icon={faHome} color={"#0B2149"}  size="lg"/></NavLink></li>
                    <li className={"mb-5"}><NavLink to="/chaves" exact><FontAwesomeIcon icon={faKey} color={"#0B2149"}  size="lg"/></NavLink></li>
                    <li className={"mb-5"}><NavLink to="/emprestimos" exact><FontAwesomeIcon icon={faClipboardList} color={"#0B2149"}  size="lg"/></NavLink></li>
                    <li className={"mb-5"}><NavLink to="/cargos" exact><FontAwesomeIcon icon={faBriefcase} color={"#0B2149"}  size="lg"/></NavLink></li>
                    <li><NavLink to="/cadastro-imobiliaria" exact><FontAwesomeIcon icon={faBuilding} color={"#0B2149"}  size="lg"/></NavLink></li>
                    {/* <li><NavLink to="/cadastro-cargos" exact><FontAwesomeIcon icon={faHome} color={"#0B2149"}  size="lg"/></NavLink></li>
                    <li><NavLink to="/cadastro-usuario" exact><FontAwesomeIcon icon={faHome} color={"#0B2149"}  size="lg"/></NavLink></li> */}
                </ul>
            </nav>
        </div> 
    )
}

export default Header;