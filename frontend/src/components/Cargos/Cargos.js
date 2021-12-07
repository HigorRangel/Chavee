import React, { useContext } from "react";
import "./Cargos.css";
import Tabela from "../Tabela/Tabela";
import { CargosContext, deleteCargoHandler } from "../../context/CargosProvider";
import BotaoDelete from "../BotaoDelete/BotaoDelete";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";
import { useHistory } from 'react-router-dom';
import { LoginContext } from "../../context/LoginProvider";

const Cargos = ({props}) => {
    const {cargos, deleteCargoHandler} = useContext(CargosContext);
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
                    <h4 className="text-secondary">Cargos</h4>
                    <BotaoCadastro texto="Novo Cargo" link="/cadastro-cargo"></BotaoCadastro>
                </div>
                
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Nome do cargo", proporcao: 45, alinhamento: "left"},
                    {nome: "Nível de acesso", proporcao: 15, alinhamento: "center"},
                    {nome: "Situação", proporcao: 15, alinhamento: "center"},
                    {nome: "Ações", proporcao: 15, alinhamento: "center"},
                ]}
                registros={cargos} linkUpdate={"/cadastro-cargo/"} funcaoDelete={deleteCargoHandler}></Tabela>
            </div>
        </body>
    )
}
export default Cargos;