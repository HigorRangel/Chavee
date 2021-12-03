import React, { useContext } from "react";
import "./Imobiliarias.css";
import Tabela from "../Tabela/Tabela";
import { ImobiliariasContext } from "../../context/ImobiliariasProvider";

const Imobiliarias = ({props}) => {
    const {imobiliarias} = useContext(ImobiliariasContext);
    return(
        <body>
            <div className="conteudo">
                <h1>Imobiliárias</h1>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Nome fantasia", proporcao: 30, alinhamento: "left"},
                    {nome: "Razão Social", proporcao: 30, alinhamento: "left"},
                    {nome: "CNPJ", proporcao: 10, alinhamento: "center"},
                    {nome: "Data de Cadastro", proporcao: 10, alinhamento: "center"},
                    {nome: "Ações", proporcao: 10, alinhamento: "center"}
                ]}
                registros={imobiliarias}></Tabela>
            </div>
        </body>
    )
}
export default Imobiliarias;