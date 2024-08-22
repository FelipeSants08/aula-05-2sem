import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Conteudo from "./Components/Conteudo/Conteudo";
import Rodape from "./Components/Rodape/Rodape";

export default function App() {
  const titulo:string = "Minha página principal"
  const aviso = ()=> alert(titulo)
  // const numero: number = 2
  // const listaDeNomes: string[] = ["João", "Maria", "Pedro"]
  // const objeto: {nome: string, idade:number} = {nome: "João", idade: 25}
  // const objeto2: {nome: string, idade:number, isEstudante?:boolean} = {nome: "Maria", idade: 30}
  // const elementoDiv: HTMLDivElement = document.createElement('div')


  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}