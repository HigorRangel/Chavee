import React,{useContext} from "react";
import "./CadastroOperacao.css";
import {Form, Button, Container, Row, Col } from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import { ChavesContext } from "../../context/ChavesProvider";
import { OperacoesContext } from "../../context/OperacoesProvider";
import { useHistory, useParams } from "react-router-dom";
import { LoginContext } from "../../context/LoginProvider";



const CadastroOperacao = ({props}) => {
    const {chaves} = useContext(ChavesContext);
    const {operacoes, onEmprestimoSubmit, onDevolucaoSubmit} = useContext(OperacoesContext);
    const {token} = useContext(LoginContext);
    let history = useHistory();
    const {id_chave,id_operacao} = useParams();

    let emprestimoScenario = true;
    let chave = id_chave ? Object.values(chaves).find(chave => chave.id.toString() === id_chave.toString()): null;
    let operacao = id_operacao ? Object.values(operacoes).find(operacao => operacao.id.toString() === id_operacao.toString()): null;

    if(token){
        if(token.nivel_acesso >2){
            history.push("/permissao");
        }
    }

    if(id_operacao && !operacao){
        history.push("/erro");
    }

    if(id_chave && !chave){
        history.push("/erro");
    }

    if(id_chave && !id_operacao){
        if(chave.situacao !== 1){
        history.push("/erro");
        }
    }

    if (operacao){
        emprestimoScenario=false
        
    }

    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">{emprestimoScenario ? "Realizar Empréstimo": "Realizar Devolução"}</h4>
                                    {emprestimoScenario ? 
                                    <Form onSubmit ={onEmprestimoSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group controlId="formChaveID"  className= "d-none">
                                                <Form.Control defaultValue={chave? chave.id: null}></Form.Control>
                                            </Form.Group>
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
                                                    <Form.Control required as="textarea" placeholder="Ex: José da Silva Gonçalves Pereira" maxLength = "100"></Form.Control>
                                                </Form.Group>
                                            </Col>
                          
                                        </Row>
                                        <Row className="justify-content-end me-4">
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="primary" type="submit">Realizar Empréstimo</Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                    : 
                                    <Form onSubmit={onDevolucaoSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group controlId="formChaveID"  className= "d-none">
                                                <Form.Control defaultValue={chave? chave.id: null}></Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formOperacaoID"  className= "d-none">
                                                <Form.Control defaultValue={operacao? operacao.id: null}></Form.Control>
                                            </Form.Group>
                                            <Col xs={12}>
                                                <Form.Group controlId="formDescricao">
                                                    <Form.Label>Descrição da Devolução</Form.Label>
                                                    <Form.Control required as="textarea" placeholder="Ex: Imóvel com vista boa, vizinhos barulhentos." maxLength = "100"></Form.Control>
                                                </Form.Group>
                                            </Col>
                          
                                        </Row>
                                        <Row className="justify-content-end me-4">
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="primary" type="submit">Realizar Devolução</Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>}
                                    
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