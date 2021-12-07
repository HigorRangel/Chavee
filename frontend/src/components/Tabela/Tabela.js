import React from "react";
import { NavLink } from "react-router-dom";
import { faBriefcase, faHome, faKey, faBuilding, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Form, Button, Container, Row, Col, Table} from "react-bootstrap"
import "./Tabela.css"
import BotaoDelete from "../BotaoDelete/BotaoDelete";
import BotaoUpdate from "../BotaoUpdate/BotaoUpdate";
import BotaoOperacao from "../BotaoOperacao/BotaoOperacao"
 


function Tabela({colunas, registros, funcaoDelete, linkUpdate, linkOperacao}){
    let valoresColunas = Object.values(colunas);
    valoresColunas = valoresColunas.filter(x => x.nome === "Situação");
    let colunaStatus = valoresColunas.length !== 0;
    return(
            <Container fluid className="p-0">

                <Row>
                    <Col className="m-0 p-0">
                        <div className="tabela">
                            <Table className="table" striped bordered hover size="md">
                                <thead>
                                    <tr>
                                        {colunaStatus ? <th className="colunaStatus"></th> : null}
                                        {colunas.map((coluna) => {
                                            return(
                                                <th style={{textAlign:(coluna.alinhamento)}}>{coluna.nome}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                {Object.values(registros).map((registro) => {
                                            let botaoOperacao = (linkOperacao ? <BotaoOperacao blocked={registro.situacao === 1 ? true : false} link={registro.chave ? linkOperacao + registro.chave+"/" + registro.id : linkOperacao + registro.id}></BotaoOperacao> : null);
                                            let botaoUpdate = (linkUpdate ? <BotaoUpdate  link={linkUpdate + registro.id}></BotaoUpdate> : null);
                                            let botaoDelete = (funcaoDelete ? <BotaoDelete click={() => funcaoDelete(registro)}></BotaoDelete> : null);
                                            let bordaStatus = (Object.keys(registro).includes("situacao") ? <td><div className={(registro["situacao"] === 1? "bordaStatusTrue" : "bordaStatusFalse")}></div></td> : null);
                                            return(
                                                
                                                <tr>
                                                    {bordaStatus}
                                                     {Object.values(registro).map((dado,index) =>{
                                                         return(
                                                            <td  style={{width: (colunas[index].proporcao).toString() + "%", textAlign:(colunas[index].alinhamento).toString()}}>{
                                                                dado
                                                            }</td>
                                                         )
                                                        
                                                    })}

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