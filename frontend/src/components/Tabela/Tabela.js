import React from "react";
import { NavLink } from "react-router-dom";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Form, Button, Container, Row, Col, Table} from "react-bootstrap"
import "./Tabela.css"
import BotaoDelete from "../BotaoDelete/BotaoDelete";
import BotaoUpdate from "../BotaoUpdate/BotaoUpdate";
import BotaoOperacao from "../BotaoOperacao/BotaoOperacao"
 


function Tabela({colunas, registros, funcaoDelete, funcaoUpdate, funcaoOperacao, colunaStatus}){

    return(
            <Container fluid className="p-0">

                <Row>
                    <Col className="m-0 p-0">
                        <div className="tabela">
                            <Table className="table" striped bordered hover size="md">
                                <thead>
                                    <tr>
                                        <th className="colunaStatus"></th>
                                        {colunas.map((coluna) => {
                                            return(
                                                <th style={{textAlign:(coluna.alinhamento).toString()}}>{coluna.nome}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                {Object.values(registros).map((registro) => {
                                            console.log(registro);
                                            let botaoOperacao = (funcaoOperacao ? <BotaoOperacao click={() => funcaoOperacao(registro.id)}></BotaoOperacao> : null);
                                            let botaoUpdate = (funcaoUpdate ? <BotaoUpdate  click={() => funcaoUpdate(registro.id)}></BotaoUpdate> : null);
                                            let botaoDelete = (funcaoDelete ? <BotaoDelete click={() => funcaoDelete(registro.id)}></BotaoDelete> : null);

                                            return(
                                                
                                                <tr>
                                                    <td>
                                                         <div className="bordaStatus"></div>
                                                     </td>
                                                     {Object.values(registro).map((dado,index) =>(
                                                        <td  style={{width: (colunas[index].proporcao).toString() + "%", textAlign:(colunas[index].alinhamento).toString()}}>{dado}</td>
                                                     ))}

                                                     <td className="d-flex justify-content-center align-items-center">
                                                        
                                                        {botaoOperacao }
                                                        {botaoUpdate }
                                                        {botaoDelete}
                                                     </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                                <tfoot>
                                    
                                </tfoot>
                            
                            </Table>
                        </div>

                    </Col>
                </Row>

            </Container>
        
        
    )
}

export default Tabela;