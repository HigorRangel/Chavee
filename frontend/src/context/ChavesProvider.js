import React,{ useState, useEffect, useContext} from 'react';
import { LoginContext } from './LoginProvider';
import axios from 'axios';
export const ChavesContext = React.createContext();

const ChavesProvider = (props) =>{
    const [chaves,setChaves] = useState({});
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }
    
    useEffect(()=>{
        axios
        .get('http://localhost:3003/chave/listar/'+id)
        .then((response) => {
            setChaves(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    });
    
    return(
        <ChavesContext.Provider value={{chaves: chaves}}>
            {props.children}
        </ChavesContext.Provider>
    )
};

export default ChavesProvider
