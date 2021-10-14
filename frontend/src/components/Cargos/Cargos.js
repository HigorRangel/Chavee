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
                    {numero: 1, nome: "Nome do cargo", proporcao: 50},
                    {numero: 2, nome: "Nível de acesso", proporcao: 25},
                    
                ]}
                registros={[
                    [{0:0}, {1:"Administrador"}, {2:"1"}],
                    [{0:1}, {1:"Vendedor"}, {2:"2"}],
                    [{0:2}, {1:"Funcionário"}, {2:"3"}],
                    [{0:3}, {1:"Visitante"}, {2:"4"}],
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Cargos;