import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 px-8 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-200">
            Flex Energy
          </Link>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex space-x-6">
          <Link href="/home" className="hover:text-gray-200">
            Início
          </Link>
          <Link href="/sobre" className="hover:text-gray-200">
            Sobre
          </Link>
          <Link href="/projetos" className="hover:text-gray-200">
            Projetos
          </Link>
          <Link href="/usuarios" className="hover:text-gray-200">
            Usuários
          </Link>
          <Link href="/simulacoes" className="hover:text-gray-200">
            Simulações
          </Link>
          <Link href="/relatorios" className="hover:text-gray-200">
            Relatórios
          </Link>
        </nav>
      </div>
    </header>
  );
}
