import React,{useContext} from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Navbar} from "react-bootstrap"
import logo from "../../images/Logo.svg";
import { LoginContext } from "../../context/LoginProvider";
import { useHistory } from "react-router-dom";
import BotaoLogout from "../BotaoLogout/BotaoLogout";
function Header(){
    let location = useLocation();
    let mostrar = location.pathname.match("login") ;
    const {token, setToken} = useContext(LoginContext);
    let history = useHistory();
    var nome_usuario = "";

    if(token){
        nome_usuario = token.primeiro_nome + " " + token.ultimo_nome
    }

    const VerifyLoggedIn = () =>{
        if(!token){
            history.push("/login");
        };
    }
        return(
            mostrar === null && 
                (<div onLoad={VerifyLoggedIn()}>
                <Navbar bg="primary" variant="dark">
                    <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="170"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}<h3>{nome_usuario}</h3>
                        
                    </Navbar.Brand>
                    <BotaoLogout/>
                    </Container>
                </Navbar>
            </div>)
        )
    
}

export default Header;