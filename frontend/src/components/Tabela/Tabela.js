import React from "react";
import { NavLink } from "react-router-dom";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Form, Button, Container, Row, Col, Table} from "react-bootstrap"
import "./Tabela.css"
 


function Tabela({colunas, registros, colunaStatus}){
    return(
        <div className="tabela me-4">
            <Container fluid>
                <Row>
                    <Col className="m-0 p-0">
                        <Table striped bordered hover size="md">
                            <thead>
                                <tr>
                                    {colunas.map((coluna) => {
                                        return(
                                            <th>{coluna.nome}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                            {registros.map((registro) => {
                                
                                        return(
                                            <tr>
                                                {
                                                    registro.map((dado) => {
                                                        
                                                        return(
                                                            <td>{dado}</td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })}
                            </tbody>
                            <tfoot>
                                
                            </tfoot>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
        
        
    )
}

export default Tabela;