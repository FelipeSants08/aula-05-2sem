type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps: number | string;
    statusProps: "loading"| "deployed";
    avisoProps:()=> void;
}


export default function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}: CabecalhoProps) {

    document.title =statusProps + " - " + nrPaginaProps

    // const aluno = {
    //     nome: 'João',
    //     idade: 20,
    //     isAluno: true
    // }

    // const {nome, idade,...resto} = aluno;

    //addEventListener("click", ()=> {}) == onClick={()=> obj}

  return (
    <header>
        <h1>{paginaProps + " - " + nrPaginaProps}</h1>
        <div>
            <button onClick={()=> avisoProps()}>Aviso do pai</button>
        </div>
        {/* <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>É aluno: {resto.isAluno.toString()}</p>
        </div> */}
    </header>
  )
}
