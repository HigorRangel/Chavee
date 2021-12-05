import React,{ useContext,useState, useEffect} from 'react';
import axios from 'axios';
import { LoginContext } from './LoginProvider';
export const UsuariosContext = React.createContext();

const UsuariosProvider = (props) =>{
    const [usuarios,setUsuarios] = useState({});
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
        axios
            .get('http://localhost:3003/usuario/listar/'+id)
            .then((response) => {
                setUsuarios(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    
    const onUsuarioSubmit = (event) =>{}

    return(
        <UsuariosContext.Provider value={{ usuarios: usuarios, onUsuarioSubmit:onUsuarioSubmit}}>
            {props.children}
        </UsuariosContext.Provider>
    )
};

export default UsuariosProvider
