import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AxiosError } from "axios";

import { Screen, SideBar } from "@components";
import { ErrorApi } from "@api";
import { Category, postCategoryService } from "@domain";
import { PageParams } from "@types";

import { CategorySession } from "./components/CategorySession";
import { CategoryHeader } from "./components/CategoryHeader";
import { FeedSkeleton } from "../../components/Skeleton";

export const revalidate = 300; // 5 minutes

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
        <Suspense fallback={<FeedSkeleton />}>
          <CategorySession
            slug={category.slug}
            page={pageParams.searchParams.page}
          />
        </Suspense>
        <SideBar />
      </Screen>
    </div>
  );
}
