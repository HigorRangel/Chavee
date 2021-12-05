import React,{ useState, useEffect, useContext} from 'react';
import { LoginContext } from './LoginProvider';
import axios from 'axios';
export const OperacoesContext = React.createContext();

const OperacoesProvider = (props) =>{
    const [operacoes,setOperacoes] = useState([]);
    const [operacoesFormatadas,setOperacoresFormatadas] = useState([]);
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
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
                data_retirada:operacoes[i].data_retirada,
                situacao:operacoes[i].situacao
            })
        }
        setOperacoresFormatadas(operacoesNovas)
    },[operacoes])

    return(
        <OperacoesContext.Provider value={{ operacoes: operacoes, operacoesFormatadas:operacoesFormatadas}}>
            {props.children}
        </OperacoesContext.Provider>
    )
};

export default OperacoesProvider
