import React from "react";
import "./BotaoCadastro.css";
import {Button} from "react-bootstrap"



const BotaoCadastro = (props) => {
    return(
        <div className="d-flex justify-content-end my-3">
          <Button variant="primary" href={props.link}>{props.texto}</Button>
        </div>
        
)
}
export default BotaoCadastro;