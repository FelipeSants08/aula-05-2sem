import Cabecalho from "./Cabecalho/Cabecalho";

export default function App() {

  const pagina: string = "Minha página principal!";
  const nrPagina: string = "DOIS";
  const status = "xuxu";
  const aviso = () => alert(pagina);

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso} />
    </div>
  );
}