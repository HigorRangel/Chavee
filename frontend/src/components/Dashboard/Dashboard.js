import React, { useContext } from "react";
import "./Dashboard.css";
import {} from "react-bootstrap"
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import Tabela from "../Tabela/Tabela";
import { OperacoesContext } from "../../context/OperacoesProvider";
const Dashboard = ({props}) => {
    const {operacoes} = useContext(OperacoesContext);
    
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
                            {nome: "Código", proporcao: 10, alinhamento: "center"},
                            {nome: "Imóvel", proporcao: 10, alinhamento: "left" },
                            {nome: "Endereço", proporcao: 35, alinhamento: "left"},
                            {nome: "Situação", proporcao: 10, alinhamento: "center"},
                            {nome: "Funcionário", proporcao: 25, alinhamento: "center"},
                            {nome: "Ações",  proporcao: 10, alinhamento: "center"}
                            
                        ]}
                        registros={[
                            {0:0, 1:"V345", 2:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 3:"ATIVO", 4:"HIGOR", 5:" "},
                            {0:1, 1:"V345", 2:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 3:"ATIVO", 4:"HIGOR", 5:" "},
                            {0:2, 1:"V345", 2:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 3:"ATIVO", 4:"HIGOR", 5:" "},
                            {0:3, 1:"V345", 2:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 3:"ATIVO", 4:"HIGOR", 5:" "},
                            {0:4, 1:"V345", 2:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 3:"ATIVO", 4:"HIGOR", 5:" "},
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