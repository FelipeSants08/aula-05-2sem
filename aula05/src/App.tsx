import Cabecalho from "./Cabecalho/Cabecalho";

export default function App(){

  const titulo:string = "Minha página principal!";

  return (
    <div> 
      <h1> Componente App</h1>
      <Cabecalho tituloProps={titulo}/>
    </div>
  );
}
