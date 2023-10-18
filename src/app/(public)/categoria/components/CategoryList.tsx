"use client";
import { usePostCategoryList } from "@domain";
import { Button, Icon, Pagination } from "@components";
import { linkUtils } from "@utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  page: number;
}

export function CategoryList({ page }: Props) {
  const router = useRouter();

  const { list, refetch, hasNextPage, hasPreviousPage, totalPage } =
    usePostCategoryList({
      page: page || 0,
      per_page: 9,
    });

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <div className="w-full lg:w-3/4">
      <div className="flex flex-wrap gap-4">
        {list.map((category) => (
          <div
            key={category.id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={linkUtils.linkCategory(category.slug)}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.name}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {category.description}
            </p>

            <Button
              placeholder="Ver as postagens"
              endIcon={<Icon name="ArrowRight" />}
              onClick={() => router.push(linkUtils.linkCategory(category.slug))}
            />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={page}
        currentUrl={linkUtils.linkCategories()}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        totalPage={totalPage}
        className="mt-5"
      />
    </div>
  );
}
