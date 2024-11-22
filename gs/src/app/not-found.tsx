import Botao from "@/components/Botao/Botao";
import Link from "next/link";

export default function Erro() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center border border-slate-200 h-5/6 w-full p-8 lg:w-5/6 lg:shadow-2xl lg:gap-10 xl:pb-20">
        <h1 className="text-4xl font-bold text-center m-10 text-blue-600 lg:text-6xl">
          Deu problema, erro 404
        </h1>
        <p className="text-xl font-semibold text-center lg:text-3xl text-gray-700">
          Click em um dos links acima ou no botão abaixo.
        </p>

        <div className="pb-10">
          <Link href="/">
            <Botao tipo="button">Ir para a Home</Botao>
          </Link>
        </div>

        <p className="font-bold text-lg text-center lg:text-2xl text-gray-600">
          Se isso não resolver, verifique sua conexão com a internet.
        </p>
      </div>
    </main>
  );
}
