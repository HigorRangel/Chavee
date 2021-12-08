import React, { useContext } from "react";
import "./Dashboard.css";
import {} from "react-bootstrap"
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import Tabela from "../Tabela/Tabela";
import { OperacoesContext } from "../../context/OperacoesProvider";
import { UsuariosContext } from "../../context/UsuariosProvider";
import { ChavesContext } from "../../context/ChavesProvider";
import { CargosContext } from "../../context/CargosProvider";

const Dashboard = ({props}) => {
    const {operacoes} = useContext(OperacoesContext);
    const {chaves} = useContext(ChavesContext);
    const {usuarios} = useContext(UsuariosContext);
    const {cargos} = useContext(CargosContext);

    var operacoesAtivas = operacoes.filter(function( operacao ) {
        return operacao.situacao === 1;
    });

    return(
        <body>        
            <div className="conteudo">
                <Container fluid>
                    <Row className="justify-content-center">
                        <h4 className="text-center text-secondary mt-3 mb-3">Dashboard</h4>

                        <Col xs={3} className="ps-0">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">{operacoesAtivas.length}</h1>
                                    <h4 className="text-center text-secondary">Empréstimos Ativos</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        <Col xs={3} className="pe-0">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">{operacoes.length -  operacoesAtivas.length}</h1>
                                    <h4 className="text-center text-secondary">Empréstimos Finalizados</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        <Col xs={3} className="">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">{chaves.filter(function(chave){return chave.situacao ===1}).length}</h1>
                                    <h4 className="text-center text-secondary">Chaves Disponíveis</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={3} className="ps-0">
                            
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">{usuarios.length}</h1>
                                    <h4 className="text-center text-secondary">Usuários Cadastrados</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        <Col xs={3} className="">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">{cargos.filter(function(cargo){return cargo.situacao===1}).length}</h1>
                                    <h4 className="text-center text-secondary">Cargos</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </body>
    )
}
export default Dashboard;