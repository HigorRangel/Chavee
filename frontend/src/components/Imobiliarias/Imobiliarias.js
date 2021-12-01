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
                    {nome: "Código", proporcao: 10},
                    {nome: "Nome fantasia", proporcao: 30 },
                    {nome: "Razão Social", proporcao: 30},
                    {nome: "CNPJ", proporcao: 10},
                    {nome: "Data de Cadastro", proporcao: 10},
                    {nome: "Ações", proporcao: 10}
                ]}
                registros={imobiliarias}></Tabela>
            </div>
        </body>
    )
}
export default Imobiliarias;