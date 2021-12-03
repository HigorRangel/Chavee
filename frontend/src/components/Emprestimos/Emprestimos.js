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
                    {nome: "Código", proporcao: 10, alinhamento: "center"},
                    {nome: "Código do Imóvel", proporcao: 10 , alinhamento: "center"},
                    {nome: "Código da Chave", proporcao: 5, alinhamento: "center"},
                    {nome: "Endereço", proporcao: 20, alinhamento: "left"},
                    {nome: "Descrição", proporcao: 20, alinhamento: "left"},
                    {nome: "Nome do cliente", proporcao: 10, alinhamento: "left"},
                    {nome: "Data da Entrega", proporcao: 10, alinhamento: "center"},
                    {nome: "Data de Retirada", proporcao: 10, alinhamento: "center"},
                    {nome: "Ações",  proporcao: 10, alinhamento: "center"}
                    
                ]}
                registros={emprestimos}></Tabela>
            </div>
        </body>
    )
}
export default Emprestimos;