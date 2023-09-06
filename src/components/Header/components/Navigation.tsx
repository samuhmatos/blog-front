"use client";
import Link from "next/link";
import { BsInstagram, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@domain";
import { linkUtils } from "@utils";

interface Props {
  isDropDown: boolean;
}

export function Navigation({ isDropDown }: Props) {
  const { user, logout } = useAuth();

  return (
    <div
      className={`${
        isDropDown ? "flex" : "hidden"
      } flex-1 flex-col absolute bg-sky-500 w-full mt-12 py-3 font-medium  lg:flex lg:flex-row lg:static lg:justify-around lg:mt-0 lg:py-0 2xl:text-lg`}
    >
      <ul className="flex justify-center items-center flex-wrap">
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300 "
            href={linkUtils.linkCategory("tech")}
          >
            Tech
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300 "
            href={linkUtils.linkCategory("videos")}
          >
            Videos
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300 "
            href={linkUtils.linkCategory("portfolio")}
          >
            Portfólio
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300 "
            href={linkUtils.linkCategory("qualificacoes")}
          >
            Qualificações
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300 "
            href={linkUtils.linkCategory("reviews")}
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            className="px-2 py-2 hover:text-zinc-300 active:text-zinc-300 "
            href="/contato"
          >
            Contato
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-center mt-2 gap-3 text-2xl lg:mt-0">
        <li>
          <Link
            className=" hover:text-zinc-300"
            href="https://www.instagram.com/samuh.matos/"
            target="_blank"
          >
            <BsInstagram />
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-zinc-300"
            href="https://www.linkedin.com/in/o-samuelmatos/"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-zinc-300"
            href="mailto:samuhmatos@gmail.com"
            target="_blank"
          >
            <BsFillEnvelopeFill />
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-zinc-300"
            href="https://github.com/samuhmatos"
            target="_blank"
          >
            <BsGithub />
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-center mt-2 ml-1 lg:mt-0">
        <ul className="flex items-center gap-3">
          {user && user.isAdmin && (
            <li className="hover:text-zinc-300">
              <Link href="/dashboard">Painel</Link>
            </li>
          )}
          {user ? (
            <li className="hover:text-zinc-300">
              <button type="button" onClick={logout}>
                Desconectar
              </button>
            </li>
          ) : (
            <>
              <li className="hover:text-zinc-300">
                <AuthModal isSignIn />
              </li>
              <li className="hover:text-zinc-300">
                <AuthModal />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
