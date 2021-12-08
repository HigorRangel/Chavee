import React,{useContext} from "react";
import "./CadastroChave.css";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import PainelSombreado from "../PainelSombreado/PainelSombreado";
import { ChavesContext } from "../../context/ChavesProvider";
import { LoginContext } from "../../context/LoginProvider";
import { useHistory, useParams } from "react-router-dom";

const CadastroChave = ({props}) => {
    const {onChaveSubmit, onChaveUpdateSubmit, chaves} = useContext(ChavesContext);
    const {token} = useContext(LoginContext);
    let history = useHistory();

    const {id} = useParams();
    let updateScenario = false;
    let chave = id ? Object.values(chaves).find(chave => chave.id.toString() === id.toString()): null;

    if(token){
        if(token.nivel_acesso >3){
            history.push("/permissao");
        }

        if(id && !chave){
            history.push("/permissao");
        }
    }

    if(chave){
        if(token.nivel_acesso > 2){
            history.push("/permissao");

        }
        updateScenario= true;
    }


    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">{!updateScenario?"Cadastro de Chave":"Atualização de Chave"}</h4>
                                    <Form onSubmit={!updateScenario?onChaveSubmit:onChaveUpdateSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group controlId="chaveID"  className= "d-none">
                                                <Form.Control defaultValue={updateScenario?chave.id:null}></Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="usuarioID"  className= "d-none">
                                                <Form.Control defaultValue={updateScenario?chave.usuario:null}></Form.Control>
                                            </Form.Group>
                                            <Col xs={2}>
                                                <Form.Group controlId="formCodigoImovelCad">
                                                    <Form.Label>Código Imóvel</Form.Label>
                                                    <Form.Control required  defaultValue={updateScenario?chave.cod_imovel:null} type="text" placeholder="Ex: V1234" maxLength = "10"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={5}>
                                                <Form.Group controlId="formLogradouroCad">
                                                    <Form.Label>Logradouro</Form.Label>
                                                    <Form.Control required  defaultValue={updateScenario?chave.rua:null} type="text" placeholder="Ex: Rua das Maravilhas" maxLength = "100"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="formBairroCad">
                                                    <Form.Label>Bairro</Form.Label>
                                                    <Form.Control required type="text"  defaultValue={updateScenario?chave.bairro:null} placeholder="Ex: Jardim São Luiz" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="formCidadeCad">
                                                    <Form.Label>Cidade</Form.Label>
                                                    <Form.Control required type="text"  defaultValue={updateScenario?chave.cidade:null} placeholder="Ex: Americana" maxLength = "30"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Group controlId="formEstadoCad">
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control required type="text"  defaultValue={updateScenario?chave.estado:null} placeholder="Ex: SP" maxLength = "2"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group controlId="formNumeroCad">
                                                    <Form.Label>Número</Form.Label>
                                                    <Form.Control required type="text"  defaultValue={updateScenario?chave.numero:null} placeholder="Ex: 1234" maxLength = "11"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formComplementoCad">
                                                    <Form.Label>Complemento</Form.Label>
                                                    <Form.Control type="text"  defaultValue={updateScenario?chave.complemento:null} placeholder="Ex: Apto 25 - Bloco 43" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formObservacaoCad">
                                                    <Form.Label>Observações</Form.Label>
                                                    <Form.Control type="text" placeholder="Ex: Ao lado do supermercado" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formFinalidadeImovelCad">
                                                    <Form.Label>Finalidade do Imóvel</Form.Label>
                                                    <Form.Select  defaultValue={updateScenario?chave.finalidade:null}>
                                                        <option value={1}>Locação</option>
                                                        <option value={2}>Venda</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>                                          
                                        </Row>
                                        <Row className="my-3">
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formCategoriaImovelCad">
                                                    <Form.Label>Categoria do Imóvel</Form.Label>
                                                    <Form.Select  defaultValue={updateScenario?chave.categoria_imovel:null}>
                                                        <option value={1}>CASA RESIDENCIAL</option>
                                                        <option value={2}>APARTAMENTO</option>
                                                        <option value={3}>SALÃO COMERCIAL</option>
                                                        <option value={4}>SALÃO INDUSTRIAL</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formProprietarioCad">
                                                    <Form.Label>Proprietário</Form.Label>
                                                    <Form.Control required  defaultValue={updateScenario?chave.proprietario:null} type="text" placeholder="Ex: João da Silva Santos" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formContatoCad">
                                                    <Form.Label>Contato</Form.Label>
                                                    <Form.Control required  defaultValue={updateScenario?chave.contato:null} type="number" placeholder="Ex: 19995965421" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end me-4">
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="primary" type="submit">{!updateScenario?"Salvar Chave":"Atualizar Chave"}</Button>
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
export default CadastroChave;