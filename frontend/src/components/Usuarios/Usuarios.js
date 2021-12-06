import React, { useContext } from "react";
import "./Usuarios.css";
import Tabela from "../Tabela/Tabela";
import { UsuariosContext } from "../../context/UsuariosProvider";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";
import { useHistory } from 'react-router-dom';
import { LoginContext } from "../../context/LoginProvider";

const Usuarios = ({props}) => {
    const {usuariosFormatados} = useContext(UsuariosContext);
    const {token} = useContext(LoginContext);
    let history = useHistory();

    if(token){
        if(token.nivel_acesso >1){
            history.push("/permissao");
        }
    }
    return(
        <body>
            <div className="conteudo">
            <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Usuários</h4>
                    <BotaoCadastro texto="Novo Usuário" link="/cadastro-usuario"></BotaoCadastro>
                </div>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Nome completo", proporcao: 25, alinhamento: "left" },
                    {nome: "Email", proporcao: 20, alinhamento: "left"},
                    {nome: "Contato", proporcao: 15, alinhamento: "center"},
                    {nome: "Cargo", proporcao: 10, alinhamento: "center"},
                    {nome: "Ações", proporcao: 5, alinhamento: "center"}
                    
                ]}
                registros={usuariosFormatados} linkUpdate={"/cadastro-usuario/"}></Tabela>
            </div>
        </body>
    )
}
export default Usuarios;