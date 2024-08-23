import { Cabecalho2Props, CabecalhoProps } from "../types";

export default function Cabecalho({ paginaProps, nrPaginaProps, statusProps, avisoProps, children }: CabecalhoProps & Cabecalho2Props) {

    document.title = statusProps + " - " + nrPaginaProps;

    return (
        <header>
            <h1>{paginaProps + " - " + nrPaginaProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do pai</button>
            </div>
            <div>
                {children}
            </div>
        </header>
    );
}