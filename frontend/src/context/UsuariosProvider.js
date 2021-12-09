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
                            history.push("/usuarios");
                        });
                }else{
                    event.target.firstChild.classList.remove("d-none");
                    event.target.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
                    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
                    '</svg>' + 
                    '  E-mail inválido.';
                }
            }else{
                event.target.firstChild.classList.remove("d-none");
                event.target.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
                '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
                '</svg>' + 
                '  Senhas precisa ser de no máximo 8 caracteres';
            }
        }else{
            event.target.firstChild.classList.remove("d-none");
                event.target.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
                '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
                '</svg>' + 
                '  Senhas não coincidem';
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
                            if(event.target.usuarioID.value == token.id){
                                sessionStorage.removeItem('token')
                                history.push("/login");
                            }else{
                                history.push("/usuarios");
                            }
                        });
                    }else{
                        event.target.firstChild.classList.remove("d-none");
                        event.target.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
                        '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
                        '</svg>' + 
                        '  E-mail inválido.';
                    }
                }else{
                    event.target.firstChild.classList.remove("d-none");
                    event.target.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
                    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
                    '</svg>' + 
                    '  Senhas precisa ser de no máximo 8 caracteres';
                }
            }else{
                event.target.firstChild.classList.remove("d-none");
                    event.target.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' +
                    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' +
                    '</svg>' + 
                    '  Senhas não coincidem';
            }
    }

    return(
        <UsuariosContext.Provider value={{ usuarios: usuarios,usuariosFormatados:usuariosFormatados, onUsuarioSubmit:onUsuarioSubmit, onUsuarioUpdateSubmit:onUsuarioUpdateSubmit}}>
            {props.children}
        </UsuariosContext.Provider>
    )
};

export default UsuariosProvider
