export type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps: number | string;
    statusProps: "loading" | "deployed";
    avisoProps:()=> void;
    children:React.ReactNode;
}