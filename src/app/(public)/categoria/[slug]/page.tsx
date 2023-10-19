import { Screen, SideBar } from "@components";import { CategorySession } from "./components/CategorySession";
import { Category, postCategoryService } from "@domain";
import { notFound } from "next/navigation";
import { CategoryHeader } from "./components/CategoryHeader";
import { PageParams } from "@types";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { Metadata, ResolvingMetadata } from "next";

export interface PagePaginationParams {
  params: {
    slug: string;
    page?: number;
  };
}

async function loadCategory(categorySlug: string): Promise<Category> {
  try {
    return await postCategoryService.show(categorySlug);
  } catch (err) {
    let error = err as AxiosError<ErrorApi>;

    if (error.response?.status === 404) {
      throw notFound();
    }

    throw new Error(error.response?.data.message);
  }
}

export async function generateMetadata(
  { params }: PagePaginationParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const postCategory = await loadCategory(params.slug);

  return {
    title: postCategory.name,
    description: postCategory.description,
    abstract: postCategory.description,
  };
}

export default async function CategoryScreen(
  pageParams: PageParams<{ page: number }, { slug: string }>
) {
  const category = await loadCategory(pageParams.params.slug);

  return (
    <div className="-mt-1">
      <CategoryHeader category={category} />
      <Screen container>
        <CategorySession
          slug={category.slug}
          page={pageParams.searchParams.page}
        />
        <SideBar />
      </Screen>
    </div>
  );
}
