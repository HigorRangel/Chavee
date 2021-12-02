import React, { useContext } from "react";
import "./Cargos.css";
import Tabela from "../Tabela/Tabela";
import { CargosContext } from "../../context/CargosProvider";

const Cargos = ({props}) => {
    const {cargos} = useContext(CargosContext);

    

    return(
        <body>
            <div className="conteudo">
                <h1>Cargos</h1>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 25},
                    {nome: "Nome do cargo", proporcao: 25},
                    {nome: "Nível de acesso", proporcao: 25},
                    {nome: "Ações", proporcao: 25},
                ]}
                registros={cargos}></Tabela>
            </div>
        </body>
    )
}
export default Cargos;