import Link from "next/link";
export function Copyrights() {
  return (
    <div>
      <h2 className="font-bold">Copyrights</h2>
      <ul className="text-sm mt-4 md:mt-8 text-gray-400">
        <li className="mb-1 hover:text-sky-500 transition-all">
          <Link href="/contact">Entre em contato</Link>
        </li>
        <li className="mb-1 hover:text-sky-500 transition-all">
          <Link href="/contact">Tem sugestão?</Link>
        </li>
      </ul>
    </div>
  );
}
