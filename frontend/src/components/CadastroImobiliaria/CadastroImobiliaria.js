import React from "react";
import "./CadastroImobiliaria.css";
import {Form, Button, Container, Row, Col} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"


const CadastroImobiliaria = ({props}) => {
    return(
        <div className="conteudo">
            <Container>
            <h4 className="text-center text-secondary  mb-4">Cadastro de Imobiliária</h4>
            <Row>
                <Col>
                <Form className="mx-3  mb-5">
                    <Row className="mb-3">
                        <Col xs={4}>
                            <Form.Group as={Col} controlId="formNomeFantasia">
                            <Form.Label>Nome Fantasia</Form.Label>
                            <Form.Control type="name" placeholder="Ex: Imobiliária Brasil" required maxLength = "30"/>
                            </Form.Group>
                        </Col>
                        
                        <Col xs={4}>
                            <Form.Group as={Col} controlId="formRazaoSocial">
                            <Form.Label>Razão Social</Form.Label>
                            <Form.Control type="name" placeholder="Ex: Imobiliária Brasil LTDA." required maxLength = "40"/>
                            </Form.Group>
                        </Col>

                        <Col xs={2}>
                            <Form.Group as={Col} controlId="formCNPJ">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="name" placeholder="Ex: 96.770.573/0001-73" required maxLength = "14"/>
                            </Form.Group>
                        </Col>

                        <Col xs={2}>
                            <Form.Group as={Col} controlId="Nome do Cargo Administrador">
                            <Form.Label>Cargo Administrador</Form.Label>
                            <Form.Control type="name" placeholder="Ex: Gerente de Vendas" required maxLength = "25"/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <PainelSombreado elemento={
                    <div>
                        <h5 className="text-center text-secondary  mb-4">Cadastro de Usuário Administrador</h5>
                            <Row className="mb-3">
                                <Col xs={2}>
                                    <Form.Group as={Col} controlId="formPrimeiroNome">
                                    <Form.Label>Primeiro Nome</Form.Label>
                                    <Form.Control type="name" placeholder="Ex: João" maxLength = "25"/>
                                    </Form.Group>
                                </Col>
                                
                                <Col xs={3}>
                                    <Form.Group as={Col} controlId="formNomeDoMeio">
                                    <Form.Label>Nome do Meio</Form.Label>
                                    <Form.Control required type="name" placeholder="Ex: da Silva" maxLength = "25"/>
                                    </Form.Group>
                                </Col>
        
                                <Col xs={2}>
                                    <Form.Group as={Col} controlId="formUltimoNome">
                                    <Form.Label>Ultimo Nome</Form.Label>
                                    <Form.Control required type="name" placeholder="Ex: Oliveira" maxLength = "25"/>
                                    </Form.Group>
                                </Col>
        
                                <Col xs={3}>
                                    <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control required type="email" placeholder="Ex: oliveira.silva@hotmail.com" maxLength = "40"/>
                                    </Form.Group>
                                </Col>

                                <Col xs={2}>
                                    <Form.Group as={Col} controlId="formContato">
                                    <Form.Label>Contato</Form.Label>
                                    <Form.Control required type="text" placeholder="Ex: (19) 9 9000-0000" maxLength = "11"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col xs={2}>
                                    <Form.Group as={Col} controlId="formSenha">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control required type="password"/>
                                    </Form.Group>
                                </Col>
                                
                                <Col xs={2}>
                                    <Form.Group as={Col} controlId="formConfirmaSenha">
                                    <Form.Label>Confirme a Senha</Form.Label>
                                    <Form.Control required type="passowrd"/>
                                    </Form.Group>
                                </Col>
                
                                <Form.Text className="text-muted">
                                    A senha deve conter pelo menos 8 caracteres alfanuméricos.
                                </Form.Text>
        
                            </Row>
                    </div>
                     
                    }></PainelSombreado>
                    
                    <Row className="justify-content-end me-0">
                        <Col xs={1}>
                            <Button variant="primary" type="submit">Cadastrar</Button>
                        </Col>
                    </Row>
                </Form>
                </Col>
             </Row>
            </Container>
        </div>
    )
}

export default CadastroImobiliaria;