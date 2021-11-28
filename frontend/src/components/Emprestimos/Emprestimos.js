import React from "react";
import "./Emprestimos.css";
import Tabela from "../Tabela/Tabela"

const Emprestimos = ({props}) => {
    return(
        <body>
            <div className="conteudo">
                <h1>Empréstimos</h1>
                <Tabela colunas={[
                    {numero: 0, nome: "Código", proporcao: 10},
                    {numero: 1, nome: "Código do Imóvel", proporcao: 10 },
                    {numero: 2, nome: "Código da Chave", proporcao: 5},
                    {numero: 3, nome: "Endereço", proporcao: 20},
                    {numero: 4, nome: "Descrição", proporcao: 20},
                    {numero: 5, nome: "Nome do cliente", proporcao: 10},
                    {numero: 6, nome: "Data da Entrega", proporcao: 10},
                    {numero: 7, nome: "Data de Retirada", proporcao: 10},
                    {numero: 8, nome: "Ações",  proporcao: 10}
                    
                ]}
                registros={[
                    {0:0, 1:"V345", 2:"485C", 3:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 4:"Teste", 5:"GABRIEL",6:"01/01/1969", 7:"01/01/1969", 8:"  "},
                    {0:1, 1:"V345", 2:"485C", 3:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 4:"Teste", 5:"GABRIEL",6:"01/01/1969", 7:"01/01/1969", 8:"  "},
                    {0:2, 1:"V345", 2:"485C", 3:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 4:"Teste", 5:"GABRIEL",6:"01/01/1969", 7:"01/01/1969", 8:"  "},
                    {0:3, 1:"V345", 2:"485C", 3:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana", 4:"Teste", 5:"GABRIEL",6:"01/01/1969", 7:"01/01/1969", 8:"  "},
                ]}></Tabela>
            </div>
        </body>
    )
}
export default Emprestimos;