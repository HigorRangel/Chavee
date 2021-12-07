import React,{useContext} from "react";
import "./CadastroCargo.css";
import {Form, Button, Container, Row, Col, Image} from "react-bootstrap";
import PainelSombreado from "../PainelSombreado/PainelSombreado";
import niveisAcesso from "../../images/niveis-acesso.png";
import { CargosContext } from "../../context/CargosProvider";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { LoginContext } from "../../context/LoginProvider";



const CadastroCargo = ({props}) => {
    const {onCargoSubmit, cargos, onCargoUpdateSubmit} = useContext(CargosContext);
    const {id} = useParams();
    const {token} = useContext(LoginContext);
    let history = useHistory();

    let updateScenario = false;
    let cargo = id ? Object.values(cargos).find(cargo => cargo.id.toString() === id.toString()): null;

    if(token){
        if(token.nivel_acesso >1){
            history.push("/permissao");
        }

        if(id && !cargo){
            history.push("/permissao");
        }
    }

    if(cargo){
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
                                    <h4 className="text-center text-secondary  mb-4">{!updateScenario?"Cadastro de Cargo":"Atualização de Cargo"}</h4>
                                    <Form onSubmit={!updateScenario?onCargoSubmit:onCargoUpdateSubmit}>
                                        
                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="cargoDescricao">
                                                <Form.Label>Descrição</Form.Label>
                                                <Form.Control type="name" placeholder="Ex: Vendedor" defaultValue={cargo ? cargo.descricao : null} required maxLength = "25"/>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="cargoNivelAcesso">
                                                    <Form.Label>Nivel de Acesso</Form.Label>
                                                    <Form.Select defaultValue={cargo ? cargo.nivel_acesso : null}>
                                                        <option value={1}>NÍVEL 1</option>
                                                        <option value={2}>NÍVEL 2</option>
                                                        <option value={3}>NÍVEL 3</option>
                                                        <option value={4}>NÍVEL 4</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group controlId="cargoID">
                                            <Form.Control className= "invisible" defaultValue={updateScenario?cargo.id:null}></Form.Control>
                                        </Form.Group>
                                        <div className="m-3">
                                            <Image src={niveisAcesso} fluid />
                                        </div>
                                        <Row className="justify-content-end me-4">
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="primary" type="submit">{!updateScenario?"Salvar Cargo":"Atualizar Cargo"}</Button>
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