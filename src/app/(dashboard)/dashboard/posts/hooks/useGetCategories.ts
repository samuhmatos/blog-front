"use client";
import { usePostCategoryGetAll } from "@domain";

export function useGetCategories() {
  const { categories } = usePostCategoryGetAll();

  const categoriesOptions =
    categories?.map((value) => value.id.toString()) || [];

  return {
    categoriesOptions,
    categories,
  };
}
