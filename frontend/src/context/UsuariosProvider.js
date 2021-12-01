import React,{ useState, useEffect} from 'react';
export const UsuariosContext = React.createContext();

const UsuariosProvider = (props) =>{
    const [usuarios,setUsuarios] = useState({});

    useEffect(()=>{
        setUsuarios(
            [
                {
                    codigo: 0,
                    nome_completo: "Higor Rangel",
                    email: "hirgo@gmail.com",
                    contato: "12123451234",
                    Cargo: "Administrador",
                    situacao: "Ativo",
                },
            ]
        )
    }, [])
    
    return(
        <UsuariosContext.Provider value={{ usuarios: usuarios}}>
            {props.children}
        </UsuariosContext.Provider>
    )
};

export default UsuariosProvider
