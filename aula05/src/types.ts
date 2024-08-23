export type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps: number | string;
    statusProps: "loading" | "deployed" | "xuxu";
    avisoProps: (Function);
    children: React.ReactNode;
}
export type Cabecalho2Props = {
    statusProps: "loading" | "deployed" | "xuxu";
    avisoProps: (Function);
}