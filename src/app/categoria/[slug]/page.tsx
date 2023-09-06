import { Screen, SideBar } from "@components";
import { CategorySession } from "./components/CategorySession";
import { Category, postCategoryService } from "@domain";
import { notFound } from "next/navigation";
import { CategoryHeader } from "./components/CategoryHeader";

export interface PageParams {
  params: {
    slug: string;
    page?: number;
  };
}

async function loadCategory(slug: string): Promise<Category> {
  try {
    return await postCategoryService.show(slug);
  } catch (error) {
    throw notFound();
  }
}

export default async function CategoryScreen({ params }: PageParams) {
  const category = await loadCategory(params.slug);
  return (
    <>
      <CategoryHeader category={category} />
      <Screen container>
        <CategorySession params={params} category={category} />
        <SideBar />
      </Screen>
    </>
  );
}
