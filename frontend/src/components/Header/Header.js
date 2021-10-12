import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Navbar} from "react-bootstrap"
import logo from "../../images/Logo.svg";
 


function Header(){
    return(
        <div>
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
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;