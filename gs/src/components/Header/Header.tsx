import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 px-8 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <a className="hover:text-gray-200">Flex Energy</a>
          </Link>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex space-x-6">
          <Link href="/home">
            <a className="hover:text-gray-200">Início</a>
          </Link>
          <Link href="/sobre">
            <a className="hover:text-gray-200">Sobre</a>
          </Link>
          <Link href="/projetos">
            <a className="hover:text-gray-200">Projetos</a>
          </Link>
          <Link href="/usuarios">
            <a className="hover:text-gray-200">Usuários</a>
          </Link>
          <Link href="/simulacoes">
            <a className="hover:text-gray-200">Simulações</a>
          </Link>
          <Link href="/relatorios">
            <a className="hover:text-gray-200">Relatórios</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
