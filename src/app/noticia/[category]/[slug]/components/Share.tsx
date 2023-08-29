import Link from "next/link";import { BsFacebook, BsTwitter } from "react-icons/bs";

interface Props {
  justify?: "center" | "normal";
}
export function Share({ justify = "center" }: Props) {
  return (
    <nav className={`text-white font-bold flex gap-2 justify-${justify} my-4`}>
      <button
        className="px-6 py-3 bg-blue-900 flex items-center gap-4 rounded transition-all hover:bg-blue-950"
        type="button"
      >
        <BsFacebook />
        <span>Compartilhar no Facebook</span>
      </button>
      <button className="px-6 py-3 bg-sky-400 flex items-center gap-4 rounded transition-all hover:bg-sky-500">
        <BsTwitter />
        <span>Compartilhar no Twitter</span>
      </button>
    </nav>
  );
}
