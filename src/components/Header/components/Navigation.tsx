"use client";
import Link from "next/link";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@domain";
import { linkUtils } from "@utils";
import Image from "next/image";
import { UserCard } from "../../UserCard/UserCard";
import { Icon } from "@components";

interface Props {
  isDropDown: boolean;
}

export function Navigation({ isDropDown }: Props) {
  const { user, logout } = useAuth();

  // return (
  //   <div>

  //   </div>
  // )

  return (
    <div
      className={`${
        isDropDown ? "flex" : "hidden"
      } flex-1 flex-col absolute bg-primary-600 w-full mt-12 py-3 font-medium  lg:flex lg:flex-row lg:static lg:justify-around lg:mt-0 lg:py-0 2xl:text-lg`}
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
          <Icon
            name="Instagram"
            size="text-2xl"
            className="hover:text-zinc-300"
            link={{
              href: "https://www.instagram.com/samuh.matos/",
              target: "_blank",
            }}
          />
        </li>
        <li>
          <Icon
            name="LinkedIn"
            size="text-2xl"
            className="hover:text-zinc-300"
            link={{
              href: "https://www.linkedin.com/in/o-samuelmatos/",
              target: "_blank",
            }}
          />
        </li>
        <li>
          <Icon
            name="Envelope"
            size="text-2xl"
            className="hover:text-zinc-300"
            link={{
              href: "mailto:samuhmatos@gmail.com",
              target: "_blank",
            }}
          />
        </li>
        <li>
          <Icon
            name="GitHub"
            size="text-2xl"
            className="hover:text-zinc-300"
            link={{
              href: "https://github.com/samuhmatos",
              target: "_blank",
            }}
          />
        </li>
      </ul>
      <div className="flex items-center justify-center mt-2 ml-1 lg:mt-0">
        <ul className="flex items-center gap-3">
          {user ? (
            <UserCard />
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

// TODO: usercard appear by server rendering end then appear using the custom hook
