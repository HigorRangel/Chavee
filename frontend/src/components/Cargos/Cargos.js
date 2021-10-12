import React from "react";
import "./Cargos.css";
import Tabela from "../Tabela/Tabela";

const Cargos = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <h1>Cargos</h1>
                <Tabela colunas={[
                    {numero: 0, nome: "Código", proporcao: 25},
                    {numero: 1, nome: "Nome do cargo", proporcao: 50 },
                    {numero: 2, nome: "Nível de acesso", proporcao: 25},
                    
                ]}
                registros={[
                    [0, "Administrador", "1"],
                    [1, "Vendedor", "2"],
                    [2, "Funcionário", "3"],
                    [3, "Visitante", "4"]
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Cargos;