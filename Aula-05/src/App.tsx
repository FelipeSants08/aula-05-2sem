import Cabecalho from './Cabecalho/Cabecalho'

export default function App() {

  const pagina:string = "Minha página principal!"
  const nrPagina: number = 2;
  const status:string =  "loading";
 // const numero:number = 2
  //const listaDeNomes: string[] = ["João", "Maria", "Pedro"]
  //const listaDeNomes2: [string,number,string] = ["João", 2, "Pedro"]
 //const objeto: {nome:string,idade:number} = {nome: "João", idade: 25}
  //const objeto2: {nome:string,idade:number, isEstudante?: boolean} = {nome: "Maria", idade:30, isEstudante:true}
  //const elementoDiv: HTMLDivElement = document.createElement('div')
  const aviso = ()=> alert(pagina);

  return (
    <div>
      <h1>Componete App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
    </div>
  )
}

