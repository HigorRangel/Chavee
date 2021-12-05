import React,{ useContext,useState, useEffect} from 'react';
import axios from 'axios';
import { LoginContext } from './LoginProvider';
export const UsuariosContext = React.createContext();

const UsuariosProvider = (props) =>{
    const [usuarios,setUsuarios] = useState([]);
    const [usuariosFormatados,setUsuariosFormatados] = useState([]);
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
        if(token){
            const intervalId = setInterval(() => {
                axios
                .get('http://localhost:3003/usuario/listar/'+id)
                .then((response) => {
                    setUsuarios(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            }, 1000)

            return () => clearInterval(intervalId);
        }
    });

    useEffect(()=>{
        let usuariosNovos = []
        for(let i = 0; i<usuarios.length;i++){
            var nomesMeio = usuarios[i].nomes_meio ?? '';
            usuariosNovos.push({
                id:usuarios[i].id,
                nome_completo:usuarios[i].primeiro_nome+" " + nomesMeio + " " + usuarios[i].ultimo_nome,
                email:usuarios[i].email,
                contato:usuarios[i].contato,
                cargo:usuarios[i].descricao,
                situacao:usuarios[i].situacao
            })
        }
        setUsuariosFormatados(usuariosNovos)
    },[usuarios])
    
    const onUsuarioSubmit = (event) =>{}

    return(
        <UsuariosContext.Provider value={{ usuarios: usuarios,usuariosFormatados:usuariosFormatados, onUsuarioSubmit:onUsuarioSubmit}}>
            {props.children}
        </UsuariosContext.Provider>
    )
};

export default UsuariosProvider
