import { Screen, SideBar } from "@components";
import { CategorySession } from "./components/CategorySession";
import { Category, postCategoryService } from "@domain";
import { notFound } from "next/navigation";
import { CategoryHeader } from "./components/CategoryHeader";
import { PageParams } from "@types";

export interface PagePaginationParams {
  params: {
    slug: string;
    page?: number;
  };
}

async function loadCategory(categorySlug: string): Promise<Category> {
  try {
    return await postCategoryService.show(categorySlug);
  } catch (error) {
    console.log(error);
    throw notFound();
  }
}

export default async function CategoryScreen(
  pageParams: PageParams<{ page: number }, { slug: string }>
) {
  const category = await loadCategory(pageParams.params.slug);

  return (
    <>
      <CategoryHeader category={category} />
      <Screen container>
        <CategorySession
          slug={pageParams.params.slug}
          page={pageParams.searchParams.page}
        />
        <SideBar />
      </Screen>
    </>
  );
}
