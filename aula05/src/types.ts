export type Cabecalho1Props = {
    paginaProps: string;
    nrPaginaProps: number | string;
    children:React.ReactNode;
}

export interface Cabecalho2Props { // Trocou de type pra interface, melhor pra usar quando há muitos objetos/classes
    statusProps: "loading" | "deployed" | "xuxu"
    avisoProps: (Function);
}