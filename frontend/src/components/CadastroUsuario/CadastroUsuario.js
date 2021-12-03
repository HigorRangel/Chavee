import React,{useContext} from "react";
import "./CadastroUsuario.css";
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import SecaoSombreada from "../SecaoSombreada/SecaoSombreada"
import Tabela from "../Tabela/Tabela"
import { UsuariosContext } from "../../context/UsuariosProvider";



const CadastroUsuario = ({props}) => {
    const {onUsuarioSubmit} = useContext(UsuariosContext);
    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">Cadastro de Usuário</h4>
                                    <Form onSubmit={onUsuarioSubmit}>
                                        <Row className="mb-3">
                                            <Col xs={2}>
                                                <Form.Group controlId="usuarioNome">
                                                    <Form.Label>Primeiro Nome</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: João" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="usuarioNomeMeio">
                                                    <Form.Label>Nome(s) do Meio</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: da Silva" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="usuarioNomeUltimo">
                                                    <Form.Label>Último Nome</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: Oliveira" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={5}>
                                                <Form.Group controlId="usuarioEmail">
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: oliveira.silva@hotmail.com" maxLength = "40"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group controlId="usuarioContato">
                                                    <Form.Label>Contato</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: (19) 9 9000-0000" maxLength = "11"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Group controlId="usuarioCargo">
                                                    <Form.Label>Cargo</Form.Label>
                                                    <Form.Select defaultValue="Administrador">
                                                        <option id="0">Administrador</option>
                                                        <option id="1">Vendedor</option>
                                                        <option id="2">Funcionário</option>
                                                        <option id="3">Visitante</option>
                                                    </Form.Select>                                                
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="usuarioSituacao">
                                                    <Form.Label>Situação do Usuário</Form.Label>
                                                    <Form.Select defaultValue="Ativo">
                                                        <option>Ativo</option>
                                                        <option>Inativo</option>
                                                    </Form.Select>                                                
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end me-4">
                                            {/* <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="outline-secondary" type="submit">Cancelar</Button>
                                                </Row>
                                            </Col> */}
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="primary" type="submit">Salvar Registro</Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                 </div>
                            }></PainelSombreado>
                        </Col>
                    </Row>
                </Container>
            </div>
        </body>
    )
}
export default CadastroUsuario;