import React, { useContext } from "react";
import "./Usuarios.css";
import Tabela from "../Tabela/Tabela";
import { UsuariosContext } from "../../context/UsuariosProvider";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";

const Usuarios = ({props}) => {
    const {usuarios} = useContext(UsuariosContext);
    return(
        <body>
            <div className="conteudo">
            <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Usuários</h4>
                    <BotaoCadastro texto="Novo Usuário" link="/cadastro-usuario"></BotaoCadastro>
                </div>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Nome completo", proporcao: 10, alinhamento: "left" },
                    {nome: "Email", proporcao: 10, alinhamento: "left"},
                    {nome: "Contato", proporcao: 10, alinhamento: "center"},
                    {nome: "Cargo", proporcao: 10, alinhamento: "center"},
                    {nome: "Situação", proporcao: 10, alinhamento: "left"},
                    {nome: "Ações", proporcao: 10, alinhamento: "center"}
                    
                ]}
                registros={usuarios}></Tabela>
            </div>
        </body>
    )
}
export default Usuarios;