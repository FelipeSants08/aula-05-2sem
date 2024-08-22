import Cabecalho from "./Cabecalho/Cabecalho";

export default function app(){

  const pagina:string = "Minha Página Principal!";
  const nrPagina:number = 2;
  const status = "loading";
  const aviso = ()=> alert(pagina); 

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
    </div>
  );
}

