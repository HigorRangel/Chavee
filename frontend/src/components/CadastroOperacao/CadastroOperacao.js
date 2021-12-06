import React,{useContext} from "react";
import "./CadastroOperacao.css";
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import { ChavesContext } from "../../context/ChavesProvider";



const CadastroOperacao = ({props}) => {
    const {onChaveSubmit} = useContext(ChavesContext);
    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">Cadastro de Operação</h4>
                                    <Form onSubmit={onChaveSubmit}>
                                        <Row className="mb-3">
                                            <Col xs={2}>
                                                <Form.Group as={Col} controlId="formTipoDocumentoCad">
                                                    <Form.Label>Tipo do Documento</Form.Label>
                                                    <Form.Select>
                                                        <option value={1}>CNH</option>
                                                        <option value={2}>RG</option>
                                                        <option value={3}>PASSAPORTE</option>
                                                        <option value={4}>RNE</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>      
                                            <Col xs={3}>
                                                <Form.Group controlId="formNumeroDocumentoCad">
                                                    <Form.Label>Número do Documento</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: 00.000.000-0" maxLength = "20"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="formPrevisaoEntrega">
                                                    <Form.Label>Previsão de Entrega</Form.Label>
                                                    <Form.Control required type="date"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={5}>
                                                <Form.Group controlId="formNomeCliente">
                                                    <Form.Label>Nome do Cliente</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: José da Silva Gonçalves Pereira" maxLength = "100"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group controlId="formDescricao">
                                                    <Form.Label>Descrição</Form.Label>
                                                    <Form.Control required as="textArea" placeholder="Ex: José da Silva Gonçalves Pereira" maxLength = "100"></Form.Control>
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
export default CadastroOperacao;