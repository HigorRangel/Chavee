import './PaginaErro.css'

const PaginaErro  = (props) => {
    return(
        <body id={"body-pagina-n-encontrada"}>
            <div className="conteudo">
                <h1 id="txt-pg-n-encontrada">PÁGINA NÃO ENCONTRADA</h1>
                <h2 id="txt-404" className={"text-center"}>404</h2>
            </div>
        </body>
    )
}
export default PaginaErro;