import Cabecalho from "./Cabecalho/Cabecalho";

export default function app(){

  const titulo:string = "Minha Página Principal!";



  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps = {titulo}/>
    </div>
  );
}

// const numero:number = 2;
  // const listaNomes:string[] = ["Bruno", "Paulo", "Marcos"];
  // const listaNomes2:[string,number,string] = ["Bruno", 1, "Marcos"];
  // const elementoDiv:HTMLDivElement = document.createElement('div');
  // const objeto:{nome:string, idade:number,} = {nome: "Bruno", idade: 22};
  // const objeto2:{nome:string, idade:number, isEstudante?:boolean} = {nome: "Paulo", idade: 32, isEstudante:true};