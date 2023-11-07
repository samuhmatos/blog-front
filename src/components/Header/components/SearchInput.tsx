"use client";
import { Icon, InputText, Button } from "@components";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { changeRoute } from "nextjs-progressloader";
import { FormEvent, useCallback, useRef, useState } from "react";

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [path, setPath] = useState<string>(pathname);
  const [value, setValue] = useState<string>("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const url = pathname + "?" + createQueryString("search", value);
    setPath(url);

    if (pathname === "/" || pathname.includes("/categoria")) {
      setTimeout(() => {
        linkRef.current?.click();
      }, 10);
    } else {
      changeRoute("home", {
        queryStrings: [
          {
            key: "search",
            value,
          },
        ],
      });
    }
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <form className="h-9.5 w-full flex" onSubmit={handleSearch}>
      <Link href={path} ref={linkRef} />
      <div className="flex-grow">
        <InputText
          name="search"
          value={value}
          setValue={setValue}
          type="search"
          className="rounded-none rounded-l-lg rounded-r-none"
          placeholder="Pesquisar..."
        />
      </div>
      <Button
        placeholder={<Icon name="Search" />}
        loadingPosition="center"
        className="rounded-l-none"
        type="submit"
      />
    </form>
  );
}
