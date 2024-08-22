type CabecalhoProps = {
    paginaProps:string; 
    nrPaginaProps:number | string;
    statusProps: "loading" | "deployed"
    avisoProps:()=> void;
}

export default function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:CabecalhoProps){

    document.title = statusProps+ " - "+nrPaginaProps;
    
    
    return(
        <header>
            <h1>{paginaProps+ " - "+nrPaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso do pai</button>
            </div>
        
        </header>
    );
}


