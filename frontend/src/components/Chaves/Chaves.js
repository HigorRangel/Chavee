import React, { useContext } from "react";
import "./Chaves.css";
import Tabela from "../Tabela/Tabela"
import { ChavesContext } from "../../context/ChavesProvider";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";

const Chaves = ({props}) => {
    const {chavesFormatadas, deleteChaveHandler} = useContext(ChavesContext);

    return(
        <body>
            <div className="conteudo">
                <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Chaves</h4>
                    <BotaoCadastro texto="Nova Chave" link="/cadastro-chave"></BotaoCadastro>
                </div>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Imóvel", proporcao: 10, alinhamento: "center" },
                    {nome: "Endereço", proporcao: 35, alinhamento: "left"},
                    {nome: "Situação", proporcao: 10, alinhamento: "center"},
                    {nome: "Funcionário", proporcao: 25, alinhamento: "center"},
                    {nome: "Ações",  proporcao: 10, alinhamento: "center"}
                    
                ]}
                registros={chavesFormatadas} funcaoDelete={deleteChaveHandler} linkUpdate={"/cadastro-chave/"}></Tabela>
            </div>
        </body>
    )
}
export default Chaves;