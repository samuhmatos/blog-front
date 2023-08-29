"use client";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";

export function Header() {
  const [isDropDown, setIsDropDown] = useState(false);
  var logged = true;
  var is_admin = true;

  return (
    <header className="h-12 w-full">
      <div className="py-2 w-full fixed z-10 bg-sky-500 font-semibold lg:px-3">
        <nav className="flex justify-between text-zinc-100">
          <Link className="m-auto" href="/">
            <Image
              src="/assets/tech-logo.png"
              alt="Logo do blog do Samuel Matos"
              width={200}
              height={50}
            />
          </Link>

          <button
            className="mr-2 lg:hidden"
            type="button"
            onClick={() => setIsDropDown((value) => !value)}
          >
            <div className="flex">
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-zinc-100 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-zinc-100 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-zinc-100 animate-pulse"></span>
              </div>
            </div>
          </button>
          <div
            className={`${
              isDropDown ? "flex" : "hidden"
            } flex-1 flex-col absolute bg-sky-500 w-full mt-12 py-3 font-medium  lg:flex lg:flex-row lg:static lg:justify-around lg:mt-0 lg:py-0 2xl:text-lg`}
          >
            <ul className="flex justify-center items-center flex-wrap">
              <li>
                <Link className="px-2 py-2 hover:text-zinc-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-2 hover:text-zinc-300"
                  href="/category/videos"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-2 hover:text-zinc-300"
                  href="/category/videos"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-2 hover:text-zinc-300"
                  href="/category/portfolio"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-2 hover:text-zinc-300"
                  href="/category/qualificacoes"
                >
                  Qualificações
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-2 hover:text-zinc-300"
                  href="/category/reviews"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="px-2 py-2 hover:text-zinc-300" href="/contact">
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
                {is_admin && (
                  <li className="hover:text-zinc-300">
                    <Link href="/dashboard">Painel</Link>
                  </li>
                )}
                {logged ? (
                  <li className="hover:text-zinc-300">
                    <button type="button" onClick={() => {}}>
                      Desconectar
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="hover:text-zinc-300">
                      <Link href="/login">Entrar</Link>
                    </li>
                    <li className="hover:text-zinc-300">
                      <Link href="/signUp">Cadastrar</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
