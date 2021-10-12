import React from "react";
import "./Emprestimos.css";
import Tabela from "../Tabela/Tabela"

const Emprestimos = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <h1>Empréstimos</h1>
                <Tabela colunas={[
                    {numero: 0, nome: "Código", proporcao: 5},
                    {numero: 1, nome: "Código do Imóvel", proporcao: 5 },
                    {numero: 2, nome: "Código da Chave", proporcao: 5},
                    {numero: 3, nome: "Endereço", proporcao: 10},
                    {numero: 4, nome: "Descrição", proporcao: 10},
                    {numero: 5, nome: "Nome do cliente", proporcao: 10},
                    {numero: 6, nome: "Data da Entrega", proporcao: 10},
                    {numero: 7, nome: "Data de Retirada", proporcao: 10},
                    {numero: 8, nome: "Ações",  proporcao: 20}
                    
                ]}
                registros={[
                    [0, "V345", "485C", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "Teste", "GABRIEL","01/01/1969", "01/01/1969", "  "],
                    [0, "V345", "485C", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "Teste", "GABRIEL","01/01/1969", "01/01/1969", "  "],
                    [0, "V345", "485C", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "Teste", "GABRIEL","01/01/1969", "01/01/1969", "  "],
                    [0, "V345", "485C", "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", "Teste", "GABRIEL","01/01/1969", "01/01/1969", "  "]
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Emprestimos;