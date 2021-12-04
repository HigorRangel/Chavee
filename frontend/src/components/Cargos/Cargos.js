import React, { useContext } from "react";
import "./Cargos.css";
import Tabela from "../Tabela/Tabela";
import { CargosContext, deleteCargoHandler } from "../../context/CargosProvider";
import BotaoDelete from "../BotaoDelete/BotaoDelete";
import BotaoCadastro from "../BotaoCadastro/BotaoCadastro";

const Cargos = ({props}) => {
    const {cargos, deleteCargoHandler} = useContext(CargosContext);

    return(
        <body>
            <div className="conteudo">
                <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Cargos</h4>
                    <BotaoCadastro texto="Novo Cargo" link="/cadastro-cargo"></BotaoCadastro>
                </div>
                
                <Tabela colunas={[
                    {nome: "Código", proporcao: 20, alinhamento: "center"},
                    {nome: "Nome do cargo", proporcao: 60, alinhamento: "left"},
                    {nome: "Nível de acesso", proporcao: 10, alinhamento: "center"},
                    {nome: "Situação", proporcao: 10, alinhamento: "center"},
                    {nome: "Ações", proporcao: 10, alinhamento: "center"},
                ]}
                registros={cargos} linkUpdate={"/cadastro-cargo/"}></Tabela>
            </div>
        </body>
    )
}
export default Cargos;