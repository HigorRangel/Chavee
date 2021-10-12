import React from "react";
import "./Chaves.css";
import Tabela from "../Tabela/Tabela"

const Chaves = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <h1>Chaves</h1>
                <Tabela colunas={[
                    {numero: 0, nome: "Código", proporcao: 10},
                    {numero: 1, nome: "Imóvel", proporcao: 10 },
                    {numero: 2, nome: "Endereço", proporcao: 35},
                    {numero: 3, nome: "Situação", proporcao: 10},
                    {numero: 4, nome: "Funcionário", proporcao: 15},
                    {numero: 5, nome: "Ações",  proporcao: 20}
                    
                ]}
                registros={[
                    [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "],
                    [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "],
                    [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "],
                    [0, "V345", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "ATIVO", "HIGOR", "  "]
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Chaves;