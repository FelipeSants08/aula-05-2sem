import Cabecalho from "./Cabecalho/Cabecalho";

export default function app(){

  const titulo:string = "Minha Página Principal!";
  const aviso = ()=> alert(titulo); 

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </div>
  );
}

