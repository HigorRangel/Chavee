import React,{ useState, useEffect, useContext} from 'react';
import { LoginContext } from './LoginProvider';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export const OperacoesContext = React.createContext();

const OperacoesProvider = (props) =>{
    const [operacoes,setOperacoes] = useState([]);
    const [operacoesFormatadas,setOperacoresFormatadas] = useState([]);
    
    const {token} = useContext(LoginContext);
    let history = useHistory();

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
        if(token){
            const intervalId = setInterval(() => {
            axios
            .get('http://localhost:3003/operacao/listar/'+id)
            .then((response) => {
                setOperacoes(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
            },1000)

            return () => clearInterval(intervalId);
        }
    })
    
    useEffect(()=>{
        let operacoesNovas = []
        for(let i = 0; i<operacoes.length;i++){
            operacoesNovas.push({
                id:operacoes[i].id,
                imovel:operacoes[i].cod_imovel,
                chave:operacoes[i].id_chave,
                endereco:operacoes[i].endereco,
                descricao:operacoes[i].descricao_retirada,
                nome_cliente:operacoes[i].nome_cliente,
                data_entrega:operacoes[i].entrega_prevista,
                data_devolucao:operacoes[i].data_devolucao,
                situacao:operacoes[i].situacao
            })
        }
        setOperacoresFormatadas(operacoesNovas)
    },[operacoes])

    const onEmprestimoSubmit = (event) =>{
        event.preventDefault();
        let object = {
            tipo_doc:event.target.formTipoDocumentoCad.value,
            documento:event.target.formNumeroDocumentoCad.value,
            nome_cliente:event.target.formNomeCliente.value,
            descricao_retirada:event.target.formDescricao.value,
            entrega_prevista:event.target.formPrevisaoEntrega.value,
            cod_chave:event.target.formChaveID.value,
            cod_usuario:token.id
        }
        
          axios
          .post("http://localhost:3003/operacao/inserir",object,{
              headers: {
                Authorization: token.token,
              }
          })
          .then((response) => {
            object = {
                situacao:0
            }
            axios
                .put("http://localhost:3003/chave/situacao/"+event.target.formChaveID.value,object,{
                    headers: {
                      Authorization: token.token,
                    }
                })
                .then((response) =>{
                    history.push("/operacoes");
                })
          });
    }

    const onDevolucaoSubmit = (event) =>{
        event.preventDefault();
        let object = {
            descricao_devolucao:event.target.formDescricao.value
        }

        axios
            .put("http://localhost:3003/operacao/atualizar/"+event.target.formOperacaoID.value,object,{
                headers: {
                  Authorization: token.token,
                }
            })
            .then((response) => {
                object = {
                    situacao:1
                }
                axios
                    .put("http://localhost:3003/chave/situacao/"+event.target.formChaveID.value,object,{
                        headers: {
                          Authorization: token.token,
                        }
                    })
                    .then((response) =>{
                        history.push("/operacoes");
                    })
                
            });
    }

    return(
        <OperacoesContext.Provider value={{ operacoes: operacoes, operacoesFormatadas:operacoesFormatadas,
        onEmprestimoSubmit: onEmprestimoSubmit, onDevolucaoSubmit: onDevolucaoSubmit}}>
            {props.children}
        </OperacoesContext.Provider>
    )
};

export default OperacoesProvider
