
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Exemplo Rotas",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
 
  return (
    <html lang="pt-br">
      <body className="conteudo">
        <Cabecalho/>
        <div className="wrapper">
          {children}
        </div>
        <Rodape/>
      </body>
    </html>
  );
}
