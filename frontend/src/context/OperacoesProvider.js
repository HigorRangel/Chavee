import React,{ useState, useEffect, useContext} from 'react';
import { LoginContext } from './LoginProvider';
import axios from 'axios';
export const OperacoesContext = React.createContext();

const OperacoesProvider = (props) =>{
    const [operacoes,setOperacoes] = useState({});
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
        axios
        .get('http://localhost:3003/operacao/listar/'+id)
        .then((response) => {
            setOperacoes(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    
    })
    
    return(
        <OperacoesContext.Provider value={{ operacoes: operacoes}}>
            {props.children}
        </OperacoesContext.Provider>
    )
};

export default OperacoesProvider
