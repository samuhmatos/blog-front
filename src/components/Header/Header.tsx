import Image from "next/image";
import Link from "next/link";
import { Navigation, SearchInput, Actions } from "./components";
import { Category, postCategoryService } from "@domain";

export const revalidate = 7200; // 2 hours

async function getPopularCategories(): Promise<Category[]> {
  return await postCategoryService.getPopular();
}

export async function Header() {
  const categories = await getPopularCategories();

  return (
    <>
      <header className="w-full fixed top-0 z-10">
        <div className="py-2 px-3 bg-primary-500 font-semibold flex flex-col gap-2">
          <div className="flex justify-between items-center gap-3">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo do blog do Samuel Matos"
                width={45}
                height={45}
              />
            </Link>

            <div className="hidden 3sm:flex w-3/5 md:w-1/2 lg:w-1/3 ">
              <SearchInput />
            </div>

            <Actions />
          </div>

          <Navigation categories={categories} />
        </div>
      </header>

      <div className="h-16 md:h-28"></div>
    </>
  );
}
