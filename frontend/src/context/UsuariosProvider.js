import React,{ useContext,useState, useEffect} from 'react';
import axios from 'axios';
import { LoginContext } from './LoginProvider';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
export const UsuariosContext = React.createContext();

const UsuariosProvider = (props) =>{
    const [usuarios,setUsuarios] = useState([]);
    const [usuariosFormatados,setUsuariosFormatados] = useState([]);
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    let history = useHistory();

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
                cargo:usuarios[i].descricao
            })
        }
        setUsuariosFormatados(usuariosNovos)
    },[usuarios])
    
    const onUsuarioSubmit = (event) =>{
        event.preventDefault();

        if(event.target.usuarioSenha.value === event.target.usuarioConfirmaSenha.value){
            if(event.target.usuarioSenha.value.length<=8){
                if(validator.isEmail(event.target.usuarioEmail.value)){
                    let object = {
                        primeiro_nome: event.target.usuarioNome.value,
                        nomes_meio: event.target.usuarioNomeMeio.value,
                        ultimo_nome: event.target.usuarioNomeUltimo.value,
                        email: event.target.usuarioEmail.value,
                        contato: event.target.usuarioContato.value,
                        senha: event.target.usuarioSenha.value,
                        cod_cargo:event.target.usuarioCargo.value
                    }

                    axios
                        .post('http://localhost:3003/usuario/inserir',object,{
                            headers: {
                              Authorization: token.token,
                            }
                        })
                        .then((response) => {
                            console.log(response.data);
                            history.push("/usuarios");
                        });
                }else{
                    console.log("Email inválido");
                }
            }else{
                console.log("Senhas precisa ser de no máximo 8 caracteres");
            }
        }else{
            console.log("Senhas não coincidem");
        }
    }

    const onUsuarioUpdateSubmit = (event) =>{
        event.preventDefault();

        if(event.target.usuarioSenha.value === event.target.usuarioConfirmaSenha.value){
            if(event.target.usuarioSenha.value.length<=8){
                if(validator.isEmail(event.target.usuarioEmail.value)){
                    let object = {
                        primeiro_nome: event.target.usuarioNome.value,
                        nomes_meio: event.target.usuarioNomeMeio.value,
                        ultimo_nome: event.target.usuarioNomeUltimo.value,
                        email: event.target.usuarioEmail.value,
                        senha: event.target.usuarioSenha.value,
                        contato: event.target.usuarioContato.value,
                        situacao:1,
                        cod_cargo:event.target.usuarioCargo.value
                    }

                    axios
                        .put('http://localhost:3003/usuario/atualizar/'+event.target.usuarioID.value,object,{
                            headers: {
                              Authorization: token.token,
                            }
                        })
                        .then((response) => {
                            if(event.target.usuarioID.value === token.id){
                                sessionStorage.removeItem('token')
                                history.push("/login");
                            }else{
                                history.push("/usuarios");
                            }
                        });
                }else{
                    console.log("Email inválido");
                }
            }else{
                console.log("Senhas precisa ser de no máximo 8 caracteres");
            }
        }else{
            console.log("Senhas não coincidem");
        }
    }

    return(
        <UsuariosContext.Provider value={{ usuarios: usuarios,usuariosFormatados:usuariosFormatados, onUsuarioSubmit:onUsuarioSubmit, onUsuarioUpdateSubmit:onUsuarioUpdateSubmit}}>
            {props.children}
        </UsuariosContext.Provider>
    )
};

export default UsuariosProvider
