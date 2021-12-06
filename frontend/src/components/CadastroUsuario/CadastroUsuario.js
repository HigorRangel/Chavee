import React,{useContext} from "react";
import "./CadastroUsuario.css";
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import SecaoSombreada from "../SecaoSombreada/SecaoSombreada"
import Tabela from "../Tabela/Tabela"
import { UsuariosContext } from "../../context/UsuariosProvider";
import { CargosContext } from "../../context/CargosProvider";



const CadastroUsuario = ({props}) => {
    const {onUsuarioSubmit} = useContext(UsuariosContext);
    const { cargos } = useContext(CargosContext);

    
    let cargos_ativos = Object.values(cargos).filter((cargo) => cargo.situacao === 1)
    
    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">Cadastro de Usuário</h4>
                                    <Form onSubmit={onUsuarioSubmit}>
                                        <Row className="mb-3">
                                            <Col xs={2}>
                                                <Form.Group controlId="usuarioNome">
                                                    <Form.Label>Primeiro Nome</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: João" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="usuarioNomeMeio">
                                                    <Form.Label>Nome(s) do Meio</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: da Silva" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="usuarioNomeUltimo">
                                                    <Form.Label>Último Nome</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: Oliveira" maxLength = "25"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={5}>
                                                <Form.Group controlId="usuarioEmail">
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control required type="email" placeholder="Ex: oliveira.silva@hotmail.com" maxLength = "40"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={2}>
                                                <Form.Group as={Col} controlId="usuarioSenha">
                                                <Form.Label>Senha</Form.Label>
                                                <Form.Control required type="password"/>
                                                </Form.Group>
                                            </Col>
                                            
                                            <Col xs={2}>
                                                <Form.Group as={Col} controlId="usuarioConfirmaSenha">
                                                <Form.Label>Confirme a Senha</Form.Label>
                                                <Form.Control required type="password"/>
                                                </Form.Group>
                                            </Col>
                            
                                            
                                            
                                            <Col xs={3}>
                                                <Form.Group controlId="usuarioContato">
                                                    <Form.Label>Contato</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: (19) 9 9000-0000" maxLength = "11"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={4}>
                                                <Form.Group controlId="usuarioCargo">
                                                    <Form.Label>Cargo</Form.Label>
                                                    <Form.Select defaultValue="Administrador">
                                                        {cargos ? cargos_ativos.map((cargo) =><option value = {cargo.id}>{cargo.descricao}</option>): null}
                                                    </Form.Select>                                                
                                                </Form.Group>
                                            </Col>

                                            <Form.Text className="text-muted">
                                                A senha deve conter pelo menos 8 caracteres alfanuméricos.
                                            </Form.Text>
                                            
        
                                            </Row>
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
export default CadastroUsuario;