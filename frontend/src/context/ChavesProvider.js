import React,{ useState, useEffect, useContext} from 'react';
import { LoginContext } from './LoginProvider';
import axios from 'axios';
export const ChavesContext = React.createContext();

const ChavesProvider = (props) =>{
    const [chaves,setChaves] = useState([]);
    const [chavesFormatadas,setChavesFormatadas] = useState([]);

    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }
    
    useEffect(()=>{
        const intervalId = setInterval(() => {
            axios
            .get('http://localhost:3003/chave/listar/'+id)
            .then((response) => {
                setChaves(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

            
        }, 1000)

        return () => clearInterval(intervalId);
    });
    
    useEffect(()=>{
        let chavesNovas = []
        for(let i = 0; i<chaves.length;i++){
            chavesNovas.push({
                id:chaves[i].id,
                imovel:chaves[i].cod_imovel,
                endereco:chaves[i].rua+" "+chaves[i].numero+", "+chaves[i].bairro+ " "+ chaves[i].cidade,
                situacao:chaves[i].situacao,
                funcionario:chaves[i].funcionario
            })
        }
        setChavesFormatadas(chavesNovas)
    },[chaves])

    return(
        <ChavesContext.Provider value={{chaves: chaves, chavesFormatadas:chavesFormatadas}}>
            {props.children}
        </ChavesContext.Provider>
    )
};

export default ChavesProvider
