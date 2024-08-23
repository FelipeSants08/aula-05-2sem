//interface é melhor usada para classes
// export interface CabecalhoProps {
//     paginaProps:string;
//     nrPaginaProps: number | string;
//     statusProps: "loading" | "deployed";
//     avisoProps:()=> void;
//     children:React.ReactNode;
// }

export type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps: number | string;
    statusProps: "loading" | "deployed";
    avisoProps:()=> void;
    children:React.ReactNode;
}