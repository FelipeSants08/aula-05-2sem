import { Cabecalho1Props, Cabecalho2Props } from "../types";

export default function Cabecalho({ paginaProps, nrPaginaProps, statusProps, avisoProps }: Cabecalho1Props & Cabecalho2Props) {

    document.title = statusProps + " - " + nrPaginaProps;

    return (
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do pai</button>
            </div>
        </header>
    );
}