import React,{useContext} from "react";
import "./CadastroImobiliaria.css";
import {Form, Button, Container, Row, Col, Alert} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import { ImobiliariasContext } from "../../context/ImobiliariasProvider";
import { useParams,useHistory } from "react-router-dom";
import { LoginContext } from "../../context/LoginProvider";

const CadastroImobiliaria = ({props}) => {
    const {imobiliarias,onImobiliariaSubmit, onImobiliariaUpdate} = useContext(ImobiliariasContext);
    const {token} = useContext(LoginContext);
    const {id} = useParams();

    let history = useHistory();
    let updateScenario = false;
    let imobiliaria = id ?Object.values(imobiliarias).find(imobiliaria => imobiliaria.id.toString() === id.toString()):null;

    
    if(token){
        if(token.nivel_acesso >1){
            history.push("/permissao");
        }
    }

    if(imobiliaria){
        if(id != token.id_imobiliaria){
            history.push("/permissao");
        }
        updateScenario = true;
    }
    

    return(
        <div className="conteudo">
            <Container className="mt-5">
            <h4 className="text-center text-secondary  mb-4">{updateScenario? "Atualizar dados da imobiliária": "Cadastro de imobiliária"}</h4>
            <Row>
                <Col>
                <Form onSubmit={updateScenario? onImobiliariaUpdate : onImobiliariaSubmit }className="mx-3  mb-5">
                    <Alert className="d-none" id="alertaErro" variant={"danger"}></Alert>


                    <Row className="mb-3">
                        <Col xs={4}>
                            <Form.Group as={Col} controlId="formNomeFantasia">
                            <Form.Label>Nome Fantasia</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Imobiliária Brasil" defaultValue={imobiliaria ? imobiliaria.nome_fantasia : null}  required maxLength = "30"/>
                            </Form.Group>
                        </Col>
                        
                        <Col xs={4}>
                            <Form.Group as={Col} controlId="formRazaoSocial">
                            <Form.Label>Razão Social</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Imobiliária Brasil LTDA." defaultValue={imobiliaria ? imobiliaria.razao_social : null} required maxLength = "40"/>
                            </Form.Group>
                        </Col>

                        <Col xs={4}>
                            <Form.Group as={Col} controlId="formCNPJ">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="text" placeholder="Ex: 96.770.573/0001-73" defaultValue={imobiliaria ? imobiliaria.cnpj : null} required maxLength = "14"/>
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    
                    {updateScenario? null : <div>
                        <PainelSombreado  elemento={
                        <div>
                            <h5 className="text-center text-secondary  mb-4">Cadastro de Usuário Administrador</h5>
                                <Row className="mb-3">
                                    <Col xs={2}>
                                        <Form.Group as={Col} controlId="formPrimeiroNome">
                                        <Form.Label>Primeiro Nome</Form.Label>
                                        <Form.Control type="text" placeholder="Ex: João" maxLength = "25"/>
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col xs={3}>
                                        <Form.Group as={Col} controlId="formNomeDoMeio">
                                        <Form.Label>Nome(s) do Meio</Form.Label>
                                        <Form.Control type="text" placeholder="Ex: da Silva" maxLength = "25"/>
                                        </Form.Group>
                                    </Col>
            
                                    <Col xs={2}>
                                        <Form.Group as={Col} controlId="formUltimoNome">
                                        <Form.Label>Ultimo Nome</Form.Label>
                                        <Form.Control required type="text" placeholder="Ex: Oliveira" maxLength = "25"/>
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
                                    {updateScenario? null: <Col xs={2}>
                                    <Form.Group as={Col} controlId="formCargoAdministrador">
                                    <Form.Label>Cargo Administrador</Form.Label>
                                    <Form.Control type="text" placeholder="Ex: Gerente de Vendas" required maxLength = "25"/>
                                    </Form.Group>
                                    </Col>}
                                    <Col>
                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formSenha">
                                                <Form.Label>Senha</Form.Label>
                                                <Form.Control required type="password"/>
                                                </Form.Group>
                                            </Col>
                                            
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formConfirmaSenha">
                                                <Form.Label>Confirme a Senha</Form.Label>
                                                <Form.Control required type="password"/>
                                                </Form.Group>
                                            </Col>
                                            <Form.Text className="text-muted">
                                                A senha deve conter pelo menos 8 caracteres alfanuméricos.
                                            </Form.Text>
                        
                                        </Row>
                                    </Col>

                                </Row>
                        </div>
                        
                        }></PainelSombreado>
                    </div>}
                    

                    <Row className="justify-content-end me-0">
                        <Col xs={3} className="d-flex justify-content-end me-0 p-0">
                            <Button className="px-5" variant="primary" type="submit">{updateScenario? "Atualizar": "Cadastrar"}</Button>
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