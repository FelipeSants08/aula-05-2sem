type CabecalhoProps = {
    tituloProps:string;
    avisoProps:()=> void;
}


export default function Cabecalho({tituloProps,avisoProps}: CabecalhoProps) {

    document.title = tituloProps

    // const aluno = {
    //     nome: 'João',
    //     idade: 20,
    //     isAluno: true
    // }

    // const {nome, idade,...resto} = aluno;

    //addEventListener("click", ()=> {}) == onClick={()=> obj}

  return (
    <header>
        <h1>{tituloProps}</h1>
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
