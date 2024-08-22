import Cabecalho from "./components/Cabecalho/Cabecalho";
import Exemplo from "./components/Exemplo/Exemplo"

export default function App() {

  const pagina:string = "Minha página principal!";
  const nrPagina:number = 2;
  const status = "loading";
  const aviso = ()=> alert(pagina);
  
  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
      <Exemplo name={"Victor"} outroAlerta={()=> alert("Atenção")}/> 
    </div>
  );
}