import React from "react";
import "./Dashboard.css";
import {} from "react-bootstrap"
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import Tabela from "../Tabela/Tabela";




const Dashboard = ({props}) => {
    return(
        <body>        
            <div className="conteudo">
                <Container fluid>
                    <Row className="justify-content-center">
                        <h4 className="text-center text-secondary mt-3 mb-3">Dashboard</h4>

                        <Col xs={3} className="ps-0">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">20</h1>
                                    <h4 className="text-center text-secondary">Empréstimos Realizados</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        <Col xs={3} className="">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">100</h1>
                                    <h4 className="text-center text-secondary">Chaves Cadastradas</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        <Col xs={3} className="pe-0">
                            <PainelSombreado elemento={
                                <div className="py-2">
                                    <h1 className="dadosDashboard">5</h1>
                                    <h4 className="text-center text-secondary">Usuários Logados</h4>
                                </div>
                            }></PainelSombreado>
                        </Col>
                        <Col xs={9}>
                        <h4 className="text-center text-secondary mt-5  mb-3">Empréstimos Ativos</h4>

                        <Tabela colunas={[
                            {numero: 0, nome: "Código", proporcao: 10},
                            {numero: 1, nome: "Imóvel", proporcao: 10 },
                            {numero: 2, nome: "Endereço", proporcao: 35},
                            {numero: 3, nome: "Situação", proporcao: 10},
                            {numero: 4, nome: "Funcionário", proporcao: 15},
                            {numero: 5, nome: "Ações",  proporcao: 20}
                            
                        ]}
                        registros={[
                            [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "],
                            [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "],
                            [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "],
                            [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "]
                        ]}></Tabela>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        
                    </Row>
                </Container>
            </div>
        </body>
    )
}
export default Dashboard;