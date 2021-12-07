import "./PaginaSemPermissao.css"
import imagemErro from "../../images/erro-permissao.svg"


const PaginaSemPermissao  = (props) => {
    return(
        <body id={"body-pagina-s-permissao"}>
            <div id={"div-conteudo-s-permissao"} className="conteudo">
                <img src={imagemErro} alt={"Erro"}></img>
                <h1 id="txt-pg-s-permissao" className="mb-3">SEM PERMISSÃO</h1>
                <h2 id="txt-s-permissao" className={"text-center"}>
                    Você não tem permissão para acessar esse recurso. <br />
                    Entre em contato com seu administrador.
                </h2>
            </div>
        </body>
    )
}
export default PaginaSemPermissao;