import React from "react";
import { NavLink, useLocation} from "react-router-dom";
import "./HeaderLateral.css";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 


function HeaderLateral(){
    let location = useLocation();
    let mostrar = location.pathname.match("login") ;
    return(
        
            mostrar === null && 
                <div className="header bg-white" id="header">
                    <nav>
                        <ul className={"list-unstyled"}>
                            <li className={"mb-5 botao"}><NavLink to="/dashboard" exact><FontAwesomeIcon icon={faHome} color={"#0B2149"}  size="lg"/></NavLink></li>
                            <li className={"mb-5 botao"}><NavLink to="/chaves" exact><FontAwesomeIcon icon={faKey} color={"#0B2149"}  size="lg"/></NavLink></li>
                            <li className={"mb-5 botao"}><NavLink to="/operacoes" exact><FontAwesomeIcon icon={faClipboardList} color={"#0B2149"}  size="lg"/></NavLink></li>
                            <li className={"mb-5 botao"}><NavLink to="/cargos" exact><FontAwesomeIcon icon={faBriefcase} color={"#0B2149"}  size="lg"/></NavLink></li>
                            <li className={"botao"}><NavLink to="/cadastro-imobiliaria" exact><FontAwesomeIcon icon={faBuilding} color={"#0B2149"}  size="lg"/></NavLink></li>
                            {/* <li><NavLink to="/cadastro-cargos" exact><FontAwesomeIcon icon={faHome} color={"#0B2149"}  size="lg"/></NavLink></li>
                            <li><NavLink to="/cadastro-usuario" exact><FontAwesomeIcon icon={faHome} color={"#0B2149"}  size="lg"/></NavLink></li> */}
                        </ul>
                    </nav>
                </div> 
                
        
       
    )
}

export default HeaderLateral;