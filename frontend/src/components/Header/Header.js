import React,{useContext} from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import {Container, Navbar} from "react-bootstrap"
import logo from "../../images/Logo.svg";
import { LoginContext } from "../../context/LoginProvider";
import { ImobiliariasContext } from "../../context/ImobiliariasProvider";
import { useHistory,Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

function Header(){
    let location = useLocation();
    let paginaAtual = location.pathname
    let mostrar = paginaAtual.match("login") || paginaAtual.match("imobiliarias") || paginaAtual.match("cadastro-imobiliaria");

    if(paginaAtual.match("cadastro-imobiliaria[/][0-9]+")){
        mostrar = null;
    }

    const {token} = useContext(LoginContext);
    const {imobiliarias} = useContext(ImobiliariasContext);

    let history = useHistory();
    var nome_usuario = "";
    let imobiliariaAtual = null;

    if(token){
        nome_usuario = token.primeiro_nome + " " + token.ultimo_nome
        imobiliariaAtual = imobiliarias.find(imobiliaria => imobiliaria.id === token.id_imobiliaria)
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
                    <Link to="/dashboard">
                    <Navbar.Brand>
                        <img
                        alt=""
                        src={logo}
                        width="170"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    </Link>
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