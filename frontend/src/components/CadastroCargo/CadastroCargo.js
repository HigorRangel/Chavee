import React,{useContext} from "react";
import "./CadastroCargo.css";
import {Form, Button, Container, Row, Col, Image} from "react-bootstrap";
import PainelSombreado from "../PainelSombreado/PainelSombreado";
import niveisAcesso from "../../images/niveis-acesso.png";
import { CargosContext } from "../../context/CargosProvider";

const CadastroCargo = ({props}) => {
    const {onCargoSubmit} = useContext(CargosContext);

    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                <div>
                                    <h4 className="text-center text-secondary  mb-4">Cadastro de Cargo</h4>
                                    <Form onSubmit={onCargoSubmit}>
                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="cargoDescricao">
                                                <Form.Label>Descrição</Form.Label>
                                                <Form.Control type="name" placeholder="Ex: Vendedor" required maxLength = "25"/>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="cargoNivelAcesso">
                                                    <Form.Label>Nivel de Acesso</Form.Label>
                                                    <Form.Select defaultValue="1">
                                                        <option value="1">NÍVEL 1</option>
                                                        <option value="2">NÍVEL 2</option>
                                                        <option value="3">NÍVEL 3</option>
                                                        <option value="4">NÍVEL 4</option>
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