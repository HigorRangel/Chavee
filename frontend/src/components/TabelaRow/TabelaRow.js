import React from 'react';
import '../Tabela/Tabela.css'

const Row = (props) =>{
    return(
        <tr>
            <td>
                    <div className="bordaStatus"></div>
                </td>
                {Object.values(cargos).map((dado,index) =>(
                <td  style={{width: (colunas[index].proporcao).toString() + "%"}}>{dado}</td>
                ))}
        </tr>
    )
}