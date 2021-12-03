import React, { useContext } from "react";
import "./Chaves.css";
import Tabela from "../Tabela/Tabela"
import { ChavesContext } from "../../context/ChavesProvider";

const Chaves = ({props}) => {
    const {chaves} = useContext(ChavesContext);
    return(
        <body>
            <div className="conteudo">
                <h1>Chaves</h1>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Imóvel", proporcao: 10, alinhamento: "center" },
                    {nome: "Endereço", proporcao: 35, alinhamento: "left"},
                    {nome: "Situação", proporcao: 10, alinhamento: "center"},
                    {nome: "Funcionário", proporcao: 25, alinhamento: "center"},
                    {nome: "Ações",  proporcao: 10, alinhamento: "center"}
                    
                ]}
                registros={chaves}></Tabela>
            </div>
        </body>
    )
}
export default Chaves;