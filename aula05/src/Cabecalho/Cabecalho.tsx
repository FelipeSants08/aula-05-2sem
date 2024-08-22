export default function Cabecalho({tituloProps,avisoProps}:{tituloProps:string, avisoProps:Function}){
    
    document.title = tituloProps;


    return(
        <header>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso do pai</button>
            </div>
        </header>
    );
}