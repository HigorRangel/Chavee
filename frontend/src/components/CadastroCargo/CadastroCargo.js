import React from "react";
import "./CadastroCargo.css";
import {Form, Button, Container, Row, Col, Image} from "react-bootstrap";
import PainelSombreado from "../PainelSombreado/PainelSombreado";
import niveisAcesso from "../../images/niveis-acesso.png";


const CadastroCargo = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                <div>
                                    <h4 className="text-center text-secondary  mb-4">Cadastro de Cargo</h4>
                                    <Form>
                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formDescricao">
                                                <Form.Label>Descrição</Form.Label>
                                                <Form.Control type="name" placeholder="Ex: Vendedor" />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formNivelAcesso">
                                                    <Form.Label>Nivel de Acesso</Form.Label>
                                                    <Form.Select defaultValue="NÍVEL 1">
                                                        <option>NÍVEL 1</option>
                                                        <option>NÍVEL 2</option>
                                                        <option>NÍVEL 3</option>
                                                        <option>NÍVEL 4</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="m-3">
                                            <Image src={niveisAcesso} fluid />
                                        </div>
                                        <Row className="justify-content-end me-4">
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="outline-secondary" type="submit">Ver usuários</Button>
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
export default CadastroCargo;