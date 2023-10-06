"use client";
import { Icon, InputText, Button } from "@components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [value, setValue] = useState<string>("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const url = pathname + "?" + createQueryString("search", value);
    router.push(url, { scroll: true });
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
