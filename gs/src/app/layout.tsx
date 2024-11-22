import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"; // Corrigido caminho do Footer, se necessário.

export const metadata: Metadata = {
  title: "Flex Energy - Eficiência Energética",
  description: "Plataforma inteligente para monitorar e reduzir o consumo de energia de forma sustentável.",
  keywords: ["energia sustentável", "eficiência energética", "projetos renováveis", "Flex Energy"],
  openGraph: {
    title: "Flex Energy - Eficiência Energética",
    description: "Soluções inteligentes para eficiência energética e sustentabilidade.",
    url: "https://www.flexenergy.com", // Ajuste o domínio para o correto.
    images: [
      {
        url: "/img/logo.png", // Atualize para o caminho real do logo.
        width: 800,
        height: 600,
        alt: "Flex Energy - Plataforma de Eficiência Energética",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flex Energy",
    description: "Monitoramento inteligente para redução de consumo energético.",
    images: ["/img/logo.png"], // Atualize com o caminho correto.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main role="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
