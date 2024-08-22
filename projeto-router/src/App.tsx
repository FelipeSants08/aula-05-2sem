import Cabecalho from "./Cabecalho/Cabecalho";

export default function App(){
  
  const titulo:string = "Minha pagina principal!";
  // const listaDeNomes:string[] = ["joao", "maria", "nelson"];
  // const listaDeNomes2:[string,number,string] = ["joao", 5, "nelson"];
  // const objeto:{nome:string,idade:number} = {nome: "maria",idade:20};
  // const objeto2:{nome:string,idade?:number} = {nome: "maria"};
  const aviso = ()=> alert(titulo);

  return(
    <div>
      <h1>Componente APP</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </div>
  );
}