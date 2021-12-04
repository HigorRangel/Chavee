import React from "react";
import "./Login.css";
import {Form, Button, Container, Row, Col, Image} from "react-bootstrap";
import logoGrande from  "../../images/logo-grande.svg"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginProvider";
import { useHistory } from "react-router-dom";


const Login = (props) => {
    const { authUser } = useContext(LoginContext);

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    let [error, setError] = React.useState("");

    let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const object = {
      email: event.target[0].value,
      senha: event.target[1].value,
    };

    axios
      .post("http://localhost:3003/login", object)
      .then((response) => {
        if (response.status === 200) {
          authUser(response.data);
          setError("");

          setTimeout(() => {
            history.push("/dashboard");
          }, 200);
        } else {
          console.log("erro");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    }

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
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={12} className="mb-5">
                                            <Form.Group as={Col} controlId="formEmail">
                                                <Form.Control className="campoLogin" type="email" value={email} placeholder="E-mail"  required maxLength = "25" onChange={(e) => setEmail(e.target.value)}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group as={Col} controlId="formSenha">
                                                <Form.Control  className="campoLogin" type="password" value={senha} placeholder="Senha" required maxLength = "16" onChange={(e) => setSenha(e.target.value)}/>
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