import React,{ useState, useEffect} from 'react';
export const CargosContext = React.createContext();

const CargosProvider = (props) =>{
    const [cargos,setCargos] = useState({});

    useEffect(()=>{
        setCargos(
            [
                {
                    id:0,
                    descricao: "Administrador",
                    nivel_acesso: "1"
                },
                {
                    id:1,
                    descricao: "Vendedor",
                    nivel_acesso: "2"
                },
                {
                    id:2,
                    descricao: "Funcionário",
                    nivel_acesso: "3"
                },
                {
                    id:3,
                    descricao: "Visitante",
                    nivel_acesso: "4"
                }
            ]
        )
    }, [])
    
    const onCargoSubmit = (event) =>{
        event.preventDefault();
        let newCargos = [...cargos,
        {
          id:cargos.length,
          descricao: event.target.cargoDescricao.value,
          nivel_acesso: event.target.cargoNivelAcesso.value,
        }
        ];
        console.log(newCargos);
        setCargos(newCargos);
      }

    const deleteCargoHandler = (index) =>{
        let newCargos = cargos.slice();
        newCargos.splice(index,1);
        setCargos(newCargos);
    }

    
    return(
        <CargosContext.Provider value={{ cargos: cargos, onCargoSubmit:onCargoSubmit, deleteCargoHandler:deleteCargoHandler}}>
            {props.children}
        </CargosContext.Provider>
    )
};

export default CargosProvider
