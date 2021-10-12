import React from "react";
import "./Imobiliarias.css";
import Tabela from "../Tabela/Tabela";

const Imobiliarias = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <h1>Imobiliárias</h1>
                <Tabela colunas={[
                    {numero: 0, nome: "Código", proporcao: 10},
                    {numero: 1, nome: "Nome fantasia", proporcao: 10 },
                    {numero: 2, nome: "Razão Social", proporcao: 10},
                    {numero: 3, nome: "CNPJ", proporcao: 10},
                    {numero: 4, nome: "Data de Cadastro", proporcao: 10},
                    {numero: 6, nome: "Ações", proporcao: 10}
                    
                ]}
                registros={[
                    [0, "IMOBILIÁRIA","IMOBILIÁRIA","58740076000133", "01/01/1969", ""]
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Imobiliarias;