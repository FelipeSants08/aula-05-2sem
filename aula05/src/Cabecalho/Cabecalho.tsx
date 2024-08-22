type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:number | string // union - types
    statusProps: "loading" | "deployed" | "xuxu"
    avisoProps:Function;
}

export default function Cabecalho({paginaProps, nrPaginaProps, statusProps, avisoProps}:CabecalhoProps) {
    
    document.title = statusProps+ " - " + nrPaginaProps

    // addEventListener("click", ()=> {})

    return(
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso do pai</button>
            </div>
        </header>
    );
}




// export default function Cabecalho(props:{tituloProps:string, avisoProps:Function}) {
    
//     document.title = props.tituloProps;
    
//     const aluno: {nome:string,idade:number,isAluno:boolean,nacionalidade:string} = {
//         nome: 'João',
//         idade: 20,
//         isAluno: true,
//         nacionalidade:"brasileiro"
//     }

//     const {nome, idade, ...resto} = aluno;

//     // addEventListener("click", ()=> {})

//     return(
//         <header>
//             <h1>{props.tituloProps}</h1>
//             <div>
//                 <button onClick={()=> props.avisoProps()}>Aviso do pai</button>
//             </div>
//             <div>
//                 <p>Nome: {nome}</p>
//                 <p>Idade: {idade}</p>
//                 <p>É aluno: {resto.isAluno.toString()}</p>
//                 <p>Nacionalidade: {resto.nacionalidade}</p>
//             </div>
//         </header>
//     );
// }