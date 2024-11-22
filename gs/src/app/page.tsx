import Image from "next/image";
import help from "../../public/img/solar.webp";
import guincho from "../../public/img/banner-home.webp";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="w-full h-[200px] border-t border-primary-dark bg-primary flex justify-center items-center p-4">
        <h1 className="text-6xl text-white text-center celular:text-3xl">
          FlexEnergy
        </h1>
      </header>

      {/* Seção: Quem somos */}
      <section className="w-full flex justify-evenly items-center gap-3 my-4 md:h-[600px] celular:flex-col-reverse celular:h-max celular:py-4 celular:px-4">
        <div className="w-1/2 flex justify-center items-center flex-col tablet:w-full">
          <h3 className="text-5xl font-medium pb-16 text-center celular:text-3xl">
            Quem nós somos?
          </h3>
          <p className="text-3xl font-light w-3/4 text-center celular:text-lg">
            Nós somos a Flex Energy, uma solução inovadora para promover o uso
            eficiente de energia sustentável. Nosso objetivo é ajudar você a
            monitorar, planejar e reduzir seu impacto ambiental.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center tablet:hidden">
          <Image
            src={help}
            alt="Ajudamos você com sua energia"
            height={400}
            width={400}
            className="h-[400px] object-contain rounded celular:h-40 celular:w-40"
          />
        </div>
      </section>

      {/* Seção: Como faremos isso */}
      <section className="w-full h-[600px] bg-primary flex justify-center items-center flex-col px-4 celular:h-auto celular:py-10">
        <h2 className="text-5xl font-medium text-white pb-[50px] text-center celular:text-3xl">
          Como faremos isso?
        </h2>
        <p className="text-3xl font-light text-white text-center w-3/4 celular:text-lg">
          Utilizando nossa plataforma, você poderá monitorar seu consumo de
          energia, simular projetos de energia renovável e receber relatórios
          detalhados. Nosso sistema analisa seus dados para oferecer diagnósticos
          e orientações que ajudam a reduzir custos e emissões de CO₂.
        </p>
      </section>

      {/* Seção: O que mais oferecemos */}
      <section className="w-5/6 flex justify-evenly items-center gap-3 my-4 h-[600px] m-auto celular:w-full celular:px-4">
        <div className="w-1/4 flex justify-center items-center tablet:hidden">
          <Image
            src={guincho}
            alt="Imagem guincho"
            width={600}
            height={600}
          />
        </div>
        <div className="w-3/4 flex justify-center items-center flex-col tablet:w-full celular:w-full">
          <h2 className="text-5xl font-medium text-center pb-[50px] text-black celular:text-3xl celular:pb-7">
            O que mais te oferecemos?
          </h2>
          <p className="text-3xl font-light text-black text-center w-3/4 celular:text-[20px]">
            Além de monitoramento e diagnósticos, oferecemos soluções para
            otimizar seu consumo energético. Fornecemos também um guia de
            implementação de projetos de energia renovável, como painéis solares
            e turbinas eólicas.
          </p>
        </div>
      </section>
    </>
  );
}
