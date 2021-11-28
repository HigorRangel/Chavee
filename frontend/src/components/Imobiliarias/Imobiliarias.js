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
                    {numero: 1, nome: "Nome fantasia", proporcao: 30 },
                    {numero: 2, nome: "Razão Social", proporcao: 30},
                    {numero: 3, nome: "CNPJ", proporcao: 10},
                    {numero: 4, nome: "Data de Cadastro", proporcao: 10},
                    {numero: 6, nome: "Ações", proporcao: 10}
                    
                ]}
                registros={[
                    {0:0, 1:"IMOBILIÁRIA",2:"IMOBILIÁRIA",3:"58740076000133", 4:"01/01/1969", 5:" "}
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Imobiliarias;