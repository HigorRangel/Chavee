import React,{ useState, useEffect,useContext} from 'react';
import validator from 'validator';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {LoginContext} from './LoginProvider';
export const ImobiliariasContext = React.createContext();

const ImobiliariasProvider = (props) =>{
    const [imobiliarias,setImobiliarias] = useState([]);
    const {token} = useContext(LoginContext);

    let history = useHistory();

    useEffect(()=>{
        if(token){
            const intervalId = setInterval(() => {
            axios
                .get('http://localhost:3003/imobiliaria/listar')
                .then((response) =>{
                    setImobiliarias(response.data);
                })
            },1000)

            return () => clearInterval(intervalId);
        }
    });
    
    const onImobiliariaSubmit = (event) =>{
        event.preventDefault();
        if(event.target.formSenha.value === event.target.formConfirmaSenha.value){
            if(event.target.formSenha.value.length<=8){
                if(validator.isEmail(event.target.formEmail.value)){
                    let object = {
                        nome_fantasia: event.target.formNomeFantasia.value,
                        razao_social: event.target.formRazaoSocial.value,
                        cnpj: event.target.formCNPJ.value,
                        nome_cargo: event.target.formCargoAdministrador.value,
                        primeiro_nome: event.target.formPrimeiroNome.value,
                        nomes_meio: event.target.formNomeDoMeio.value,
                        ultimo_nome: event.target.formUltimoNome.value,
                        email: event.target.formEmail.value,
                        contato: event.target.formContato.value,
                        senha: event.target.formSenha.value
                    }

                    axios
                        .post('http://localhost:3003/imobiliaria/inserir',object)
                        .then((response) => {
                            console.log(response.data);
                            history.push("/imobiliarias");
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

    const onImobiliariaUpdate = (event)=>{
        event.preventDefault();

        let object = {
            nome_fantasia: event.target.formNomeFantasia.value,
            razao_social: event.target.formRazaoSocial.value,
            cnpj: event.target.formCNPJ.value,
        }

        axios
            .put('http://localhost:3003/imobiliaria/atualizar/'+token.id_imobiliaria, object,{
                headers: {
                    Authorization: token.token,
                }
            })
            .then((response) => {
                console.log(response.data);
                history.push("/dashboard");
            });
    }

    return(
        <ImobiliariasContext.Provider value={{ imobiliarias: imobiliarias, onImobiliariaSubmit: onImobiliariaSubmit, onImobiliariaUpdate: onImobiliariaUpdate}}>
            {props.children}
        </ImobiliariasContext.Provider>
    )
};

export default ImobiliariasProvider
