import React from "react";
import "./Usuarios.css";
import Tabela from "../Tabela/Tabela";

const Usuarios = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <h1>Usuários</h1>
                <Tabela colunas={[
                    {numero: 0, nome: "Código", proporcao: 10},
                    {numero: 1, nome: "Nome completo", proporcao: 10 },
                    {numero: 4, nome: "Email", proporcao: 10},
                    {numero: 5, nome: "Contato", proporcao: 10},
                    {numero: 6, nome: "Cargo", proporcao: 10},
                    {numero: 7, nome: "Situação", proporcao: 10},
                    {numero: 8, nome: "Ações", proporcao: 10}
                    
                ]}
                registros={[
                    [0, "HIGOR RANGEL","hirgo@gmail.com","12123451234", "Administrador", "Ativo",""]
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Usuarios;