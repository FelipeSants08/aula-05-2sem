type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:number | string;
    statusProps: "loading" | "deployed"
    avisoProps:(Function);
}

export default function Cabecalho({paginaProps, nrPaginaProps, statusProps, avisoProps}:CabecalhoProps){
    
    document.title = statusProps+" - "+nrPaginaProps;


    return(
        <header>
            <h1>{statusProps+" - "+nrPaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso do pai</button>
            </div>
        </header>
    );
}