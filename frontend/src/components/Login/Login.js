import React from "react";
import "./Login.css";
import {Form, Button, Container, Row, Col, Image} from "react-bootstrap";
import logoGrande from  "../../images/logo-grande.svg"
import { faUser } from '@fortawesome/free-solid-svg-icons'



const Login = (props) => {
    return(
            <div className="body-login d-flex justify-content-center align-items-center">
                <Container>
                    <Row className={"d-flex justify-content-center"}>
                        <Col xs={12}>
                            <div className="d-flex justify-content-center mb-5">
                                <img src={logoGrande} alt="Logo Chavee" width="500"></img>
                            </div>
                        </Col>
                        
                        
                        <Col xs={5}>
                            <div id="divFundoLogin" className="p-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
                                <h4 className="text-center text-primary">LOGIN</h4>
                                <Form>
                                    <Row>
                                        <Col xs={12} className="mb-5">
                                            <Form.Group as={Col} controlId="formEmail">
                                                <Form.Control className="campoLogin" type="email" placeholder="E-mail" required maxLength = "25"/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group as={Col} controlId="formSenha">
                                                <Form.Control  className="campoLogin" type="password" placeholder="Senha" required maxLength = "16"/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} className="d-flex justify-content-end">
                                                <Button className="mt-5 px-5" variant="primary" type="submit">Login</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    
                    </Row>
                    
                </Container>

            </div>
        
    )
}
export default Login;