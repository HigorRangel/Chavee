import React, { useContext } from "react";
import "./Operacoes.css";
import Tabela from "../Tabela/Tabela"
import { OperacoesContext } from "../../context/OperacoesProvider";
import { LoginContext } from "../../context/LoginProvider";
import { useHistory } from "react-router-dom";


const Operacoes = ({props}) => {
    const {operacoesFormatadas} = useContext(OperacoesContext);
    const {token} = useContext(LoginContext);
    let history = useHistory();
    
    if(token){
        if(token.nivel_acesso >2){
            history.push("/permissao");
        }
    }

    return(
        <body>
            <div className="conteudo">
            <div className=" mt-3  d-flex justify-content-between align-items-center">
                    <h4 className="text-secondary">Empréstimos</h4>
                </div>
                <Tabela colunas={[
                    {nome: "Código", proporcao: 5, alinhamento: "center"},
                    {nome: "Código do Imóvel", proporcao: 10 , alinhamento: "center"},
                    {nome: "Código da Chave", proporcao: 5, alinhamento: "center"},
                    {nome: "Endereço", proporcao: 20, alinhamento: "left"},
                    {nome: "Descrição", proporcao: 20, alinhamento: "left"},
                    {nome: "Nome do cliente", proporcao: 10, alinhamento: "left"},
                    {nome: "Data da Entrega", proporcao: 10, alinhamento: "center"},
                    {nome: "Data da Devolução", proporcao: 10, alinhamento: "center"},
                    {nome: "Situação", proporcao: 5, alinhamento: "center"},
                    {nome: "Ações",  proporcao: 10, alinhamento: "center"}
                    
                ]}
                registros={operacoesFormatadas} linkOperacao={"/cadastro-operacao/"}></Tabela>
            </div>
        </body>
    )
}
export default Operacoes;