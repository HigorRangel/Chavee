import React,{ useState, useEffect} from 'react';
export const UsuariosContext = React.createContext();

const UsuariosProvider = (props) =>{
    const [usuarios,setUsuarios] = useState({});

    useEffect(()=>{
        setUsuarios(
            [
                {
                    id: 0,
                    nome_completo: "Higor Rangel",
                    email: "hirgo@gmail.com",
                    contato: "12123451234",
                    cargo: "Administrador",
                    situacao: "Ativo",
                },
            ]
        )
    }, [])
    
    const onUsuarioSubmit = (event) =>{
        event.preventDefault();
        let newUsuarios = [...usuarios,
        {
          id:usuarios.length,
          nome_completo: (event.target.usuarioNome.value + " " + event.target.usuarioNomeMeio.value+ " " + event.target.usuarioNomeUltimo.value),
          email: event.target.usuarioEmail.value,
          contato: event.target.usuarioContato.value,
          cargo: event.target.usuarioCargo.value,
          situacao: event.target.usuarioSituacao.value,
        }
        ];
        setUsuarios(newUsuarios);
      }

    return(
        <UsuariosContext.Provider value={{ usuarios: usuarios, onUsuarioSubmit:onUsuarioSubmit}}>
            {props.children}
        </UsuariosContext.Provider>
    )
};

export default UsuariosProvider
