import Link from "next/link";

export default function Menu() {
  return (
    <nav>
        <ul>
            <li> <Link  className="hover:underline hover:text-yellow-600" href="/">Home</Link> </li>
            <li> <Link className="hover:underline hover:text-yellow-600" href="/produtos">Produtos</Link> </li>
            <li> <Link className="hover:underline hover:text-yellow-600" href="/produtos/cad-produtos">Cadastro de Produtos</Link> </li>
        </ul>
    </nav>
  )
}
