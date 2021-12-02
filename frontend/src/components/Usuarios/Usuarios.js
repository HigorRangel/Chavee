import React, { useContext } from "react";
import "./Usuarios.css";
import Tabela from "../Tabela/Tabela";
import { UsuariosContext } from "../../context/UsuariosProvider";

const Usuarios = ({props}) => {
    const {usuarios} = useContext(UsuariosContext);
    return(
        <body>
            <div className="conteudo">
                <h1>Usuários</h1>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10},
                    {nome: "Nome completo", proporcao: 10 },
                    {nome: "Email", proporcao: 10},
                    {nome: "Contato", proporcao: 10},
                    {nome: "Cargo", proporcao: 10},
                    {nome: "Situação", proporcao: 10},
                    {nome: "Ações", proporcao: 10}
                    
                ]}
                registros={usuarios}></Tabela>
            </div>
        </body>
    )
}
export default Usuarios;