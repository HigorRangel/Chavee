import React from "react";
import "./CadastroUsuario.css";
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import SecaoSombreada from "../SecaoSombreada/SecaoSombreada"
import Tabela from "../Tabela/Tabela"




const CadastroUsuario = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">Cadastro de Usuário</h4>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col xs={2}>
                                                <Form.Group>
                                                    <Form.Label>Primeiro Nome</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: João" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Nome(s) do Meio</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: da Silva" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group>
                                                    <Form.Label>Último Nome</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: Oliveira" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={5}>
                                                <Form.Group>
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: oliveira.silva@hotmail.com" maxLength = "40"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Label>Contato</Form.Label>
                                                    <Form.Control required type="name" placeholder="Ex: (19) 9 9000-0000" maxLength = "11"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Group>
                                                    <Form.Label>Cargo</Form.Label>
                                                    <Form.Select defaultValue="--Selecione uma Opção--">
                                                        {}
                                                        <option>--Selecione uma Opção--</option>
                                                        <option>NÍVEL 2</option>
                                                        <option>NÍVEL 3</option>
                                                        <option>NÍVEL 4</option>
                                                    </Form.Select>                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <InputGroup>
                                                    <Form.Label>Situação do Usuário</Form.Label>
                                                    <Form.Check className="me-3" label="Ativo" name="radio" type="radio" aria-label="radio" />
                                                    <Form.Check label="Inativo" name="radio" type="radio" aria-label="radio" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end me-4">
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="outline-secondary" type="submit">Cancelar</Button>
                                                </Row>
                                            </Col>
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