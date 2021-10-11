import React from "react";

import "./PainelSombreado.css";

function PainelSombreado({elemento}){
    return(
        <div className="sombra border">
            {elemento}
        </div>
    )
}

export default PainelSombreado;