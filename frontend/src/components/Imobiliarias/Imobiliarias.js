import React, { useContext } from "react";
import "./Imobiliarias.css";
import Tabela from "../Tabela/Tabela";
import { ImobiliariasContext } from "../../context/ImobiliariasProvider";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";

const Imobiliarias = ({props}) => {
    const {imobiliarias} = useContext(ImobiliariasContext);
    return(
        <body>
            <div className="conteudo">
            <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Imobiliárias</h4>
                    <BotaoCadastro texto="Nova Imobiliária" link="/cadastro-cargo"></BotaoCadastro>
                </div>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Nome fantasia", proporcao: 30, alinhamento: "left"},
                    {nome: "Razão Social", proporcao: 30, alinhamento: "left"},
                    {nome: "CNPJ", proporcao: 10, alinhamento: "center"},
                    {nome: "Data de Cadastro", proporcao: 10, alinhamento: "center"},
                    {nome: "Ações", proporcao: 10, alinhamento: "center"}
                ]}
                registros={imobiliarias} linkUpdate={"/cadastro-imobiliaria/"}></Tabela>
            </div>
        </body>
    )
}
export default Imobiliarias;