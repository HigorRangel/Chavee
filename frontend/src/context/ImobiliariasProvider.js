import React,{ useState, useEffect} from 'react';
import validator from 'validator';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export const ImobiliariasContext = React.createContext();

const ImobiliariasProvider = (props) =>{
    const [imobiliarias,setImobiliarias] = useState({});
    let history = useHistory();

    useEffect(()=>{
        const intervalId = setInterval(() => {
        axios
            .get('http://localhost:3003/imobiliaria/listar')
            .then((response) =>{
                setImobiliarias(response.data);
            })
        },1000)

        return () => clearInterval(intervalId);
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
        <ImobiliariasContext.Provider value={{ imobiliarias: imobiliarias, onImobiliariaSubmit: onImobiliariaSubmit}}>
            {props.children}
        </ImobiliariasContext.Provider>
    )
};

export default ImobiliariasProvider
