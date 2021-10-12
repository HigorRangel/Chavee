import React from "react";

import "./SecaoSombreada.css";

function SecaoSombreada({elemento}){
    return(
        <div className="sombra-inferior border">
            {elemento}
        </div>
    )
}

export default SecaoSombreada;