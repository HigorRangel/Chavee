import React,{useContext} from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Navbar} from "react-bootstrap"
import logo from "../../images/Logo.svg";
import { LoginContext } from "../../context/LoginProvider";
import { ImobiliariasContext } from "../../context/ImobiliariasProvider";
import { useHistory } from "react-router-dom";
import {Button} from 'react-bootstrap'

function Header(){
    let location = useLocation();
    let mostrar = location.pathname.match("login") ;
    const {token, setToken} = useContext(LoginContext);
    const {imobiliarias} = useContext(ImobiliariasContext);

    let history = useHistory();
    var nome_usuario = "";

    if(token){
        nome_usuario = token.primeiro_nome + " " + token.ultimo_nome
    }

    let imobiliariaAtual = imobiliarias.find(imobiliaria => imobiliaria.id === token.id_imobiliaria);

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
                        />{' '}
                    </Navbar.Brand>
                    <div>
                        <h3 className="text-white mb-0">{imobiliariaAtual ? imobiliariaAtual.nome_fantasia : null}</h3>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <p className="text-white mb-0 fw-bold">{nome_usuario.toUpperCase()}</p>
                        <Button onClick={ () => {
                                sessionStorage.removeItem('token')
                                history.push("/login");
                            }
                        } className="p-0">Sair</Button>
                    </div>
                    </Container>
                </Navbar>
            </div>)
        )
    
}

export default Header;