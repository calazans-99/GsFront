import Equipe from "@/components/Equipe/Equipe";
import Carousel from "@/components/TesteEquipe/TestemunhosCarrousel";
import ListaDeTestemunhos from "@/components/Testemunhos/lista_testemunhos";
import Image from "next/image";
import help from "../../public/img/help.webp";
import guincho from "../../public/img/porto-guincho.webp";

export default function Home() {
  return (
    <>
      <div className="w-full celular:h-auto h-[200px] border-primary-dark border-t bg-primary flex justify-center items-center p-4">
        <h1 className="celular:text-3xl text-white text-6xl text-center">FlexEnergy</h1>
      </div>
      <section className="celular:flex-col-reverse celular:h-max! celular:py-4 celular:px-4 w-full flex justify-evenly items-center gap-3 my-4 md:h-[600px]">
        <div className="tablet:w-full w-1/2  flex justify-center items-center flex-col">
          <h3 className="celular:text-3xl celular:text-center text-5xl font-medium pb-16">Quem nós somos?</h3>
          <p className="celular:text-lg text-3xl font-light w-3/4 text-center ">
            Nós somos a Flex Energy, uma solução inovadora para promover o uso
            eficiente de energia sustentável. Nosso objetivo é ajudar você a
            monitorar, planejar e reduzir seu impacto ambiental.
          </p>
        </div>
        <div className="tablet:hidden w-1/2 flex justify-center items-center ">
          <Image
            src={help}
            alt="Ajudamos você com sua energia"
            height={400}
            width={400}
            className="celular:h-40 celular:w-40 h-[400px] object-contain rounded"
          />
        </div>
      </section>
      <section className="celular:h-auto celular:py-10 px-4 w-full h-[600px] bg-primary flex justify-center items-center flex-col">
        <h2 className="celular:text-center celular:text-3xl font-medium text-white text-5xl pb-[50px]">
          Como faremos isso?
        </h2>
        <p className="celular:text-lg celular:w-full celular:font-normal font-light text-white text-3xl text-center w-3/4">
          Utilizando nossa plataforma, você poderá monitorar seu consumo de
          energia, simular projetos de energia renovável, e receber relatórios
          detalhados. Nosso sistema analisa seus dados para oferecer diagnósticos
          e orientações que ajudam a reduzir custos e emissões de CO₂.
        </p>
      </section>
      <section className="celular:w-full celular:px-4 w-5/6 flex justify-evenly items-center gap-3 my-4 h-[600px] m-auto">
        <div className="tablet:hidden w-1/4 flex justify-center items-center">
          <Image src={guincho} alt="Imagem guincho" width={600} height={600}/>
        </div>
        <div className="celular:w-full! w-3/4 tablet:w-full flex justify-center items-center flex-col">
          <h2 className="celular:text-3xl celular:pb-7 font-medium text-center text-black text-5xl pb-[50px]">
          O que mais te oferecemos?
          </h2>
          <p className="celular:text-[20px] font-light text-black text-3xl text-center w-3/4">
            Além de monitoramento e diagnósticos, oferecemos soluções para
            otimizar seu consumo energético. Fornecemos também um guia de
            implementação de projetos de energia renovável, como painéis solares
            e turbinas eólicas.
          </p>
        </div>
      </section>
      <Carousel testemunhos={ListaDeTestemunhos} />
      <Equipe />
    </>
  );
}
