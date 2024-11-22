import Botao from "@/components/Botao/Botao";
import Link from "next/link";

export default function Erro() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center border border-slate-200 h-5/6 w-full p-8 lg:w-5/6 lg:shadow-2xl lg:gap-10 xl:pb-20">
        {/* Mensagem de Erro */}
        <h1 className="text-4xl font-bold text-center m-10 text-blue-600 lg:text-6xl">
          Ops! Algo deu errado!
        </h1>
        <p className="text-xl font-semibold text-center lg:text-3xl text-gray-700">
          Você pode tentar resolver clicando em um dos links acima ou no botão abaixo.
        </p>

        {/* Animação */}
        <iframe
          className="m-3 w-64 h-64 lg:w-96 lg:h-96"
          src="https://lottie.host/embed/4b5ecd27-58e4-452e-957d-75e9dbf3fba7/nMlkBxD8SR.json"
          title="Erro Animation"
        ></iframe>

        {/* Botão para Voltar */}
        <div className="pb-10">
          <Link href="/">
            <Botao tipo="button">Ir para a Home</Botao>
          </Link>
        </div>

        {/* Mensagem de Verificação */}
        <p className="font-bold text-lg text-center lg:text-2xl text-gray-600">
          Se isso não resolver, verifique sua conexão com a internet.
        </p>
      </div>
    </main>
  );
}
