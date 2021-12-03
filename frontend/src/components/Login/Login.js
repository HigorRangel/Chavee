import React from "react";
import "./Login.css";
import {Form, Button, Container, Row, Col, Image} from "react-bootstrap";


const Login = (props) => {
    return(
            <div className="body-login d-flex justify-content-center align-items-center">
                <Container>
                    <Row className={"d-flex justify-content-center"}>
                        <Col xs={6}>
                            <div className="p-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                <Form>
                                    <Row>
                                        <Col xs={12}>
                                            <Form.Group as={Col} controlId="formDescricao">
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control type="name" placeholder="Ex: Vendedor" required maxLength = "25"/>
                                            </Form.Group>
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