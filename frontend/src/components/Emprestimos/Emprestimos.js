import React, { useContext } from "react";
import "./Emprestimos.css";
import Tabela from "../Tabela/Tabela"
import { EmprestimosContext } from "../../context/EmprestimosProvider";

const Emprestimos = ({props}) => {
    const {emprestimos} = useContext(EmprestimosContext);
    return(
        <body>
            <div className="conteudo">
                <h1>Empréstimos</h1>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 10},
                    {nome: "Código do Imóvel", proporcao: 10 },
                    {nome: "Código da Chave", proporcao: 5},
                    {nome: "Endereço", proporcao: 20},
                    {nome: "Descrição", proporcao: 20},
                    {nome: "Nome do cliente", proporcao: 10},
                    {nome: "Data da Entrega", proporcao: 10},
                    {nome: "Data de Retirada", proporcao: 10},
                    {nome: "Ações",  proporcao: 10}
                    
                ]}
                registros={emprestimos}></Tabela>
            </div>
        </body>
    )
}
export default Emprestimos;