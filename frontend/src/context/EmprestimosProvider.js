import React,{ useState, useEffect} from 'react';
export const EmprestimosContext = React.createContext();

const EmprestimosProvider = (props) =>{
    const [emprestimos,setEmprestimos] = useState({});

    useEffect(()=>{
        setEmprestimos(
            [
                {
                    codigo: 0,
                    codigo_imovel:"V345",
                    codigo_chave:"485C",
                    endereco: "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana",
                    descricao:"Teste",
                    nome_cliente:"GABRIEL",
                    data_entrega:"01/01/1969",
                    data_retirada:"01/01/1969"
                },
                {
                    codigo: 1,
                    codigo_imovel:"V345",
                    codigo_chave:"485C",
                    endereco: "Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana",
                    descricao:"Teste",
                    nome_cliente:"GABRIEL",
                    data_entrega:"01/01/1969",
                    data_retirada:"01/01/1969"
                },
            ]
        )
    }, [])
    
    return(
        <EmprestimosContext.Provider value={{ emprestimos: emprestimos}}>
            {props.children}
        </EmprestimosContext.Provider>
    )
};

export default EmprestimosProvider
